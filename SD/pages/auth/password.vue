<template>
  <div>
    <CommonThirdNav/>
    <div class="container PAsswordContainer">
      <div class="row">
        <div class="col-md-6">
          <div class="login-form mt-3">
            <h2 class="fw-bolder CreateAnAccount">Create An Account</h2>
            <hr />
            <form @submit.prevent="submitForm">
              <div class="mb-5">
                <label for="username" class="form-label formInputNames">Username *</label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  v-model="formData.username"
                  :class="{ 'border-success': isUsernameAvailable, 'border-danger': !isUsernameAvailable && formData.username.length > 3 }"
                  placeholder="Choose a unique username"
                  required
                  autocomplete="username"
                />
                <small v-if="formData.username.length <= 3" class="text-danger">Username must be more than 3 characters</small>
                <small v-if="!isUsernameAvailable && formData.username.length > 3" class="text-danger">Username is not available</small>
              </div>

              <div class="mb-3">
                <label for="password" class="form-label formInputNames">Password *</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="formData.password"
                  placeholder="Enter your password"
                  required
                  autocomplete="new-password"
                />
                <small>Your password must:</small>
                <ul class="password-requirements list-unstyled">
                  <li class="d-flex align-items-center gap-2">
                    <i :class="passwordLengthValid ? 'bi bi-check-circle text-success' : 'bi bi-x-circle text-danger'"></i>
                    Be a minimum of 8 characters
                  </li>
                  <li class="d-flex align-items-center gap-2">
                    <i :class="containsLowercase ? 'bi bi-check-circle text-success' : 'bi bi-x-circle text-danger'"></i>
                    Include at least one lowercase letter (a-z)
                  </li>
                  <li class="d-flex align-items-center gap-2">
                    <i :class="containsUppercase ? 'bi bi-check-circle text-success' : 'bi bi-x-circle text-danger'"></i>
                    Include at least one uppercase letter (A-Z)
                  </li>
                  <li class="d-flex align-items-center gap-2">
                    <i :class="containsNumber ? 'bi bi-check-circle text-success' : 'bi bi-x-circle text-danger'"></i>
                    Include at least one number (0-9)
                  </li>
                  <li class="d-flex align-items-center gap-2">
                    <i :class="containsSpecialChar ? 'bi bi-check-circle text-success' : 'bi bi-x-circle text-danger'"></i>
                    Include at least one special character (!$@%-)
                  </li>
                </ul>
              </div>
              <div class="mb-4">
                <label for="confirm-password" class="form-label formInputNames">Confirm Password *</label>
                <input
                  type="password"
                  class="form-control"
                  id="confirm-password"
                  v-model="formData.confirmPassword"
                  placeholder="Confirm your password"
                  required
                  autocomplete="new-password"
                />
              </div>
              <div class="mb-5 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="terms"
                  v-model="formData.agreeTerms"
                  required
                />
                <label class="form-check-label" for="terms">
                  I agree to SocialDealr’s <span class="PrivacyPolicy" style="color: #2FBBDA; cursor: pointer;">Privacy Policy</span> and <span class="PrivacyPolicy" style="color: #2FBBDA; cursor: pointer;">Terms of Service</span>
                </label>
              </div>
              <div class="d-grid gap-2 mb-5">
                <button
                  class="btn NextButton"
                  type="submit"
                  :disabled="!isFormValid"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-1 divider-col">
          <div class="vertical-divider"></div>
        </div>
        <div class="col-md-5">
          <div class="login-image">
            <img class="dummmyImg" src="@/assets/images/MobileLogin.png" alt="Login Image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '~/store/auth'; // Import the auth store
import debounce from 'lodash/debounce'; // Import lodash debounce

const { $notyf } = useNuxtApp();
const authStore = useAuthStore();
const router = useRouter();

const formData = ref({
  username: "",
  password: "",
  confirmPassword: "",
  agreeTerms: false,
});

const user_id = ref(null);
const isUsernameAvailable = ref(false);
const isFormValid = ref(false);


onMounted(() => {
  if(process.client){
  const user = localStorage.getItem("user");
  user_id.value = JSON.parse(user).id;
  console.log(user_id.value);
  }
});

// Password validation checks
const passwordLengthValid = ref(false);
const containsLowercase = ref(false);
const containsUppercase = ref(false);
const containsNumber = ref(false);
const containsSpecialChar = ref(false);

const validatePassword = (password) => {
  passwordLengthValid.value = password.length >= 8;
  containsLowercase.value = /[a-z]/.test(password);
  containsUppercase.value = /[A-Z]/.test(password);
  containsNumber.value = /[0-9]/.test(password);
  containsSpecialChar.value = /[$@!%\-]/.test(password);
};

// Watch for changes in the password field
watch(() => formData.value.password, (newPassword) => {
  validatePassword(newPassword);
});

// Watch for changes in other fields to update form validity
watch([() => formData.value.username, () => formData.value.password, () => formData.value.confirmPassword, () => isUsernameAvailable.value, () => formData.value.agreeTerms], () => {
  isFormValid.value = isUsernameAvailable.value &&
    formData.value.username.length > 3 &&
    formData.value.password === formData.value.confirmPassword &&
    passwordLengthValid.value &&
    containsLowercase.value &&
    containsUppercase.value &&
    containsNumber.value &&
    containsSpecialChar.value &&
    formData.value.agreeTerms;
});

const debouncedUserNameCheck = debounce(async (username) => {
  try {
    const response = await authStore.userNameCheck({ username });
    isUsernameAvailable.value = response.data.data.available;
  } catch (error) {
    console.error('Error checking username:', error);
    isUsernameAvailable.value = false;
  }
}, 300);

// Watch for changes in the username field
watch(() => formData.value.username, (newUsername) => {
  if (newUsername.length > 3) {
    debouncedUserNameCheck(newUsername);
  } else {
    isUsernameAvailable.value = false; // Reset if username is too short
  }
});

const submitForm = async () => {
  try {
    const { username, password, confirmPassword } = formData.value;
    
    if (password !== confirmPassword) {
      $notyf.error("Passwords do not match");
      return;
    }

    if (!user_id.value) {
      $notyf.error("User not found");
      return;
    }

    const response = await authStore.setPassword({
      user_id: user_id.value,
      username,
      password,
      confirmPassword
    });

    if (response.status) {
      const otp = response.data.data.userotp.otp;
      localStorage.setItem('tempOTP', otp);
      $notyf.success(`Your OTP is: ${otp}`);
      router.push("/auth/verification");
    } else {
      $notyf.error("Failed to set password");
    }
  } catch (error) {
    $notyf.error("Password set failed:", error.message);
    console.error("Password set failed:", error.message);
  }
};
</script>






<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap");
.keepYourAccountSafe{
  font-family: Montserrat;
font-size: 18px;line-height: 39.01px;


}
img.dummmyImg {
    width: 602px;
  
    height: 760px;
}
input::placeholder{
  color: #DADADA;
  font-family: Montserrat;
font-size: 15px;
font-weight: 400;
line-height: 29.26px;
text-align: left;


}
.PAsswordContainer{
  max-width: 1455px;
}
.NextButton{
  padding: 20px 1px;
    width: 100%;
    border-radius: 17px;
    height: 25%;
    justify-content: center;
    display: flex;
    margin: 25px auto;
    background-color: #e8550d;
    font-family: Montserrat;
    font-size: 20px;
    color: white;
    font-weight: 500;
    line-height: 27.5px;
    align-items: center;
}

.CreateAnAccount{
  font-family: Montserrat;
font-size: 35px;
line-height: 68.5px;

}

.formInputNames{
  font-family: Montserrat;
font-size: 18px;
line-height: 39.01px;
text-align: left;

}









.divider-col {
  display: flex;
  align-items: center;
}

.vertical-divider {
  width: 1px;
  height: 100%;
  background-color: #bc1818;
}

.login-icons {
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
}

.login-icons .icon {
  color: #444;
  font-size: 24px;
  transition: color 0.3s;
}

.login-icons .icon:hover {
  color: #e33535;
}

.login-icons .icon img {
  height: 50px; /* Adjust height */
  width: 50px; /* Adjust width */
}

@media screen and (min-width:300px) and (max-width:500px) {
  .CreateAnAccount {
    font-size: 31px;
  }
  
}

</style>

<template>
  <div class="">
    <CommonThirdNav />
    <div class="container signUpform">
      <div class="row">
        <div class="col-md-6 mt-5 md-6">
          <div class="login-form mt-3">
            <h2 class="fw-bolder text-left CreateAnAccount">Create An Account</h2>
            <hr />
            <form @submit.prevent="register">
              <div class="row mb-3">
                <div class="col-6">
                  <label for="first-name" class="form-label fw-normal formInputNames">First Name*</label>
                  <input type="text" class="form-control" id="first-name" v-model="formData.firstName" required />
                </div>
                <div class="col-6">
                  <label for="last-name" class="form-label fw-normal formInputNames">Last Name*</label>
                  <input type="text" class="form-control" id="last-name" v-model="formData.lastName" required />
                </div>
              </div>
              <div class="mb-3">
                <label for="university-email" class="form-label formInputNames fw-normal">University Email Address *</label>
                <input
                  type="email"
                  class="form-control"
                  id="university-email"
                  v-model="formData.universityEmail"
                  placeholder="Please use your university email address: This will help us verify you!"
                  required
                  autocomplete="email"
                />
              </div>
              <div class="mb-3">
                <label for="phone-number" type="number" class="form-label formInputNames fw-normal">Phone Number *</label>
                <div class="input-group">
                  <span class="input-group-text NumberStarting fw-bolder">+44</span>
                  <input type="number" class="form-control" id="phone-number" v-model="formData.phoneNumber" required autocomplete="tel-national" />
                </div>
              </div>
              <div class="mb-3">
                <label for="birthdate" class="form-label formInputNames fw-normal">Birthdate</label>
                <input type="date" class="form-control" id="birthdate" v-model="formData.birthdate" autocomplete="bday" />
              </div>
              <div class="mb-3">
                <label for="referrer" class="form-label formInputNames fw-normal">How Did You Find Out About Us?</label>
                <select class="form-control" id="referrer" v-model="formData.referrer">
                  <option value="" disabled selected>Select an option</option>
                  <option value="friend">Friend</option>
                  <option value="social-media">Social Media</option>
                  <option value="search-engine">Search Engine</option>
                  <option value="advertisement">Advertisement</option>
                </select>
              </div>
              <div class="d-grid gap-2">
                <button class="btn NextButton" type="submit">Next</button>
              </div>
            </form>
          </div>
          <p class="mt-3 fw-normal OtherSignUpMethods">Other Sign Up Methods</p>
          <div class="login-icons mb-5">
            <a href="#" class="icon google"><img src="@/assets/images/google.png" alt="Google Logo" /></a>
            <a href="#" class="icon facebook"><img src="@/assets/images/FbIcon.png" alt="Facebook Logo" /></a>
            <a href="#" class="icon apple"><img src="@/assets/images/apple.png" alt="Apple Logo" /></a>
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '~/store/auth';
const { $notyf } = useNuxtApp();

const formData = ref({
  firstName: '',
  lastName: '',
  universityEmail: '',
  phoneNumber: '',
  birthdate: '',
  referrer: '',
});

const authStore = useAuthStore();
const router = useRouter();

const register = async () => {
  try {
    const user = await authStore.register(formData.value);
    if (user) {
      $notyf.success('Registration successful!. Please setup username and password.');
      router.push('/auth/password');
    }
  } catch (error) {
    $notyf.error('Registration failed:', error);
    console.error('Registration failed:', error);
    // Handle error (e.g., show error message to user)
  }

};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap");
.NumberStarting{
  font-family: Montserrat;
font-size: 17px;
line-height: 27.5px;
color:black;
}
.OtherSignUpMethods{
  font-family: Montserrat;
font-size: 15px;
line-height: 21.94px;

}
p.mt-3.fw-normal.OtherSignUpMethods {
    width: 75%;
    margin: 0px auto;
}

.formInputNames{
  font-family: Montserrat;
font-size: 18px;
line-height: 39.01px;
text-align: left;

}

.signUpform{
  margin: 0px auto;
  max-width: 1455px;
}


.CreateAnAccount{
  font-family: Montserrat;
font-size: 35px;
line-height: 68.5px;

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
/*  */


.divider-col {
  display: flex;
  align-items: center;
}
input::placeholder{
  font-family: Montserrat;
font-size: 15px;
font-weight: 400;
line-height: 29.26px;
text-align: left;

}img.dummmyImg {
    width: 602px;
  
    height: 760px;
}
.vertical-divider {
  width: 1px;
  height: 100%;
  background-color: #bc1818;
}



p {
  display: flex;
  flex-direction: row;
}
p:before,
p:after {
  content: "";
  flex: 1 1;
  border-bottom: 1px solid rgba(0, 0, 0, 0.423);
  margin: auto;
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

<template>
  <div class="">
    <CommonThirdNav/>
    <div class="container">
      <div class="row">
        <div class="col-md-6 mt-5">
          <div class="container">
            <p class="VErifyAccount fw-bolder">Verify Your Account</p>
            <hr />
            <p class="EnterFourDigitPAra">
              Please enter the 4 digit code we have sent to your email and phone
              number to verify your account. The code will be valid for 1 hour.
            </p>
            <div class="row">
              <div class="col-2"></div>
              <div class="col-8">
                <form @submit.prevent="submitOtpForm">
                  <div class="otp-inputs mb-4 mt-4">
                    <input
                      v-for="(input, index) in otp"
                      :key="index"
                      type="text"
                      class="form-control otp-input"
                      maxlength="1"
                      v-model="otp[index]"
                      @input="moveToNext(index, $event)"
                      required
                    />
                  </div>
                  <div class="countdown-timer mb-4 mt-4 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-clock ba-spin"
                      viewBox="0 0 16 16"
                      style="color: #e33535;"
                    >
                      <path
                        d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"
                      />
                      <path
                        d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"
                      />
                    </svg>
                    {{ minutes }}:{{ seconds }}
                  </div>

                  <div class=" gap-2 mb-5">
                    <button
                      class="verifyButton"
                     
                      type="submit"
                    >
                      Verify Code
                    </button>
                  </div>
                </form>
              </div>
              <div class="col-2"></div>
            </div>
          </div>
        </div>
        <div class="col-md-1 divider-col">
          <div class="vertical-divider"></div>
        </div>
        <div class="col-md-5">
          <div class="login-image">
            <img  class="dummmyImg"src="@/assets/images/MobileLogin.png" alt="Login Image" />
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useNuxtApp } from "#app";
import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore();

const otp = ref(["", "", "", ""]);
const minutes = ref(59);
const seconds = ref(59);
const user_id = ref(null);
const router = useRouter();
const { $api } = useNuxtApp();

const startCountdown = () => {
  const countdown = setInterval(() => {
    if (seconds.value > 0) {
      seconds.value--;
    } else {
      if (minutes.value > 0) {
        minutes.value--;
        seconds.value = 59;
      } else {
        clearInterval(countdown);
      }
    }
  }, 1000);
};

onMounted(() => {
  startCountdown();
  const userString = localStorage.getItem("user");
  if (userString) {
    const userData = JSON.parse(userString);
    user_id.value = userData.id;
    console.log("User ID:", user_id.value);
  } else {
    console.error("User data not found in localStorage");
  }
});

const moveToNext = (index, event) => {
  if (event.target.value.length === 1 && index < otp.value.length - 1) {
    event.target.nextElementSibling.focus();
  }
};

const submitOtpForm = async () => {
  try {
    const otpCode = otp.value.join("");
    if (!otpCode) {
      throw new Error("Please enter the OTP code");
    }

    if (!user_id.value) {
      throw new Error("User ID not found");
    }

    const response = await authStore.verifyOtp({
      user_id: user_id.value,
      otp: parseInt(otpCode)
    });

    if (response.status) {
      console.log("OTP verification successful:", response);
      // Update user data in localStorage if needed
      // For example:
      // const updatedUserData = response.data.user;
      // localStorage.setItem('user', JSON.stringify(updatedUserData));
      localStorage.removeItem('user');
      router.push("/auth/login");
    } else {
      throw new Error("OTP verification failed");
    }
  } catch (error) {
    console.error("OTP verification failed:", error.message);
    alert("OTP verification failed: " + error.message);
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap");

.verifyButton{

  padding: 9px 1px;
    width: 89%;
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
text-align: center;

}


.EnterFourDigitPAra{
  font-family: Montserrat;
font-size: 21px;
font-weight: 500;
line-height: 39.01px;
text-align: left;

}
.VErifyAccount{
  font-family: Montserrat;
  font-size: 35px;
    font-weight: 600;
    line-height: 67.5px;
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



.otherlogin {
  display: flex;
  flex-direction: row;
}
.otherlogin:before,
.otherlogin:after {
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
  height: 50px;
  width: 50px;
}

.otp-verification-page {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.countdown-timer {
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    gap: 20px;
    justify-content: center;
}

.form-label {
  text-align: left;
  display: block;
}

.otp-inputs {
  display: flex;
  gap:45px;
  justify-content: center;

  margin-bottom: 20px;
}
img.dummmyImg {
    width: 602px;
  
    height: 561px;
}
.otp-input {
  width: 50px;
 border: 1px solid #BC1818;
    height: 68px;
  text-align: center;
  font-size: 1.5rem;
  margin-right: 10px;
}
@media screen and (min-width:330px) and (max-width:500px)
{
  .VErifyAccount{
    font-size:33px;
  }

}
</style>

<template>
    <div class="">
      <div class="page-width">
        <div class="container">
          <header class="header">
            <!-- Logo -->
            <div class="logo">
              <img src="../assests/social.png" alt="Logo" />
            </div>
            <div class="menu-toggle" @click="toggleDrawer">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </header>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6 mt-5">
            <div class="container">
              <h2>Verify Your Account</h2>
              <hr />
              <p>
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
  
                    <div class="d-grid gap-2 mb-5">
                      <button
                        class="btn btn-danger"
                        style="background-color: #e33535"
                        type="submit"
                      >
                        Varify Code
                      </button>
                    </div>
                  </form>
                </div>
                <div class="col-2"></div>
              </div>
            </div>
          </div>
          <!-- <a href="/signup">SignUp</a> -->
  
          <div class="col-md-1 divider-col">
            <div class="vertical-divider"></div>
          </div>
  
          <div class="col-md-5">
            <div class="login-image">
              <img src="" alt="Login Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Login Section -->
  </template>
  <script setup>
  import { ref, onMounted } from "vue";
  
  const otp = ref(["", "", "", ""]);
  const minutes = ref(59);
  const seconds = ref(59);
  
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
  });
  
  const moveToNext = (index, event) => {
    if (event.target.value.length === 1 && index < otp.value.length - 1) {
      event.target.nextElementSibling.focus();
    }
  };
  
  const submitOtpForm = () => {
    const otpCode = otp.value.join("");
    // Add your verification logic here
    console.log("OTP Submitted:", otpCode);
    alert("OTP Submitted!");
  };
  </script>
<template>
  <div class="">
    <div class="page-width">
      <div class="container">
        <header class="header">
          <!-- Logo -->
          <div class="logo">
            <img src="../assets/images/social.png" alt="Logo" />
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
            <img src="" alt="Login Image" />
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

const otp = ref(["", "", "", ""]);
const minutes = ref(59);
const seconds = ref(59);
const user_id = ref(null); // Initialize as a ref
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
  user_id.value = localStorage.getItem("user_id"); // Get user_id from localStorage
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

    console.log("User ID:", user_id.value);
    const response = await $api.auth.otpVarification(user_id.value, otpCode);
    console.log("OTP verification successful:", response);

    // Handle successful OTP verification (e.g., navigate to the login page)
    router.push("/login");
  } catch (error) {
    console.error("OTP verification failed:", error.message);
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap");

.page-width {
  padding: 15px;
  margin: 0 auto;
  background: #e33535;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: black;
  position: relative;
}

.auth-listen button {
  border-radius: 5px;
  padding: 0px 6px;
  color: white;
  background: #000000 !important;
  border: 0;
  font-size: 14px;
  font-weight: 700;
}

.auth-listen button i.fas.fa-plus.me-2 {
  background: rgba(255, 255, 255, 0.2);
  margin-right: 25px;
  padding: 7px;
  border-radius: 14px;
}

.auth button {
  font-weight: 600;
  border: 0;
  background: white;
  font-size: 16px;
}

.auth {
  margin-right: 20px;
}

.logo img {
  height: 40px;
}

nav {
  flex-grow: 1;
  margin-left: 20px;
}

ul.menu {
  justify-content: end;
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
}

ul.menu > li {
  position: relative;
  margin-right: 20px;
}

ul.menu > li > a {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 21px;
  line-height: 27.5px;
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  display: block;
}

ul.menu > li.submenu:hover > ul.dropdown {
  display: block;
}

ul.dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #444;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 150px;
  z-index: 1000;
}

ul.dropdown > li > a {
  color: white;
  text-decoration: none;
  padding: 10px;
  display: block;
}

ul.dropdown > li > a:hover {
  background-color: #555;
}

.auth a {
  color: black;
  text-decoration: none;
  padding: 10px 15px;
  border: 1px solid white;
  border-radius: 5px;
}

.auth a:hover {
  background-color: white;
  color: #333;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.menu-toggle span {
  background: black;
  border-radius: 2px;
  display: block;
  height: 3px;
  margin: 5px;
  width: 25px;
}

.drawer {
  position: fixed;
  top: 0;
  right: -100%;
  height: 100%;
  width: 250px;
  background-color: #333;
  color: white;
  transition: right 0.3s ease;
  z-index: 1000;
  padding: 20px;
}

.drawer.active {
  right: 0;
}

.drawer .drawer-header {
  display: flex;
  justify-content: flex-end;
}

.drawer .close-drawer {
  background: none;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
}

.drawer .submenu > .dropdown {
  display: none;
}

.drawer .submenu.active > .dropdown {
  display: block;
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

@media (max-width: 768px) {
  .menu {
    display: none;
  }
  .auth {
    display: none;
  }
  .auth-listen {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .drawer ul.menu {
    display: block;
  }
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
  margin-bottom: 20px;
}

.form-label {
  text-align: left;
  display: block;
}

.otp-inputs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.otp-input {
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 1.5rem;
  margin-right: 10px;
}
</style>

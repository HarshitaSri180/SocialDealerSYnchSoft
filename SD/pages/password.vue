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
        <div class="col-md-6">
          <div class="login-form mt-3">
            <h2 class="fw-bolder">Create An Account</h2>
            <hr />
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="username" class="form-label">Username *</label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  v-model="formData.username"
                  placeholder="Choose a unique username"
                  required
                  autocomplete="username"
                />

                <!-- <small v-else>Please choose a unique username</small> -->
              </div>
              <p class="fw-bolder">
                Keep your account safe with a strong password!
              </p>
              <div class="mb-3">
                <label for="password" class="form-label">Password *</label>
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
                  <li>
                    <img src="../assets/images/signicon.svg" alt="" />
                    Be a minimum of 8 characters
                  </li>
                  <li>
                    <img src="../assets/images/signicon.svg" alt="" /> Include
                    at least one lowercase letter (a-z)
                  </li>
                  <li>
                    <img src="../assets/images/signicon.svg" alt="" /> Include
                    at least one uppercase letter (A-Z)
                  </li>
                  <li>
                    <img src="../assets/images/signicon.svg" alt="" /> Include
                    at least one number (0-9)
                  </li>
                  <li>
                    <img src="../assets/images/signicon.svg" alt="" /> Include
                    at least one special character (!$@%-)
                  </li>
                </ul>
              </div>
              <div class="mb-3">
                <label for="confirm-password" class="form-label"
                  >Confirm Password *</label
                >
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
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="terms"
                  v-model="formData.agreeTerms"
                  required
                />
                <label class="form-check-label" for="terms">
                  I agree to SocialDealr’s Privacy Policy and Terms of Service
                </label>
              </div>

              <div class="d-grid gap-2 mb-5">
                <button
                  class="btn btn-danger"
                  style="background-color: #e33535"
                  type="submit"
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
import { useRouter } from "vue-router";

const formData = ref({
  username: "",
  password: "",
  confirmPassword: "",
});

const user_id = ref(null); // Initialize as a ref
const router = useRouter();

onMounted(() => {
  if (process.client) {
    user_id.value = localStorage.getItem("user_id"); // Retrieve user_id from localStorage
    console.log(user_id.value);
  }
});

const submitForm = async () => {
  try {
    const { username, password, confirmPassword } = formData.value;
    console.log("Form Data:", formData.value);
    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }

    console.log("after User ID:", user_id.value);
    const response = await useNuxtApp().$api.auth.setPassword(
      user_id.value,
      username,
      password,
      confirmPassword
    );
    console.log("Password set successful:", response);

    if (response.status) {
      const otp = response.data.userotp.otp;
      alert(`Your OTP is: ${otp}`);

      // Handle successful password setting (e.g., navigate to the login page)
      router.push("/varification");
    }
    
    // Handle successful password setting (e.g., navigate to the login page)
    router.push("/varification");
  } catch (error) {
    console.error("Password set failed:", error.message);
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
</style>

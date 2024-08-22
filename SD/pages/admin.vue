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
            <h2 class="font-bold">Welcome Admin</h2>
            <hr />
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="university-email" class="form-label"
                  >Email Address</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="university-email"
                  v-model="formData.emailOrusername"
                  placeholder="Enter your email"
                  autocomplete="email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="formData.password"
                  placeholder="Enter your password"
                  autocomplete="current-password"
                  required
                />
              </div>
              <div class="mt-3 text-center mb-3">
                <a href="#" style="color: #e33535">Forgot Password?</a>
              </div>
              <div class="d-grid gap-2">
                <button
                  class="btn btn-danger"
                  style="background-color: #e33535"
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
          <p class="otherlogin mt-3">Other Log In Methods</p>
          <div class="login-icons">
            <a href="#" class="icon google"
              ><img src="../assets/images/google.png" alt="Google Logo"
            /></a>
<!--             <a href="#" class="icon facebook"
              ><img src="../assets/images/fb.png" alt="Facebook Logo"
            /></a> -->
            <a href="#" class="icon apple"
              ><img src="../assets/images/apple.png" alt="Apple Logo"
            /></a>
          </div>
          <p class="fs-5 fw-bolder text-center mt-4">
            New to SocialDealr?
            <a
              href="/signup"
              class="text-decoration-none"
              style="color: #e33535"
              >Create Account</a
            >
          </p>
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
</template>

<script setup>
import { ref } from "vue";
import { store } from "@/store/store.js";

const formData = ref({
  emailOrusername: "",
  password: "",
});

const router = useRouter();

const submitForm = async () => {
  // try {
  // const response = await useNuxtApp().$api.auth.login(
  //   formData.value.emailOrusername,
  //   formData.value.password
  // );
  // console.log("Login successful:", response);
  // // Handle successful login (e.g., store token, redirect user)
  // router.push("/");
  const response = await useNuxtApp().$api.auth.login(
    formData.value.emailOrusername,
    formData.value.password
  );
  store.setUser(response.data.payload.user); // Assuming the API response contains user info
  router.push("/");
  // } catch (error) {
  //   console.error("Login failed:", error.response.data.data);
  //   // Handle login error (e.g., show error message)
  // }
};

const toggleDrawer = () => {
  console.log("Toggle drawer");
  // Implement drawer toggle functionality if needed
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap");

/* Your existing styles */
</style>

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

/* p {
  display: flex;
  flex-direction: row;
}
p:before,
p:after {
  content: "";
  flex: 1 1;
  border-bottom: 1px solid rgba(0, 0, 0, 0.423);
  margin: auto;
} */
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
  height: 50px; /* Adjust height */
  width: 50px; /* Adjust width */
}
</style>

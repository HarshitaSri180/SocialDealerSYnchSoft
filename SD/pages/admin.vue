<template>
  <div class="">
    
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

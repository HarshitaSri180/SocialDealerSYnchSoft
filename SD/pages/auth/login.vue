<template>
  <div class="">
    <CommonThirdNav/>
    <div class="container">
      <div class="row">
        <div class="col-md-6 mt-5">
          <div class="container">
            <p class="LoginAccount fw-bolder">Login to Your Account</p>
            <hr />
            <form @submit.prevent="submitLoginForm">
              <div class="mb-3">
                <label for="emailOrusername" class="form-label">Email or Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="emailOrusername"
                  v-model="formData.emailOrusername"
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
                  required
                />
              </div>
              <div class="mb-3">
                <button class="loginButton" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
          <p class="otherlogin mt-3">Other Log In Methods</p>
          <div class="login-icons">
            <a href="#" class="icon facebook"
              ><img src="@/assets/images/FbIcon.png" alt="Facebook Logo"
            /></a>
            <a href="#" class="icon google"
              ><img src="@/assets/images/google.png" alt="Google Logo"
            /></a>
            <a href="#" class="icon apple"
              ><img src="@/assets/images/apple.png" alt="Apple Logo"
            /></a>
          </div>
          <p class="fs-5 fw-bolder text-center mt-5 mb-6">
            New to SocialDealr?
            <a
              href="/auth/signup"
              class="text-decoration-none"
              style="color: #e33535"
              >Create Account</a
            >
          </p>

        </div>
        <!-- Keep the right column with the image -->
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
const authStore = useAuthStore();
const router = useRouter();
const formData = ref({
  emailOrusername: '',
  password: '',
});
const submitLoginForm = async () => {
  try {
    const response = await authStore.login({
      emailOrusername: formData.value.emailOrusername,
      password: formData.value.password,
    });

    console.log(response.token)

    if (response.token) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      $notyf.success('Logged in successfully!');
      router.push('/'); 
    } else {
      $notyf.error('Login failed. Please try again!');
    }
  } catch (error) {
    $notyf.error('Login failed. Please check your credentials and try again.');
    console.error('Login failed:', error);
  }
};
</script>

<style scoped>
.LoginAccount {
  font-family: Montserrat;
  font-size: 35px;
  font-weight: 600;
  line-height: 67.5px;
  text-align: left;
}
.loginButton {
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
</style>
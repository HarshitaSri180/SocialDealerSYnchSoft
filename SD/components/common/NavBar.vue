<template>
  <nav class="navbar">
    <div class="navbar-container container">
      <input type="checkbox" name="" id="" />
      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
      <ul class="menu-items d-flex ">
        <li class="ListItem"><a href="#">About</a></li>
        <li class="ListItem"><a href="#">Help</a></li>
        <li class="ListItem">
          <button class="sellTickets"><a href="#">Sell Tickets</a></button>
        </li>
        <li class="ListItem" v-if="!user"><a href="/auth/login">Sign in</a></li>
        <li class="ListItem" v-if="user">
          <div class="d-flex">
          <div class="dropdown ">
            <button
              class="btn btn-secondary dropdown-toggle profile-icon"
              style="color: white;"
              type="button"

              id="profileDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ initials }}
            </button>
            <ul class="dropdown-menu mt-4 border-none " aria-labelledby="profileDropdown" style="background-color: #df490f;">
            
               <button class="ButtonLogout  "> <a class="dropdown-item w-100 fs-6  rounded-pill  fw-bolder" @click="logout" style="background-color: #df490f;">Logout</a></button>
              
            </ul>
          </div>
        </div>
        </li>
      </ul>
      <img class="logo" src="@/assets/images/social.png" />
    </div>
  </nav>
</template>



<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useCookieManager } from '~/composables/useCookieManager';

const router = useRouter();
const { getAuthCookie, removeAuthCookie } = useCookieManager();

const dropdownVisible = ref(false);

const user = computed(() => {
  const { user } = getAuthCookie();
  return user;
});

const initials = computed(() => {
  if (user.value) {
    const firstNameInitial = user.value.firstName ? user.value.firstName.charAt(0).toUpperCase() : '';
    const lastNameInitial = user.value.lastName ? user.value.lastName.charAt(0).toUpperCase() : '';
    return (firstNameInitial && lastNameInitial) ? firstNameInitial + lastNameInitial : 'SD';
  }
  return 'SD';
});

const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value;
};

const logout = () => {
  removeAuthCookie();
  router.push('/auth/login');
};
</script>



<style>
.profile-menu {
  position: relative;
  display: inline-block;
}

.profile-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #eae5e388;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
}
/* Add your existing styles for the navbar here */
</style>
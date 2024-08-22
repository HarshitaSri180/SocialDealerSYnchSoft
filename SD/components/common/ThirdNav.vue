<template>
  <nav class="navbar">
    <div class="navbar-container container ">
      <input type="checkbox" name="" id="" />
      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
      <ul  class="menu-items  ">
        <li class="ListItem"><a href="#">About</a></li>
        <li class="ListItem"><a href="#">Help</a></li>
        <li class="ListItem">
          <button class="sellTickets"><a href="#">Sell Tickets</a></button>
        </li>
        <li class="ListItem" v-if="!user"><a href="/auth/login">Sign in</a></li>
        <li class="ListItem" v-if="user">
          <div class="dropdown pb-3">
            <button
              class="btn btn-secondary dropdown-toggle profile-icon"
              type="button"
              id="profileDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ initials }}
            </button>
            <ul class="dropdown-menu bg-danger" aria-labelledby="profileDropdown">
              <li>
                <a class="dropdown-item bg-danger" @click="logout">Logout</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      <a href="/"> <img class="logo" src="@/assets/images/social.png" /></a>
   
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
<style scoped>
.menu-items{
  display:none ;

}
nav{
    flex-grow: 1;
margin-left:0px !important;
}
nav.navbar {
  background: #BC1818;

}
@media screen and (max-width:750px){
  .menu-items{
  display:block;

}
ul.menu-items {
        height: 297px;
        padding-top: 59px !important;
}

}
</style>
<template>
  <nav class="navbar navbar-expand-lg navbar-light SecondNavbarBackground">
    <div class="container-fluid SecondMenuBar">
      <a class="navbar-brand" href="/"><img src="@/assets/images/social.png"></a>
      <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon "></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
       
        <form class="d-flex me-auto mb-2 mb-lg-0 position-relative search-form">
  <img class="search-icon" src="@/assets/images/MagnifyingGlass.png" alt="Search">
  <input class="form-control ps-5 me-2 rounded-pill" type="search" placeholder="event, Artist, venue or city" aria-label="Search">
  
</form>

        <ul class="navbar-nav mb-2 mb-lg-0 items-center ">
          <li class="nav-item fs-5 fw-bold">
            <a class="nav-link" aria-current="page" href="#">About</a>
          </li>
          <li class="nav-item fs-5 fw-bold">
            <a class="nav-link" href="#">Help</a>
          </li>
          <li class="nav-item fs-5 fw-bold">
            <a class="" href="#"  aria-disabled="true"><button class="SellTicketSecondNav">Sell Tickets</button></a>
          </li>
          <li class="ListItem nav-link" v-if="!user"><a href="/auth/login">Sign in</a></li>
        <li class="ListItem" v-if="user">
          <div class="dropdown ms-2">
            <button
              class="btn btn-secondary dropdown-toggle profile-icon"
              type="button"
              id="profileDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ initials }}
            </button>
            <ul class="dropdown-menu  mt-4 border-none " aria-labelledby="profileDropdown" style="background-color: #df490f;">
             
              <button><a class="dropdown-item fs-6   fw-bolder rounded-pill " style="background-color: #df490f;" @click="logout">Logout</a></button>  
            
            </ul>
          </div>
        </li>
        </ul>
        <button class="btn btn-outline-danger ms-auto close-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          Close
        </button>
      </div>
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
li.nav-item.fs-6.fw-bolder.rounded-circle.Ybutton {
  background-color: #AB8C8C;
;
} 
.navbar-brand img {
  width: 14vw;
}
input::placeholder{
  font-family: Montserrat;
font-size: 16px;
font-weight: 500;
line-height: 100px;
text-align: left;

}
.navbar > .container-fluid, .navbar > .container-sm, .navbar > .container-md, .navbar > .container-lg, .navbar > .container-xl {
    max-width: 94%;
}
.search-form {
  width: 100%; /* Adjust the width as needed */
  max-width: 300px; /* Adjust the max-width as needed */
}

.search-form .form-control {
  height: 45px; /* Adjust the height as needed */
}



input.form-control.ps-5 {
  padding-left: 40px; /* Adjust this value if needed */
}

button.SellTicketSecondNav {
  background: black;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  line-height: 27.5px;

  border: none;
  border-radius: 12px;
  padding: 2px 7px;
}
button.btn.btn-outline-danger.ms-auto.close-btn {
  display: none;
}
.container-fluid.SecondMenuBar {
    padding: 18px 0px;
}
@media screen and (max-width: 1000px) {
  button.btn.btn-outline-danger.ms-auto.close-btn {
    display: block;
  }
}
nav.navbar.navbar-expand-lg.navbar-light.SecondNavbarBackground {

  background:  #BC1818;

}
.position-relative {
  position: relative;
}

.search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 43px;
  height: 43px;
}


/* Ensures that the close button is only shown when the menu is open */
@media screen and (min-width: 315px) and (max-width:990px) {
  .collapse.show + .close-btn {
    display: none;
  }
  .search-form {
    
  width: 100%; /* Adjust the width as needed */
  max-width: 900px; /* Adjust the max-width as needed */
}
.navbar-collapse.collapsing, .navbar-collapse.show {
      
        background: #BC1818;
;
}
    .navbar-brand img {
        width: 20vw;
    }
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

</style>

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
        <div class="col-md-12">
          <div class="event-form mt-3">
            <h2 class="font-bold">Add Event</h2>
            <hr />
            <form @submit.prevent="submitEventForm">
              <div class="mb-3">
                <label for="event-name" class="form-label">Event Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="event-name"
                  v-model="formData.event_name"
                  placeholder="Enter event name"
                  required
                />
              </div>
                <div class="mb-3">
                <label for="image-upload" class="form-label">Image Upload</label>
                <input
                  type="file"
                  class="form-control"
                  id="image-upload"
                  accept="image/*"
                  required
                />
              </div>
             
              <!-- <div class="mb-3">
                <label for="pdf-url" class="form-label">PDF URL</label>
                <input
                  type="text"
                  class="form-control"
                  id="pdf-url"
                  v-model="formData.pdf_url"
                  placeholder="Enter PDF URL"
                  required
                />
              </div> -->
              <div class="mb-3">
                <label for="prize" class="form-label">Prize</label>
                <input
                  type="number"
                  class="form-control"
                  id="prize"
                  v-model="formData.prize"
                  placeholder="Enter prize"
                  required
                />
              </div>
              <!-- <div class="mb-3">
                <label for="age" class="form-label">Age</label>
                <input
                  type="number"
                  class="form-control"
                  id="age"
                  v-model="formData.age"
                  placeholder="Enter Age"
                  required
                />
              </div> -->
              <div class="mb-3">
                <label for="venue" class="form-label">Venue</label>
                <input
                  type="text"
                  class="form-control"
                  id="venue"
                  v-model="formData.venue"
                  placeholder="Enter venue"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="start-date-time" class="form-label"
                  >Start Date Time</label
                >
                <input
                  type="datetime-local"
                  class="form-control"
                  id="start-date-time"
                  v-model="formData.start_date_time"
                  placeholder="Enter start date time"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="end-date-time" class="form-label"
                  >End Date Time</label
                >
                <input
                  type="datetime-local"
                  class="form-control"
                  id="end-date-time"
                  v-model="formData.end_date_time"
                  placeholder="Enter end date time"
                  required
                />
              </div>

              <div class="d-grid gap-2 pt-3 pb-5">
                <button
                  class="btn btn-danger"
                  style="background-color: #e8550d"
                  type="submit"
                >
                  Add Event
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useNuxtApp } from "#app"; // Import useNuxtApp for API call
import { store } from "@/store/store.js";

const formData = ref({
  event_name: "",
  image_url: "",
  event_type: "",
  pdf_url: "",
  prize: 0,
  age: 0,
  currency: "",
  venue: "",
  location_id: 0,
  start_date_time: "",
  end_date_time: "",
});

const user_id = ref(null); // Initialize as a ref
const router = useRouter();

onMounted(() => {
  if (process.client) {
    user_id.value = localStorage.getItem("user_id"); // Retrieve user_id from localStorage
    console.log(user_id.value);
  }
});

const submitEventForm = async () => {
  try {
    const {
      event_name,
      image_url,
      event_type,
      pdf_url,
      prize,
      age,
      currency,
      venue,
      location_id,
      start_date_time,
      end_date_time,
    } = formData.value;

    const response = await useNuxtApp().$api.auth.addEvent({
      event_name,
      image_url,
      event_type,
      pdf_url,
      prize,
      age,
      currency,
      venue,
      location_id,
      start_date_time,
      end_date_time,
      user_id: user_id.value,
    });

    console.log("Event added successfully:", response);
    router.push("/"); // Redirect to events page or wherever needed
  } catch (error) {
    console.error("Error adding event:", error.response?.data || error.message);
    // Handle error (show message, etc.)
  }
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

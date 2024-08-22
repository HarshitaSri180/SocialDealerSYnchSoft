<template>
  <div class="">
  
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

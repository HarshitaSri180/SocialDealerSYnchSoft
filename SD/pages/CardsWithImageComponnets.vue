<template>
  <div class="container">
    <div class="SuggestedEventContainer">
    <div class="Event d-flex justify-content-between">
       <p class="SuggestedEvent"> Suggested Events</p>

    <img  class="arrow" src="@/assets/images/arrowinaCircle.png" @click="scrollCards"/>
    </div>
 
    <hr/>
    <NuxtLink to="/events" ><ul class="cards">
    <li class="card ">
      <div>
        <img
        class="card-img-top"
        src="@/assets/images/CardTopImage.png"
        alt="Card image cap"
      />
        <div class="card-content">
          <p class="card-title lovelandFestival">Loveland Festival 2022 | 25YRS</p>
        </div>
        <div class="iconWithText d-flex">
          <img class="Calender" src="@/assets/images/Calendar.png" />
          <p class="card-text DateCard">
            Fri 22 Jul 2022, 15:00 till Sat 23 Jul 2022, 23:00
          </p>
        </div>
        <div class="iconWithText d-flex">
          <img class="Location" src="@/assets/images/Location.png" />
          <p class="card-text venue">&lt;venue&gt;</p>
        </div>
      </div>
      <!-- <div class="card-link-wrapper"> -->
        
      <!-- </div> -->
    </li>
    <li class="card">
      <div>
        <img
        class="card-img-top"
        src="@/assets/images/CardTopImage.png"
        alt="Card image cap"
      />
        <div class="card-content">
          <p class="card-title lovelandFestival">Loveland Festival 2022 | 25YRS</p>
        </div>
        <div class="iconWithText d-flex">
          <img class="Calender" src="@/assets/images/Calendar.png" />
          <p class="card-text DateCard">
            Fri 22 Jul 2022, 15:00 till Sat 23 Jul 2022, 23:00
          </p>
        </div>
        <div class="iconWithText d-flex">
          <img class="Location" src="@/assets/images/Location.png" />
          <p class="card-text venue">&lt;venue&gt;</p>
        </div>
      </div>
     
    </li>
    <li class="card">
      <div>
        <img
        class="card-img-top"
        src="@/assets/images/CardTopImage.png"
        alt="Card image cap"
      />
        <div class="card-content">
          <p class="card-title lovelandFestival">Loveland Festival 2022 | 25YRS</p>
        </div>
        <div class="iconWithText d-flex">
          <img class="Calender" src="@/assets/images/Calendar.png" />
          <p class="card-text DateCard">
            Fri 22 Jul 2022, 15:00 till Sat 23 Jul 2022, 23:00
          </p>
        </div>
        <div class="iconWithText d-flex">
          <img class="Location" src="@/assets/images/Location.png" />
          <p class="card-text venue">&lt;venue&gt;</p>
        </div>
      </div>
      
    </li>
    <li class="card">
      <div>
        <img
        class="card-img-top"
        src="@/assets/images/CardTopImage.png"
        alt="Card image cap"
      />
        <div class="card-content">
          <p class="card-title lovelandFestival">Loveland Festival 2022 | 25YRS</p>
        </div>
        <div class="iconWithText d-flex">
          <img class="Calender" src="@/assets/images/Calendar.png" />
          <p class="card-text DateCard">
            Fri 22 Jul 2022, 15:00 till Sat 23 Jul 2022, 23:00
          </p>
        </div>
        <div class="iconWithText d-flex">
          <img class="Location" src="@/assets/images/Location.png" />
          <p class="card-text venue">&lt;venue&gt;</p>
        </div>
      </div>
     
    </li>
  
   
  </ul></NuxtLink>
   
</div>
</div>

</template>
<script>
export default {
  methods: {
    scrollCards() {
      const cardList = this.$el.querySelector(".cards");
      cardList.scrollBy({ left: 300, behavior: "smooth" });
    },
  },
};
</script>
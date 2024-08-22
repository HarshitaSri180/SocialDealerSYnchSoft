<template>
  <div class="sellerInfoRating">
    <div class="sellerInfoHeadig">Seller Information</div>
    <hr/>
  </div>
  <!-- card rating -->
  <div class="card ratingCard" style="width: 26rem;">
    <div class="MenImageDiv d-flex justify-content-between">
      <div class="menImage">
        <img  src="@/assets/images/MenImageSquare.png" alt="Seller Image">
      </div>
      <div class="MenNameSection">
        <p class="MenNAme">{{ seller.firstName }} {{ seller.lastName }}</p>
        <p class="MemberShip">Member Since {{ membershipDuration }}</p>
      </div>
      <div class="starRating">
        <img src="@/assets/images/chat.png" alt="Chat Icon">
      </div>
    </div>
    <div class="card-body">
      <div class="StarImage d-flex">
        <img src="@/assets/images/StarPink.png" alt="Star" v-for="star in 5" :key="star">
      </div>
    </div>
  </div>
  <!-- card rating ends -->
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  seller: {
    type: Object,
    required: true,
  }
});

const membershipDuration = computed(() => {
  if (!props.seller.createdAt) {
    return 'Unknown';
  }

  const createdAt = new Date(props.seller.createdAt);
  const currentYear = new Date().getFullYear();
  const membershipYears = currentYear - createdAt.getFullYear();

  if (membershipYears < 1) {
    return 'Less than a year';
  } else if (membershipYears === 1) {
    return '1 year';
  } else {
    return `${membershipYears} years`;
  }
});
</script>

<style scoped>
.StarImage.d-flex {
    width: 33px;
    gap: 14px;
    justify-content: center;
}
.sellerInfoHeadig{
  font-family: Montserrat;
font-size: 30px;
font-weight: 600;
line-height: 27.5px;
text-align: left;
margin-bottom: 23px;

}
.card-body {
    display: flex;
    justify-content: center;
}
.menImage {
    width: 66px;
}
.card.ratingCard {
  box-shadow: none;
  
  border:1px solid grey;
    margin: 60px auto;
}
.MemberShip {
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 400;
    line-height: 17.57px;
    text-align: left;
}
.MenNAme{
  font-family: Montserrat;
font-size: 18px;
font-weight: 600;
line-height: 42.67px;
text-align: left;

}
.starRating {
    width: 34px;
}
</style>
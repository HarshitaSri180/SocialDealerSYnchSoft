<template>
<CommonInnerNav/>
<div v-if="isLoading" class="loading">Loading...</div>
  <div v-else-if="error" class="error">{{ error }}</div>
<div v-else-if="orderDetails && sellerInformation"  class="container SellerInformationContaine">
      <div class="buttonSellerInfo">
      <button class="orderId">
        #ORD00{{ orderId }}
      </button></div>
      <button class="ViewNextStepButton">View next steps to receive your Digital Ticket</button>
      <!-- <SellerInfoRatingComponent/>-->
  
  
      <SellerInfoRatingComponent :seller="sellerInformation"/>
      <PriceDetailComponent :order="orderDetails"/>
     

      <div class="receiptConfirmation">
        <p class="ReceiptConfirmationPara">Receipt Confirmation</p>
        <p class="ReceiptConfirmationDescription">Make sure to click “confirm” once you have received your ticket! Failure to do
so may result in probation.</p>
<button 
        class="confirmButton" 
        @click="handleConfirm" 
        :disabled="orderDetails.status == 'Confirmed'">
        {{ orderDetails.status === 'Confirmed' ? 'Confirmed' : 'Confirm' }}
      </button>
      </div>
    </div>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useOrederStore } from '@/store/orderStore'; 

const route = useRoute();
const orderId = ref(route.params.orderId);
const orderStore = useOrederStore();
const orderDetails = ref(null);
const sellerInformation = ref(null);
const isLoading = ref(true);
const error = ref(null);
const { $notyf } = useNuxtApp();
const router = useRouter();

const fetchOrderDetails = async () => {
  try {
    const response = await orderStore.fetchOrderDetailsById(orderId.value);
    console.log('API Response:', response); 
    if (response && response.data) {
     // $notyf.success('Order fetched successfully!');
      orderDetails.value = response.data;
      sellerInformation.value = response.data.User_orders_seller_idToUser;
      console.log('Seller Information:', sellerInformation.value.created_at); 
    } else {
      $notyf.error('Invalid response structure');
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      const errorCode = error.response.data.error.code;
      if (errorCode === 'FST_JWT_AUTHORIZATION_TOKEN_EXPIRED') {
        // Redirect to login page if the token is expired
        $notyf.error('Session expired. Please log in again.');
        router.push('/auth/login');
        return;
      }
    }
    $notyf.error('Error fetching order details:', error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchOrderDetails);

const handleConfirm = async () => {
  try {
    await orderStore.confirmOrderStatus(orderId.value);
    $notyf.success('Order Confirmed Successfully!');
    await fetchOrderDetails();
    router.push(`/transferTicket/${orderId.value}/TicketReceived`);
  } catch (error) {
    $notyf.error('Failed to confirm order:', error);
  }
};

const getMembershipDuration = computed(() => {
  if (!sellerInformation.value || !sellerInformation.value.createdAt) {
    return 'Unknown';
  }

  const createdAt = new Date(sellerInformation.value.createdAt);
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

<style>
.confirmButton{
 

 
border-radius: 17px;
padding: 11px 15px;
height: 25%;

justify-content: center;
display: flex;
margin: 25px auto;
gap: 0px;
width:19%;

background-color: #e8550d;
font-family: Montserrat;
font-size: 21px;
color: white;
font-weight: 500;
line-height: 27.5px;
text-align: center;

}

.ReceiptConfirmationDescription{
  font-family: Montserrat;
font-size:20px;
font-weight: 500;
line-height: 27.5px;
text-align: left;

}
.horizontaolRow{
  margin:13px 0px;
}
.ReceiptConfirmationPara{
  font-family: Montserrat;
font-size: 25px;
font-weight: 600;
line-height: 76.5px;
text-align: left;
color: #BC1818;

}
.ReceiptSellerInfo{
  border:none;
  box-shadow: none;
}
.PaidSellerInfo{
  font-family: Montserrat;
font-size: 20px;
font-weight: 600;
/* line-height: 57.29px; */
text-align: left;

}
hr{
  margin-bottom:0px !important;
}
.MenNAme{
  font-family: Montserrat;
font-size: 18px;
font-weight: 600;
line-height: 42.67px;
text-align: left;

}
.SubtotalSellerinfo,.PriceSellerScreen{
  font-family: Montserrat;
font-size: 20px;
font-weight: 400;
line-height: 44.86px;
text-align: left;

}
.MemberShip {
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 400;
    line-height: 17.57px;
    text-align: left;
}
.card-body {
    display: flex;
    justify-content: center;
}

.card.ratingCard {
  box-shadow: none;
  
  border:1px solid grey;
    margin: 60px auto;
}
.menImage {
    width: 66px;
}
.StarImage.d-flex {
    width: 33px;
    gap: 14px;
    justify-content: center;
}
.starRating {
    width: 34px;
}
button.orderId{
  
 
 border-radius: 13px;
 padding: 5px 36px;
 height: 25%;

 justify-content: center;
 display: flex;
 margin: 38px auto;
 gap: 0px;
 
 background-color: transparent;
 font-family: Montserrat;
 font-size: 21px;
 color: rgb(0, 0, 0);
 font-weight: 500;
 line-height: 27.5px;
 text-align: center;
border: 1px solid grey;



}
button.ViewNextStepButton {
 
 
 border-radius: 17px;
 padding: 12px 15px;
 height: 25%;
 
 justify-content: center;
 display: flex;
 margin: 38px auto;
 background-color: #e8550d;
 font-family: Montserrat;
 font-size: 21px;
 color: white;
 font-weight: 500;
 line-height: 27.5px;
 text-align: center;
}
.sellerInfoHeadig,.PRiceDetailsPara{
  font-family: Montserrat;
font-size: 30px;
font-weight: 600;
margin-bottom:13px;
line-height: 27.5px;
text-align: left;

}
@media screen and (min-width:350px) and (max-width:600px){
  .card.ReceiptSellerInfo.mx-auto {
    width:22rem !important;
  }

  .card.ratingCard {
    width: 22rem !important;

}
button.confirmButton {
    width: 54%;
}

}
</style>
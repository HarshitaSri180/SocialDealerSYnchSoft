<template>
  <CommonInnerNav/>
  <div v-if="isLoading" class="loading">Loading...</div>
  <div v-else-if="error" class="error">{{ error }}</div>
  <div v-else-if="orderDetails && sellerInformation" class="container VerificationCodeContaine">
      <div class="buttonSellerInfo">
      <button class="orderId">
        #ORD00{{ orderId }}
      </button></div>
      <button class="ViewNextStepButton">View next steps to receive your Digital Ticket</button>
      <!-- verification code -->
      <div class="card verificationCard d-flex mx-auto" style="width: 26rem;">
  <div class="card-body">
    <p class="card-title verificationCodeForTitle" >Verification Code For Your Purchase</p>
    <p class="text-center CodeVerification">{{ orderDetails.otp }}</p>
   
  </div>
 
</div>
            <!-- verification code -->
            <SellerInfoRatingComponent :seller="sellerInformation"/>
            <PriceDetailComponent :order="orderDetails"/>
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



</script>

<style scoped>
.verificationCard{
  box-shadow: none;
  border:1px solid grey;
  margin-bottom: 73px;

}

.verificationCodeForTitle {
    text-align: center;
    font-family: Montserrat;
font-size: 18px;
font-weight: 600;
line-height: 52.36px;
text-align: left;

}
p.text-center.CodeVerification {
  font-family: Montserrat;
font-size: 35px;
font-weight: 700;
line-height: 19.81px;
text-align: left;
color:#BC1818;
;

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
 
  opacity: 0px;
  background-color: #e8550d;
  font-family: Montserrat;
  font-size: 21px;
  color: white;
  font-weight: 500;
  line-height: 27.5px;
  text-align: center;
 }
</style>
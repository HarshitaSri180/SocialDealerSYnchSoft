<template>
  <CommonInnerNav/>

  <div class="container ConfirmTicketsTicketsContaine">
    <div v-if="isLoading" class="loading">
      <!-- You can add a loading spinner or text here -->
      <p>Loading...</p>
    </div>
    <div v-else>
      <div class="buttonSellerInfo">
        <NuxtLink to="/TransferringTicketsFlowPage/DigitalTicket"> 
          <button class="orderId">
            #ORD00{{ orderId }}
          </button>
        </NuxtLink>
      </div>
      <div class="confirmedtext">
        <p class="ConfirmedPara">Ticket Received - Enjoy Your Event!</p>
      </div>
      <SellerInfoRatingComponent :seller="sellerInformation"/>
      <PriceDetailComponent :order="orderDetails"/>
    </div>
  </div>
</template>

<script setup>
import PriceDetailComponent from '~/components/PriceDetailComponent.vue';
import SellerInfoRatingComponent from '~/components/SellerInfoRatingComponent.vue';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useOrederStore } from '@/store/orderStore'; 

const route = useRoute();
const router = useRouter();
const orderId = ref(route.params.orderId);
const orderStore = useOrederStore();
const orderDetails = ref(null);
const sellerInformation = ref(null);
const isLoading = ref(true);
const { $notyf } = useNuxtApp();

const fetchOrderDetails = async () => {
  try {
    const response = await orderStore.fetchOrderDetailsById(orderId.value);
    if (response && response.data) {
      orderDetails.value = response.data;
      sellerInformation.value = response.data.User_orders_seller_idToUser;
    } else {
      $notyf.error('Invalid response structure');
    }
  } catch (err) {
    $notyf.error('Error fetching order details:', err);
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchOrderDetails);
</script>


<style scoped>
.ConfirmedPara{
  font-family: Montserrat;
font-size: 32px;
font-weight: 600;
line-height: 60.5px;
text-align: center;
color: #BC1818;
;
}
.ConfirmedDescription{
  font-family: Montserrat;
font-size: 20px;
font-weight: 400;
line-height: 52.41px;
text-align: center;

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
  font-size: 20px;
  color: rgb(0, 0, 0);
  font-weight: 500;
  line-height: 27.5px;
  text-align: center;
 border: 1px solid grey;
 
 
 
 }

 @media screen and (min-width:300px) and (max-width:500px){
  .card.ratingCard{
    width: 21rem !important;

  }
  .ConfirmedPara {
   margin-bottom:40px;
    font-size: 32px;
    font-weight: 600;
    line-height: 51.5px;
  }
  .ConfirmedDescription {
   
    line-height: 44.41px;
  }
 }
</style>
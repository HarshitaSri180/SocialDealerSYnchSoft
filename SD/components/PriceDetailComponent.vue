<template>
   <!-- price details -->
   <div class="priceDetailsHeading">
      <p class="PRiceDetailsPara">Price Details</p>
    </div>
    <hr/>
        <!-- Seller recipt starts here -->
        <div class="card ReceiptSellerInfo mx-auto" style="width:35rem">
        <div class="summary">
        
          <div class="regularTicket d-flex justify-content-between">  <p class="SubtotalSellerinfo">Sub total </p>
          <p class="PriceSellerScreen">  £{{ order.amount }}</p> </div>
                                  
        </div>
      
        <div class="summary">
          
          <div class="regularTicket d-flex justify-content-between">  <p class="PriceSellerScreen">Discount (Holiday20)</p>
          <p class="PriceSellerScreen"> -£0.00</p> </div>
          <div class="regularTicket d-flex justify-content-between">  <p class="SubtotalSellerinfo"> Transaction Fee</p>
          <p class="PriceSellerScreen">  £0.35</p> </div>
                                  
        </div>
        <div class="horizontaolRow">        <hr/>
</div>
        <div class="summary">
          
          <div class="regularTicket d-flex justify-content-between">  <p class="PaidSellerInfo">Paid </p>
          <p class="PaidSellerInfo">  £{{ order.amount }}</p> </div>
                                  
        </div>
     
       
      </div>
      <!-- receipt confirmation -->
      <!-- price details ends here -->
</template>
<script setup>
import { computed } from 'vue';

const props = defineProps({
  order: {
    type: Object,
    required: true,
  }
});


</script>
<style>
.PRiceDetailsPara{
  font-family: Montserrat;
font-size: 30px;
font-weight: 600;
line-height: 27.5px;
text-align: left;

}
.ReceiptSellerInfo{
  border:none;
  box-shadow: none;
}
.SubtotalSellerinfo,.PriceSellerScreen{
  font-family: Montserrat;
font-size: 20px;
font-weight: 400;
line-height: 44.86px;
text-align: left;

}
.horizontaolRow{
  margin:13px 0px;
}
hr{
  margin-bottom:0px !important;
}
.PaidSellerInfo{
  font-family: Montserrat;
font-size: 20px;
font-weight: 600;
/* line-height: 57.29px; */
text-align: left;

}
</style>
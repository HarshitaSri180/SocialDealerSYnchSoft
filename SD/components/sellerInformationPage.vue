<template>
    <EventTicketPage/>
    <div class="container SellerInformationContaine">
      <div class="buttonSellerInfo">
      <button class="orderId">
        #ORD123
      </button></div>
      <button class="ViewNextStepButton">View next steps to receive your Digital Ticket</button>
      <!-- <SellerInfoRatingComponent/>
      <PriceDetailComponent/> -->
    <div class="sellerInfoRating">
      <div class="sellerInfoHeadig">Seller Information</div>
      <hr/>
    </div>
    <!-- card rating -->
    <div class="card ratingCard" style="width: 26rem;">
      <div class="MenImageDiv d-flex justify-content-between">
        <div class="menImage">
          <img src="@/assets/images/MenImageSquare.png">
        </div>
        <div class="MenNameSection">
          <p class="MenNAme">Maximillian Jacobson</p>
          <p class="MemberShip">Member Since 2 Years</p></div>
          <div class="starRating">
        <img src="@/assets/images/chat.png">
      </div>
  
      </div>
    
  <div class="card-body">
    
    <div class="StarImage d-flex">
      <img src="@/assets/images/StarPink.png">
      <img src="@/assets/images/StarPink.png">
      <img src="@/assets/images/StarPink.png">
      <img src="@/assets/images/StarPink.png">
      <img src="@/assets/images/StarPink.png">
    </div>
    
  </div>
</div>
    <!-- card rating ends -->
    <!-- price details -->
    <div class="priceDetailsHeading">
      <p class="PRiceDetailsPara">Price Details</p>
    </div>
    <hr/>
      <!-- price details ends here -->
      <!-- Seller recipt starts here -->
      <div class="card ReceiptSellerInfo mx-auto" style="width:35rem">
        <div class="summary">
        
          <div class="regularTicket d-flex justify-content-between">  <p class="SubtotalSellerinfo">Sub total </p>
          <p class="PriceSellerScreen">  £9.35</p> </div>
                                  
        </div>
      
        <div class="summary">
          
          <div class="regularTicket d-flex justify-content-between">  <p class="PriceSellerScreen">Discount (Holiday20)</p>
          <p class="PriceSellerScreen"> -€0.90</p> </div>
          <div class="regularTicket d-flex justify-content-between">  <p class="SubtotalSellerinfo"> Transaction Fee</p>
          <p class="PriceSellerScreen">  £0.35</p> </div>
                                  
        </div>
        <div class="horizontaolRow">        <hr/>
</div>
        <div class="summary">
          
          <div class="regularTicket d-flex justify-content-between">  <p class="PaidSellerInfo">Paid </p>
          <p class="PaidSellerInfo">  £9.35</p> </div>
                                  
        </div>
     
       
      </div>
      <!-- receipt confirmation -->
      <div class="receiptConfirmation">
        <p class="ReceiptConfirmationPara">Receipt Confirmation</p>
        <p class="ReceiptConfirmationDescription">Make sure to click “confirm” once you have received your ticket! Failure to do
so may result in probation.</p>
<NuxtLink to="/TicketsReceivedComponent"><button class="confirmButton">Confirm</button></NuxtLink>
      </div>
    </div>

</template>
<script>
import EventTicketPage from '~/components/EventTicketPage.vue';
// import SellerInfoRatingComponent from '~/components/SellerInfoRatingComponent.vue';
// import PriceDetailComponent from '~/components/PriceDetailComponent.vue';

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
.SellerInformationContaine{
 max-width: 1400px
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

 opacity: 0px;
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
line-height: 27.5px;
text-align: left;

}
</style>
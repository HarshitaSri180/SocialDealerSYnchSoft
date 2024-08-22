<template>
<CommonInnerNav/>
<section class="">
  <div class="container">
    <div class="row gy-5 gy-lg-0 align-items-lg-center">
    
      <div class="col-12  ">
        <div class="row justify-content-xl-center">
          <div class="col-12 col-xl-11">
        
            <p class="lead mb-4 mt-4">Steps To Receive Your Digital Ticket</p>
            <div class="cotentMain">
            <div class="d-flex mb-4 mt-4">
              <div>
              
                <span class="OneImg">
  <img class="imgOneCircle" src="@/assets/images/oneInaCircle.png" alt="Description of the image">
</span>

              </div>
              <div>
                <h4 class=" messageTheSeller mb-2">Message The Seller</h4>
                <p class="mb-0 messageTheSellerPara ">Message the seller of this ticket to receive a 'transfer link'</p>
              </div>
            </div>
            <div class="d-flex mb-4 mt-4">
              <div>
              
                <span class="OneImg">
  <img class="imgtwoCircle" src="@/assets/images/twoInaCircle.png" alt="Description of the image">
</span>

              </div>
              <div>
                <h4 class=" messageTheSeller mb-2">Accept the Ticket</h4>
                <p class="mb-0 messageTheSellerPara ">Once you have received the link, make sure to accept the ticket!</p>
               

              </div>
              
            </div>
            
            <p class="messageTheSellerParaDescription">P.S. Only click on links that are from primary ticketing agents, e.g. FIXR, RA Guide, etc. in order to remain safe!</p>
            <div class="d-flex mb-4 mt-4">
              <div>
                <span class="OneImg">
  <img class="imgthreeCircle" src="@/assets/images/threeInaCircle.png" alt="Description of the image">
</span>              </div>
              <div>
                <h4 class=" AcceptTheTicket mb-2 ">Confirm ticket receipt!</h4>
                <p class="mb-0 AcceptTheTicketPara  ">Once you have received your ticket, make sure to head to "upcoming events" to confirm!</p>
                

              </div>
              
              
            </div>
            
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="TextWithButton">
      <p class="ClickToViewOrder">Click below to view your order and <br/> to contact your seller!</p>
      <NuxtLink :to="`/transferTicket/${orderId}/sellerInformation`">
      <button class="confirmButton">View My Order</button>
    </NuxtLink>
    </div>
  </div>
</section>
</template>
<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const orderId = ref(route.params.orderId);

</script>
<style scoped>
.messageTheSellerParaDescription{
  font-family: Montserrat;
font-size: 16px;
padding: 0px 20px;
font-weight: 400;


}
.imgtwoCircle{
  width:61px;
}
.imgthreeCircle {
    width: 82px;
}

.imgOneCircle{
    width: 54px;
}
.ClickToViewOrder{
  text-align: center;
  font-family: Montserrat;
font-size: 18px;
font-weight: 500;
line-height: 38.51px;
text-align: center;
margin-top: 45px;

}

.messageTheSeller,.confirmTicketReceipt,.AcceptTheTicket{
  font-family: Montserrat;
font-size: 27px;
font-weight: 700;


}
button.ViewMyorder {
 
 
 border-radius: 17px;
 padding: 11px 47px;

 justify-content: center;
 display: flex;
 margin: 38px auto;
 gap: 0px;
 
 background-color: #e8550d;
 font-family: Montserrat;
 font-size: 18px;
 color: white;
 font-weight: 500;
 line-height: 27.5px;
 text-align: center;
}
.messageTheSellerPara,.AcceptTheTicketPara,.confirmTicketReceiptPara{
  font-family: Montserrat;
font-size: 18px;
font-weight: 500;


}

.d-flex.mb-4{
  align-items: center;
    gap: 25px;

}
.cotentMain{
  margin:0px auto; 
  max-width: 66%;
  gap:15px;
}
p.lead.mb-4.mt-4 {
    text-align: center;
    font-family: Montserrat;
font-size: 40px;
font-weight: 600;
line-height: 85.33px;
text-align: center;

}
.textWithHeading{
  margin:0px auto;
}
.col-12.col-xl-11 {
    display: grid;
    justify-content: center;
}

.messageTheSeller.d-flex {
    align-items: center;
    margin: 38px 0px;
    
    justify-content: center;
}
.ConfirmticketReceipt{
  align-items: center;
    margin: 38px 0px;
    justify-content: center;
}
.AccepttheTicket{
  align-items: center;
    margin: 38px 0px;
    justify-content: center;
}
.SellerContaine{
   
    margin: 0 auto;
    max-width: 50%;
}
@media screen and (min-width:356px) and (max-width:750px){
  button.ViewMyorder {
    width: 67%;
}
p.lead.mb-4.mt-4 {
  font-size: 32px;
  line-height: 50.33px;

}
.cotentMain{
    margin: 0px auto;
    max-width: 90%;
}
}
</style>
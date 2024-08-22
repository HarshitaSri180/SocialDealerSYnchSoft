<template>
  <EventTicketPage />

  <!-- confirm your tickets -->
  <div class="container TicketsContainerTicketScreen">
    <div class="TicketsButton d-flex">
      <div class="ticketsTyps d-flex">
        <p class="TicketsTypesAvailable">Confirm Your Tickets</p>
        <img class="info_circle" src="@/assets/images/Info-Circle.png" />
      </div>
      <div class="digitalButton">
        <button class="DigitalTicketsButtons">Digital Ticket</button>
      </div>
    </div>

    <hr />

    <!-- profile info -->
    <div class="profileCards d-flex justify-content-between">
      <div class="card cardBorder">
        <div class="CardImage">
        <div class="circularImage">
          <img  class="WomenImage" src="@/assets/images/CircularImageWomen.png" />
        </div>
        <div class="MaximillianJacobson">
          <p class="MaximillianPara">Maximillian Jacobson</p>
          <div class="paraRegular">
           
            <span class="SuperSellerFiveStar d-flex"
              ><img class="StarImage" src="@/assets/images/star.png" />5.0|Super
              Seller</span
            >
          </div>
         
        </div>
       

        <div class="forwordArrow">
          <img src="@/assets/images/forwordArrow.png" />
        </div>
        </div>
      
        <hr/>
        <div class="ticketSAvailableReguar">
          <p class="TwoTicketsAvailableTicketsScreen">2 Tickets Available</p>
          <p class="RegularTicketSreen">Regular</p>
        </div>
        <div class="MoneyPllusMinus">
          <div class="money">
            <p class="PRiceTicketScreen">£9.35 </p>
<p class="ListingPriceTicketsScreen">each, seller’s listing price</p>
          </div>
          <div class="plusMinus">
            <span class="minus">-</span>
            <span class="NumberTwo">2</span>
            <span class="Plus">+</span>
          </div>
        </div>
       
      </div>

      <div class="Divider">
        <div class="vertical-divider"></div>
      </div>
      <div class="card">
        <div class="summary">
          <p class="summaryTicketsScreen"
          >Summary</p>
          <div class="regularTicket d-flex justify-content-between">  <p class="RegularTextTcketScreen">2 x Regular Ticket </p>
          <p class="RegularTextTcketScreen">  £9.35</p> </div>
                                  
        </div>
        <hr/>
        <div class="summary">
          
          <div class="regularTicket d-flex justify-content-between">  <p class="SubtotalTicketsScreen">Subtotal</p>
          <p class="SubtotalTicketsScreen" >  £18.35</p> </div>
          <div class="regularTicket d-flex justify-content-between">  <p class="FeesTicketsScreen">Fees</p>
          <p class="FeesTicketsScreen">  £0.35</p> </div>
                                  
        </div>
        <hr/>
        <div class="summary">
          
          <div class="regularTicket d-flex justify-content-between">  <p class="TotalTicketsEvent">total </p>
          <p class="totalBill">  £19.35</p> </div>
                                  
        </div>
        <hr/>
       
      </div>
    </div>
    <div class="buttonMakeOffer">
     <div class="makeoffer"> 
      <NuxtLink to="/transferringTicketsFlow"> <button>Make Offer</button></NuxtLink></div>
      <button class="BuyNow">Buy Now</button>
    </div>
  </div>
</template>
<script>
import EventTicketPage from "~/components/EventTicketPage.vue";
</script>
<style>

.totalBill{
  font-family: Montserrat;
font-size: 20px;
font-weight: 600;
line-height: 50px;
text-align: left;
color: #BC1818;

}
.TotalTicketsEvent{
  font-family: Montserrat;
font-size: 20px;
font-weight: 600;
line-height: 50px;
text-align: left;

}
.FeesTicketsScreen{
  font-family: Montserrat;
font-size: 20px;
font-weight: 500;
line-height: 50px;
text-align: left;

}
.SubtotalTicketsScreen{
  font-family: Montserrat;
font-size: 20px;
font-weight: 500;
line-height: 27.5px;
text-align: left;

}
.RegularTextTcketScreen{
  font-family: Montserrat;
font-size: 20px;
font-weight: 400;
line-height: 50px;
text-align: left;


}

.buttonMakeOffer {
    margin-bottom: 180px;
    margin-top: 80px;
}
.card {
        flex-basis: calc(38% - 30px);
        box-shadow: none;
        border:none;
    }
.summaryTicketsScreen{
  font-family: Montserrat;
font-size: 20px;
font-weight: 600;
line-height: 27.5px;
text-align: left;

}
.ListingPriceTicketsScreen{
  font-family: Montserrat;
font-size: 20px;
font-weight: 400;
line-height: 50px;
text-align: left;

}
.PRiceTicketScreen{
  font-family: Montserrat;
font-size: 20px;
font-weight: 600;
line-height: 50px;
text-align: left;

}
.RegularTicketSreen{
  font-family: Montserrat;
font-size: 20px;
font-weight: 400;
line-height:50px;
text-align: left;

}
.TwoTicketsAvailableTicketsScreen{
  font-family: Montserrat;
font-size: 20px;
font-weight: 600;
line-height: 50px;
text-align: left;

}
.SuperSellerFiveStar{
  font-family: Montserrat;
font-size: 20px;
align-items: center;
font-weight: 500;
line-height: 29.01px;
text-align: left;
color: #E8550D;

}
.cardBorder {
  
    border: 2px solid grey;
}
.CardImage {
    align-items: center;}
.forwordArrow{
  width:14px;
}
.MaximillianPara{
  font-family: Montserrat;
font-size: 20px;
font-weight: 600;
line-height: 42.67px;
text-align: left;

}
.MoneyPllusMinus {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
button.minus {
    border: 2px solid #bdbdbd;
    padding: 0px 8px;
}
.plusMinus {
    display: flex;
    gap: 10px;
}
button.Plus{
  border: 2px solid #000000;
    padding: 0px 8px;
}
.vertical-divider {
    width: 2px;
    height: 100%;
    background-color: #bc1818;
}
img.WomenImage {
  height: auto;

  width: 80px;
}
.BuyNow{

 
 border-radius: 17px;
 padding: 11px 15px;
 height: 25%;
 width:35%;
 justify-content: center;
 display: flex;
 margin: 25px auto;
 gap: 0px;
 opacity: 0px;
 background-color: #e8550d;
 font-family: Montserrat;
 font-size: 20px;
 color: white;
 font-weight: 500;
 line-height: 27.5px;
 text-align: center;

}
.makeoffer{
  border-radius: 17px;
 padding: 11px 15px;
 height: 25%;
 width:35%;
 justify-content: center;
 display: flex;
 margin: 25px auto;
 gap: 0px;
color:black;
 background-color: #ECE9E4;
 font-family: Montserrat;
 font-size: 20px;

 font-weight: 500;
 line-height: 27.5px;
 text-align: center;
}
.CardImage {
    display: flex;
    justify-content: space-between;
}
.EventMAinPageHEro {
  height: 268px;
}
.TicketsContainer {
  max-width: 1400px;
}
.TicketsButton {
  align-items: center;
  margin-top: 45px;

  margin-bottom: 30px;
  /* margin-left: 33px; */
  justify-content: space-between;
}
.ticketsTyps {
  gap: 15px;
  align-items: center;
}
.TicketsTypesAvailable {
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 600;
  line-height: 27.5px;
  text-align: left;
}
span.bookingFee {
  display: flex;
  gap: 5px;
  color: #e8550d;
  font-family: Montserrat;
  font-size: 20px;
  align-items: center;
  font-weight: 500;
  line-height: 39.01px;
  text-align: left;
}
img.StarImage {
  height: 18px;
  width: 18px;
}
.info_circle {
  width: 5%;
  height: 2%;
}
.DigitalTicketsButtons {
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  /* line-height: 29.26px; */
  text-align: left;
  color: #8fcd92;
  border: 1px solid #8fcd92;
  margin-right: 45px;
}
.LovelandFestivalsEvent {
  top: 65%;
}
.EventDate {
  top: 55%;
}
@media screen and (max-width:1200px){
  .card {
    margin-top: 56px;
  }
  .profileCards.d-flex.justify-content-between {
    flex-direction: column;
}
.TicketsTypesAvailable {
    font-family: Montserrat;
    font-size: 20px;
}
.LovelandFestivalsEvent {
    top: 36%;
    font-size: 32px;
}
.makeoffer {
   
    width: 100%;
}
.EventDate {
    top: 33%;
}
.BuyNow{
  width: 100%;
}}
</style>
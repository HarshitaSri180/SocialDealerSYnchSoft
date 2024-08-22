<template>
  <div class="ListingPageContainer">
    <p class="ListingPageDesignComponent">*DESIGN*</p>
  </div>
  <div class=" container ListingPageMainContainer ">
    <div class="ListingComponent d-flex justify-content-center gap-4">
      <p class="MyListing active">My Listings (0)</p>
  <p class="SellingHIstory">Selling History</p>

    </div>
    <CardsWithImageComponnets/>
    <hr/>
    <p class="SellingStatics">Selling Statics</p>
  
    <!-- cards starts here -->
    <div class="cardsSellingStatics d-flex ">
  <div class="ticketsSold">
    <div class="paraTicketsSold">
    <p class="TicketsSold">Tickets Sold</p>
    <p class="ZeroListing">7</p>
    <p class="DateListingPage">11 June 2024 - 17 September 2024</p>
  </div>
  </div>
  
  
  <div class="ticketsSold">
    <div class="paraTicketsSold">
    <p class="TicketsSold">Revenue Generated</p>
    <p class="ZeroListing">£60</p>
    <p class="DateListingPage">11 June 2024 - 17 September 2024</p>
  </div>
  </div>
  
  </div>
      <!-- cards ends here -->
      <p class="ClickBelowSelling">Click below to sell more tickets!</p>
      <NuxtLink to="/Sellinghub/OpenListingPage"><button class="OpenListingPage">Sell Tickets</button></NuxtLink>
  </div>
  </template>
  <script setup>
import CardsWithImageComponnets from '~/pages/CardsWithImageComponnets.vue';

  </script>

  <style >
  .SuggestedEvent {
    visibility: hidden;
  
  }
  .SuggestedEventContainer {
    margin: 19px auto;
  }
  hr.HozizonalLineSuggestedEvent {
    visibility: hidden;
}
  
  .DateListingPage{
    font-family: Montserrat;
  font-size: 19px;
  font-weight: 400;
  line-height: 27.5px;
  text-align: left;
  color: #00000066;
  
  
  }
  .cardsSellingStatics{
    width:100%;
  }
  .ZeroListing{
    font-family: Montserrat;
  font-size: 26px;
  font-weight: 600;
  line-height: 27.5px;
  text-align: left;
  
  }
  .NoListingYet {
      font-family: Montserrat;
      font-size: 36px;
      font-weight: 600;
      line-height: 90.5px;
      text-align: center;
      margin-top: 89px;
      margin-bottom: 8px;
  }
  
  .RevenueGeneratedParaListigPage{
    font-family: Montserrat;
  font-size: 26px;
  font-weight: 500;
  line-height: 27.5px;
  text-align: left;
  
  }
  .TicketsSold{
    font-family: Montserrat;
  font-size: 26px;
  font-weight: 500;
  line-height: 45.5px;
  text-align: left;
  
  
  
  }
  .ClickBelowSelling{
    font-family: Montserrat;
  font-size: 29px;
  font-weight: 400;
  line-height: 27.5px;
  text-align: center;
  
  }
  .SellingStatics {
      font-family: Montserrat;
      font-size: 30px;
      font-weight: 600;
      line-height: 83.5px;
      text-align: left;
  }
  button.OpenListingPage {
    
    width:18%;
    border-radius: 17px;
    padding: 9px 15px;
    height: 25%;
    
    justify-content: center;
    display: flex;
    margin: 38px auto;
    background-color: #e8550d;
    font-family: Montserrat;
    font-size: 20px;
    color: white;
    font-weight: 500;
    line-height: 27.5px;
    text-align: center;
   }
  .MyListing {
    font-family: Montserrat;
      font-size: 22px;
      font-weight: 700;
      line-height: 100px;
      text-align: center;
      border-bottom:10px solid  #BC1818;
    cursor: pointer;
  
  
  }
  
  
  
  .SellingHIstory{
    font-family: Montserrat;
      font-size: 22px;
      font-weight:400;
      line-height: 100px;
      text-align: center;
  
  }
  .SellingHIstory:hover{
  border-bottom:10px solid  #BC1818;
    cursor: pointer;
    transition: 0.5s;
  
    
  
  }
  .ListingPageDesignComponent{
    font-family: Montserrat;
  font-size: 102px;
  font-weight: 300;
  
  text-align: center;
  
  
  
  /* background-color: background: #E8550D80; */
  
  }
  .RevenueGeneratedPara {
    width: 100%;
      border-radius: 8px;
      BORDER: 1px solid;
      padding: 23px 26px;
  }
  .paraTicketsSold {
      width: 96%;
      margin-bottom:10%;
      border-radius: 8px;
      BORDER: 1px solid;
      padding: 23px 26px;
  }
  
  .ticketsSold {
      width: 50%;
  }
  
  .ListingPageContainer{
    height: 250px;
    width: 100%;
    background-color:  #E8550D80;
  }
  
  @media screen and (min-width:350px) and (max-width:950px){

    button.SellTicketsListingPage {
    width: 75%;
    }


.paraTicketsSold {
    width: 96%;
    margin-bottom: 5%;
}
.ticketsSold {
    width: 100%;
}
.cardsSellingStatics{
    flex-direction: column;
}
.ClickBelowSelling {
    font-size: 22px;
}
.MyListing{
    font-size: 21px;
}
.ListingPageDesignComponent {
    font-size: 20vh;
}
button.OpenListingPage {
  width: 80%;
}
}
  
  </style>
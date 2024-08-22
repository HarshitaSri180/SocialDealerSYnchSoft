<template>
  <EventTicketPage />
  <div class="container OpenListingContainer">
    <p class="OPenListing">Open Listing</p>
    <hr />
    <!-- cards starts here -->
    <div class="cardsSellingStatics d-flex">
      <div class="ticketsSold">
        <div class="paraTicketsSold d-flex justify-content-between">
          <div class="paraTicketCode">
            <p class="StandardTicket">Standard</p>

            <p class="TicketCode">Ticket Code</p>
          </div>
          <div class="OfferOnTickets">
           <NuxtLink to="/Sellinghub/TicketsdetailsPage"> <p class="OfferMadeButton">Offer Made on Ticket</p></NuxtLink> 
            <p class="PriceOfferMade">£9.54</p>
          </div>
        </div>
      </div>

      <div class="ticketsSold">
        <div class="paraTicketsSold d-flex justify-content-between">
          <div class="paraTicketCode">
            <p class="StandardTicket">Standard</p>

            <p class="TicketCode">Ticket Code</p>
          </div>
          <div class="OfferOnTickets">
            <p class="OfferMadeButton">Offer Made on Ticket</p>
            <p class="PriceOfferMade">£9.54</p>
          </div>
        </div>
      </div>
    </div>
    <!-- cards ends here -->
    <!-- second cards starts here -->
    <div class="cardsSellingStatics d-flex">
      <div class="ticketsSold">
        <div class="paraTicketsSold d-flex justify-content-between">
          <div class="paraTicketCode">
            <p class="StandardTicket">Standard</p>

            <p class="TicketCode">Ticket Code</p>
          </div>
          <div class="OfferOnTickets">
            <p class="OfferMadeButton">Offer Made on Ticket</p>
            <p class="PriceOfferMade">£9.54</p>
          </div>
        </div>
      </div>

      <div class="ticketsSold">
        <div class="paraTicketsSold d-flex justify-content-between">
          <div class="paraTicketCode">
            <p class="StandardTicket">Standard</p>

            <p class="TicketCode">Ticket Code</p>
          </div>
          <div class="OfferOnTickets">
            <p class="OfferMadeButton">Offer Made on Ticket</p>
            <p class="PriceOfferMade">£9.54</p>
          </div>
        </div>
      </div>
    </div>
    <p class="OPenListing">Sold Listings</p>
    <hr />
    <!-- third card start here -->
    <div class="cardsSellingStatics d-flex">
      <div class="ticketsSold">
        <div class="paraTicketsSold d-flex justify-content-between">
          <div class="paraTicketCode">
            <p class="StandardTicket">Standard</p>

            <p class="TicketCode">Ticket Code</p>
          </div>
          <div class="OfferOnTickets">
          
            <p class="PriceOfferMadeCards">£9.54</p>
          </div>
        </div>
      </div>

      <div class="ticketsSold">
        <div class="paraTicketsSold d-flex justify-content-between">
          <div class="paraTicketCode">
            <p class="StandardTicket">Standard</p>

            <p class="TicketCode">Ticket Code</p>
          </div>
          <div class="OfferOnTickets">
          
            <p class="PriceOfferMadeCards">£9.54</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import EventTicketPage from "~/components/Events/Banner.vue";
</script>
<style>
.PriceOfferMade {
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 600;
  line-height: 27.5px;
  text-align: left;
}
.PriceOfferMadeCards{
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 600;
  line-height: 27.5px;
  text-align: left;
}

.OfferMadeButton {
  font-family: Montserrat;
  font-size: 13px;
  margin-bottom: 13px;
  margin-top: 12px;
  font-weight: 700;
  line-height: 25.5px;
  text-align: left;
  background: #bc1818;
  color: white;
  padding: 0px 12px;
  border-radius: 7px;
}
.TicketCode {
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 400;
  line-height: 27.5px;
  text-align: left;
}
.StandardTicket {
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 600;
  line-height: 55.5px;
  text-align: left;
}
.DateListingPage {
  font-family: Montserrat;
  font-size: 19px;
  font-weight: 400;
  line-height: 27.5px;
  text-align: left;
  color: #00000066;
}
.OPenListing {
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 600;
  line-height: 83.5px;
  text-align: left;
}
.ZeroListing {
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
.OpenListingContainer {
  max-width: 1400px;
}

.RevenueGeneratedParaListigPage {
  font-family: Montserrat;
  font-size: 26px;
  font-weight: 500;
  line-height: 27.5px;
  text-align: left;
}
.TicketsSold {
  font-family: Montserrat;
  font-size: 26px;
  font-weight: 500;
  line-height: 45.5px;
  text-align: left;
}

.SellingStatics {
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 600;
  line-height: 83.5px;
  text-align: left;
}

.MyListing {
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 700;
  line-height: 100px;
  text-align: center;
  border-bottom: 10px solid #bc1818;
  cursor: pointer;
}

.SellingHIstory {
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 400;
  line-height: 100px;
  text-align: center;
}
.SellingHIstory:hover {
  border-bottom: 10px solid #bc1818;
  cursor: pointer;
  transition: 0.5s;
}

.RevenueGeneratedPara {
  /* width: 100%; */
  border-radius: 8px;
  border: 1px solid;
  padding: 23px 26px;
}
.paraTicketsSold {
  width: 96%;
  align-items: center;
  margin-bottom: 10%;
  border-radius: 8px;
  border: 1px solid;
  padding: 23px 26px;
}

.ticketsSold {
  width: 50%;
}
.ListingPageMainContainer {
  max-width: 1400px;
}
.ListingPageContainer {
  height: 250px;
  /* width: 100%; */
  background-color: #e8550d80;
}

@media screen and (min-width: 350px) and (max-width: 950px) {
  button.SellTicketsListingPage {
    width: 75%;
  }
  .cardsSellingStatics {
    flex-direction: column;
    width:100% !important;
  }
  .paraTicketsSold {
    width: 200%;
  }
  .OfferMadeButton {
    font-size: 9px;}
}
</style>

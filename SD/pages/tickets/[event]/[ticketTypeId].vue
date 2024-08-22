<template>
  <commonInnerNav />
  <div class="container TicketsContainer">
    <div class="TicketsButton d-flex">
      <div class="ticketsTyps d-flex">
        <p class="TicketsTypesAvailable">
          {{ ticketTypeDetails.ticket_type }} ({{ tickets.length }})
        </p>
      </div>
      <div class="digitalButton">
        <div class="dropdown">
          <button>
            <img class="SwapButton" src="@/assets/images/swap.png" />
          </button>
          <div class="dropdown-content">
            <p class="ListingPriceLow">Listing price (Low to High!)</p>
            <p class="ListingPriceHigh">Listing price (High to Low)</p>
            <p class="SellerRating">Seller Rating</p>
            <p class="SellerHistory">Seller History</p>
          </div>
        </div>
      </div>
    </div>
    <hr />

    <div
      v-for="ticket in tickets"
      :key="ticket.id"
      class="regukarBOxButton "
    >
      <NuxtLink
        :to="{
          name: 'tickets-event-ticketId',
          params: {
            event: 3,
            ticketId: ticket.id,
          },
        }"
      >
      <div class="regularFlex d-flex justify-content-between">
        <div class="RegularBox d-flex">
          <div class="circularImage">
            <img
              class="WomenImage"
              src="@/assets/images/CircularImageWomen.png"
            />
          </div>
          <div class="paraRegular">
            <p class="RegularPara">{{ ticket.ticket_qty[0].quantity }} Tickets</p>
            <div class="bookingFee">
              <img class="StarImage" src="@/assets/images/star.png" /> 5.0 |
              Super Seller
              <!-- <p>{{ ticket.id }}</p> -->
            </div>
          </div>
        </div>

       
  
     
        </div>
       
   
    <div class="CategoryButton">
          <p class="PriceRating">£{{ ticket.selling_price }}</p>
        </div>
      </NuxtLink> </div>
  
    <button class="SellTicketsButton">
      Get notifications for any new tickets added!
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useTicketStore } from "~/store/ticketStore";

const route = useRoute();
const eventId = parseInt(route.params.event, 10);
const ticketTypeId = parseInt(route.params.ticketTypeId, 10);

const ticketStore = useTicketStore();
const ticketTypeDetails = ref("");
const tickets = ref([]);

const fetchTickets = async () => {
  try {
    const response = await ticketStore.fetchEventTicketsTypeDetails(
      eventId,
      ticketTypeId
    );
    console.log(response.data.ticketTypeDetails.ticket_type);
    ticketTypeDetails.value = response.data.ticketTypeDetails;
    tickets.value = response.data.tickets;
  } catch (error) {
    console.error("Failed to fetch ticket details:", error);
  }
};

onMounted(() => {
  fetchTickets();
});
</script>

<style scoped>

.regularBoxFlex {
}
a{
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.RegularBox {
  gap: 11px;
  align-items: center;
}
.ListingPriceLow {
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
  text-align: left;
  color: #E8550D;
}
.SellerHistory,
.SellerRating,
.ListingPriceHigh {
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  text-align: left;
}
.PriceRating {
  font-family: Montserrat;
  font-size: 25px;
  font-weight: 600;
  line-height: 58.51px;
  text-align: left;
}
/* dropdown css starts here */
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  right: 23px;
  position: absolute;
  background-color: #ECE9E4;
  min-width: 300px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}
.dropdown:hover .dropdown-content {
  display: block;
}
/* dropdown css ends here  */
.SellTicketsButton {
  border-radius: 17px;
  padding: 15px 46px;
  height: 25%;
  justify-content: center;
  display: flex;
  margin: 45px auto;
  gap: 0px;
  background-color: #E8550D;
  font-family: Montserrat;
  font-size: 20px;
  color: white;
  font-weight: 500;
  line-height: 27.5px;
  text-align: center;
}
.SwapButton {
  height: 26px;
}
.circularImage {
  height: auto;
  width: 80px;
}
img.StarImage {
  height: 18px;
  width: 18px;
}
.paraRegular {
  margin-left: 6px;
}
.bookingFee {
  display: flex;
  gap: 5px;
  color: #E8550D;
  font-family: Montserrat;
  font-size: 18px;
  align-items: center;
  font-weight: 500;
  line-height: 42.01px;
  text-align: left;
}
.regukarBOxButton {
  margin: 38px auto;
  align-items: center;
  padding: 11px 17px;
  max-width: 50%;
  border: 1px solid black;
  border-radius: 5px;
}
.CategoryButton {
  display: flex;
}
.TicketsButtonWithText {
  width: 100%;
  height: 60%;
  padding: 5px 10px;
  background-color: #F6BB9E;
  border-radius: 17%;
  display: flex;
  align-items: center;
}
.TicketsButton {
  align-items: center;
  margin-top: 45px;
  margin-bottom: 13px;
  /* margin-left: 33px; */
  justify-content: space-between;
}
.DigitalTicketsButtons {
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  /* line-height: 29.26px; */
  text-align: left;
  color: #8FCD92;
  border: 1px solid #8FCD92;
  margin-right: 45px;
}
img.TicketsImg {
  width: 20px;
  height: 18px;
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
.info_circle {
  width: 8%;
  height: 2%;
}
.RegularPara {
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 600;
  line-height: 35.14px;
  text-align: left;
}
@media screen and (max-width: 1200px) {
  .TicketsTypesAvailable {
    font-family: Montserrat;
    font-size: 32px;
    font-weight: 600;
    line-height: 33.5px;
    text-align: left;
  }
  .regukarBOxButton {
    display: flex;
    /* margin: 0px auto; */
    max-width: 100%;
  }
  .SellTicketsButton {
    width: 100%;
  }
}
</style>

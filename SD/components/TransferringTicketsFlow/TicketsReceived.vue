<template>
  <!-- <EventTicketPage/> -->
    <div class="container ConfirmTicketsTicketsContaine">
      <div class="buttonSellerInfo">
        <NuxtLink to="/TransferringTicketsFlowPage/DigitalTicket"> <button class="orderId">
        #ORD123
      </button></NuxtLink></div>
      <div class="confirmedtext">
        <p class="ConfirmedPara">Ticket Received - Enjoy Your Event!</p>
        <!-- <p class="ConfirmedDescription">Please allow 24-48 hours for us to verify the sale. You will receive your funds once this is done!</p> -->
      </div>
      <SellerInfoRatingComponent/>
      <PriceDetailComponent/>
      
      </div>
</template>
<script setup>
// import EventTicketPage from '~/components/EventsComponent/EventTicketPage.vue'

</script>

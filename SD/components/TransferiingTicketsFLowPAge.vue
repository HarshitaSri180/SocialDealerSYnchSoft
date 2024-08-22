<template>
<EventTicketPage/>
<p class="CheckoutScreen">
  *Checkout <br/> Screen*
</p>
</template>
<script setup>
import EventTicketPage from '~/components/EventTicketPage.vue';
</script>
<style>
.CheckoutScreen{
  font-family: Montserrat;
font-size: 100px;
font-weight: 600;
line-height: 150.8px;
text-align: center;
margin:100px;


}
@media screen and (min-width: 125px) and (max-width: 902px) {
  .CheckoutScreen{
  font-family: Montserrat;
font-size: 40px;
font-weight: 600;
line-height: 50.8px;
text-align: center;
margin:40px;


}

}

</style>
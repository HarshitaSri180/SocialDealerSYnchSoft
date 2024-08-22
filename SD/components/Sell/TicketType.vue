<template>
  <EventsBanner />
  <div class="selectTicketContainer container">
    <p class="SelectTicketType">Select Ticket Type</p>
    <p class="SelectOne">Select One</p>
    <hr />
    <div class="cardsStandard">
      <div class="cardsFirstdiv">
      <div class="cardsFirst">
        <p class="RegularParaCard">Regular</p>
        <p class="InfoHere">info here on what regular means info</p>
      </div>
    
      <div class="SelectBox p-4">  <label for="SelectBox"><input type="radio" name="SelectBox" value=""/> </label></div>
    </div>
    <!-- second card -->
    <div class="cardsSEconddiv">
      <div class="cardsFirst">
        <p class="RegularParaCard">Standard</p>
        <p class="InfoHere">info here on what regular means info</p>
      </div>
      <!-- <div class="SelectBoxBorder"></div> -->
      <div class="SelectBox p-4">  <label for="SelectBox"><input type="radio" name="SelectBox" value=""/> </label></div>
    </div>


    
    </div>
    <div class="cardsStandard">
      <div class="cardsFirstdiv">
      <div class="cardsFirst">
        <p class="RegularParaCard">Regular</p>
        <p class="InfoHere">info here on what regular means info</p>
      </div>
    
      <div class="SelectBox p-4">  <label for="SelectBox"><input type="radio" name="SelectBox" value=""/> </label></div>
    </div>
    <!-- second card -->
    <!-- <div class="cardsSEconddiv">
      <div class="cardsFirst">
        <p class="RegularParaCard">Standard</p>
        <p class="InfoHere">info here on what regular means info</p>
      </div> -->
      <!-- <div class="SelectBoxBorder"></div> -->
      <!-- <div class="SelectBox p-4">  <label for="SelectBox"><input type="radio" name="SelectBox" value=""/> </label></div>
    </div> -->


    
    </div>
    

    <!-- secondCardSelect one starts here -->

    <p class="SelectOne">Select One</p>
    <hr />
    <div class="cardsStandard">
      <div class="cardsFirstdiv">
      <div class="cardsFirst">
        <p class="RegularParaCard">Digital Ticket</p>
        <p class="InfoHere">info here on what regular means info</p>
      </div>
      <div class="SelectBoxDigital p-4">  <label for="SelectBoxDigital"><input type="radio" name="SelectBoxDigital" value=""/> 
        <!-- <input    style="cursor: pointer;"
              type="radio"
              name="SelectBox"
              :value="ticketType.id"
              v-model="selectedTicketTypeId"
              :checked="ticketType.id === ticketTypes[0].id"/> -->
      </label></div>    </div>
    <!-- second card -->
    <div class="cardsSEconddiv">
      <div class="cardsFirst">
        <p class="RegularParaCard">Paper Ticket</p>
        <p class="InfoHere">info here on what regular means info</p>
      </div>
      <div class="SelectBoxDigital p-4">  <label for="SelectBoxDigital"><input type="radio" name="SelectBoxDigital" value=""/> </label></div>    </div>
    </div>
  <button class="Continue"  @click="continueHandler">Continue</button>
  </div>
</template>
<script setup>
import { computed, ref, onMounted } from 'vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(['continue']);

const ticketTypes = computed(() => {
  return props.event.ticket_types || [];
});

const selectedTicketTypeId = ref(null);
const selectedTicketType = ref('normal'); // Set a default value for selectedTicketType

onMounted(() => {
  if (ticketTypes.value.length > 0) {
    selectedTicketTypeId.value = ticketTypes.value[0].id;
  }
});

const continueHandler = () => {
  emits('continue', { ticketTypeId: selectedTicketTypeId.value, selectedTicketType: selectedTicketType.value });
};
</script>
<style>
.Continue{
 
  border-radius: 17px;
  padding: 9px 55px;
  height: 25%;
  
  justify-content: center;
  display: flex;
  margin: 88px auto;
 
 
  background-color: #e8550d;
  font-family: Montserrat;
  font-size: 20px;
  color: white;
  font-weight: 500;
  line-height: 27.5px;
  text-align: center;
}

input[type=radio] {
  border: 2px solid #E8550D;
  padding: 11px;
    -webkit-appearance: none;
}
.radio-toolbar label {
  display: inline-block;
  background-color: #E8550D;
  padding: 4px 11px;
  font-family: Arial;
  font-size: 16px;
  cursor: pointer;
}


input[type=radio]:checked {
/* no-repeat center center; */
  background-size: 9px 9px;
  padding: 11px;
  background-color: #E8550D;
}

.InfoHere{
  font-family: Montserrat;
font-size: 19px;
font-weight: 400;
line-height: 32.57px;
text-align: left;

}

.RegularParaCard{
  font-family: Montserrat;
font-size: 28px;
font-weight: 600;
line-height: 48.76px;
text-align: left;

}

.cardsSEconddiv{
  display: flex;
    width: 40%;
    border-radius: 9px;
  
    padding: 5px 20px;
    justify-content: space-between;
    gap: 45px;
    border: 1px solid black;
    align-items: center;
}
.cardsFirstdiv {
    display: flex;
    width: 40%;
    justify-content: space-between;
    gap: 45px;
    border: 1px solid black;
    align-items: center;
    border-radius: 9px;
  
    padding: 5px 20px;
}
.cardsStandard {
    justify-content: space-between;
    display: flex;
    margin: 60px auto;
    max-width: 84%;
}
.SelectOne {
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 600;
  line-height: 83.5px;
  text-align: left;
}
.selectTicketContainer {
  max-width: 1400px;
}
.SelectTicketType {
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 600;
  line-height: 79.24px;
  text-align: center;
}
@media screen and (min-width:325px) and (max-width:1000px){
  .cardsSEconddiv {
  margin-top:35px;
    width: 100%;
  }
  .cardsFirstdiv {
  
    width: 100%;
  }
  .cardsStandard {
    flex-direction: column;
  }
}
</style>
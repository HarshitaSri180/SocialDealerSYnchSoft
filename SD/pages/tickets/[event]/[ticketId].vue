<template>
  <commonInnerNav />
  <EventsBanner />

  <!-- Confirm your tickets -->
  <div v-if="loading" class="loadingContainer">
    <p>Loading tickets...</p>
  </div>

  <div v-else class="container TicketsContainerTicketScreen">
    <div class="TicketsButton d-flex">
      <div class="ticketsTyps d-flex">
        <p class="TicketsTypesAvailable">Confirm Your Tickets</p>
        <img class="info_circle" src="@/assets/images/Info-Circle.png" />
      </div>
      <div class="digitalButton">
        <button class="DigitalTicketsButtons">{{ ticketDetails.ticket_types.ticket_type }}</button>
      </div>
    </div>

    <hr />

    <!-- Profile info -->
    <div class="profileCards d-flex justify-content-between">
      <div class="card cardBorder">
        <div class="CardImage">
          <div class="circularImage">
            <img
              class="WomenImage"
              src="@/assets/images/CircularImageWomen.png"
            />
            <div class="MaximillianJacobson">
              <p class="MaximillianPara">{{ ticketDetails.User.firstName }} {{ ticketDetails.User.lastName }}</p>
              <div class="paraRegular">
                <span class="SuperSellerFiveStar d-flex">
                  <img class="StarImage" src="@/assets/images/star.png" />5.0|Super Seller
                </span>
              </div>
            </div>
          </div>
          <div class="forwordArrow">
            <img src="@/assets/images/forwordArrow.png" />
          </div>
        </div>

        <hr />
        <div class="ticketSAvailableReguar">
          <p class="TwoTicketsAvailableTicketsScreen">{{ ticketDetails.ticket_qty[0].quantity }} Tickets Available</p>
          <p class="RegularTicketSreen">{{ ticketDetails.ticket_types.ticket_type }}</p>
        </div>
        <div class="MoneyPllusMinus">
          <div class="money">
            <p class="PRiceTicketScreen">£{{ ticketDetails.selling_price }}</p>
            <p class="ListingPriceTicketsScreen">each, seller's listing price</p>
          </div>
          <div class="plusMinus">
            <button class="minus" @click="decrementTicketCount">-</button>
            <span class="NumberTwo">{{ ticketCount }}</span>
            <button class="Plus" @click="incrementTicketCount">+</button>
          </div>
        </div>
      </div>

      <div class="Divider">
        <div class="vertical-divider"></div>
      </div>
      <div class="card">
        <div class="summary">
          <p class="summaryTicketsScreen">Summary</p>
          <div class="regularTicket d-flex justify-content-between">
            <p class="RegularTextTcketScreen">{{ ticketCount }} x {{ ticketDetails.ticket_types.ticket_type }}</p>
            <p class="RegularTextTcketScreen">£{{ ticketDetails.selling_price * ticketCount }}</p>
          </div>
        </div>
        <hr />
        <div class="summary">
          <div class="regularTicket d-flex justify-content-between">
            <p class="SubtotalTicketsScreen">Subtotal</p>
            <p class="SubtotalTicketsScreen">£{{ ticketDetails.selling_price * ticketCount }}</p>
          </div>
          <div class="regularTicket d-flex justify-content-between">
            <p class="FeesTicketsScreen">Fees</p>
            <p class="FeesTicketsScreen">£0.35</p>
          </div>
        </div>
        <hr />
        <div class="summary">
          <div class="regularTicket d-flex justify-content-between">
            <p class="TotalTicketsEvent">Total</p>
            <p class="totalBill">£{{ (ticketDetails.selling_price * ticketCount) + 0.35 }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="buttonMakeOffer">
      <div class="makeoffer">
        <NuxtLink to="/TransferringTicketsFlowPage">
          <button>Make Offer</button>
        </NuxtLink>
      </div>
      <!-- <button class="BuyNow"  @click="handleBuyNow()">Buy Now</button> -->
            <!-- Button trigger modal -->

<button type="button" class="btn BuyNow" @click="handleBuyNowClick">
  Buy Now
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <div class="container p-0">
        <div class="card px-4">
         
            <p class="h8 py-3 fs-2 text-center mb-6 mt-2 fw-bold">Payment Details</p>
            <div class="row gx-3">
                <div class="col-12">
                    <div class="d-flex flex-column">
                      <p class="text mb-1">User Name</p>
                      <input id="personName" class="form-control mb-3" type="text" placeholder="Name" readonly>
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-flex flex-column">
                      <p class="text mb-1">Email</p>
                      <input id="universityEmail" class="form-control mb-3" type="text" placeholder="Email" readonly>
                    </div>
                </div>
                <div class="col-12">
                <div class="d-flex flex-column">
                  <p class="text mb-1">Cardholder Name</p>
                  <input v-model="cardholderName" class="form-control mb-3" type="text" placeholder="Name on card">
                </div>
              </div>
               
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Card Number</p>
                      <div id="card-element" class="form-control mb-3" type="text">
                      </div>
                    </div>
                </div>
              
               
                
            </div>
        </div>
    </div>
       
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
    
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary"  data-bs-dismiss="modal">Close</button>
        <button 
          type="button" 
          class="btn" 
          style="background-color: #E8550D; color:#ffffff" 
          @click="handleBuyNow"
          :disabled="isLoading"
        >
          <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          {{ isLoading ? 'Processing...' : 'Pay Now' }}
        </button>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
  

  <!-- <div id="card-element"></div> -->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'; 
import { useTicketStore } from '~/store/ticketStore';
import { useCookies } from '@vueuse/integrations/useCookies';
import { loadStripe } from '@stripe/stripe-js';
import { useCookieManager } from '~/composables/useCookieManager';
import { Modal } from 'bootstrap'
import axios from 'axios';
const { $notyf } = useNuxtApp();
const router = useRouter(); 
const { getAuthCookie } = useCookieManager();

// Replace with your own publishable key
const stripePromise = loadStripe('pk_test_51PjLYn2MtHstS6mqWSQP021rTiqSZVvYbxU6tUaqm3N1NDjOCZolsBSfwn3NDj0Msm8p3amGplQSuHabuDtMFykD00i84gedVN');

const cardElement = ref(null);
const ticketCount = ref(1);
const loading = ref(true);
const ticketDetails = ref('');

const isLoading = ref(false);

const cardholderName = ref('');

function incrementTicketCount() {
  if (ticketCount.value < ticketDetails.value.ticket_qty[0].quantity) {
    ticketCount.value++;
  }
}
function decrementTicketCount() {
  if (ticketCount.value > 1) {
    ticketCount.value--;
  }
}

const route = useRoute();
const eventId = parseInt(route.params.event, 10);
const ticketId = parseInt(route.params.ticketId, 10);

const ticketStore = useTicketStore();

const fetchTickets = async () => {
  try {
    const response = await ticketStore.fetchEventTickets(eventId, ticketId);
    ticketDetails.value = response.data; 
    loading.value = false;
  } catch (error) {
    console.error('Failed to fetch ticket details:', error);
    loading.value = false; 
  }
};



const handleBuyNowClick = () => {
 
  const { token, user } = getAuthCookie();

  if (!token) {
    router.push('/auth/login');
    return;
  }

  if (!user) {
    $notyf.error('User data not found. Please log in again.');
    router.push('/auth/login');
    return;
  }

  console.log('User data:', user);

  // Fill the modal with user data
  document.getElementById('personName').value = `${user.firstName} ${user.lastName}`;
  //document.getElementById('phoneNumber').value = user.phoneNumber;
  document.getElementById('universityEmail').value = user.universityEmail;

  const modalElement = document.getElementById('exampleModal');
  const modal = new Modal(modalElement);
  modal.show();
};

const handleBuyNow = async () => {
  // Form validation
  if (!cardElement.value || !cardholderName.value) {
    $notyf.error('Please fill in all card details');
    return;
  }
  isLoading.value = true; // Start loading

  try {
    const { token, user } = getAuthCookie();
    const paymentData = {
      event_id: eventId,
      ticket_id: ticketId,
      amount: (ticketDetails.value.selling_price * ticketCount.value) + 0.35,
    };

    // Step 1: Create Payment Intent
    const paymentResponse = await axios.post(
      'https://api-socialdealer.synchsoft.in/api/v1/create-payment-intent',
      paymentData,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const clientSecret = paymentResponse.data.data.paymentIntent.client_secret;
    const intentId = parseInt(paymentResponse.data.data.storedPayment.id);

    const stripe = await stripePromise;
    const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement.value,
        billing_details: {
          name: cardholderName.value,
        },
      },
    });

    if (error) {
      if (error.response && error.response.data && error.response.data.error) {
        const errorCode = error.response.data.error.code;
        if (errorCode === 'FST_JWT_AUTHORIZATION_TOKEN_EXPIRED') {
          $notyf.error('Session expired. Please log in again.');
          router.push('/auth/login');
          return;
        }
      }
      $notyf.error(`Payment failed: ${error.message}`);
      console.error('Payment failed:', error);
      return;
    }

    // Step 2: Determine Status and OTP Based on Ticket Type
    let status = 'Pending';
    let otp = null;

    if (ticketDetails.value.ticket_format == 'normal') {
      status = 'Confirmed';
    } else if (ticketDetails.value.ticket_format == 'paper') {
      otp = Math.floor(100000 + Math.random() * 900000).toString();
    }

    // Step 3: Create Order After Successful Payment
    const orderData = {
      intent_id: intentId,
      ticket_id: ticketId,
      quantity: ticketCount.value,
      seller_id: ticketDetails.value.User.id,
      amount: paymentData.amount,
      order_type: ticketDetails.value.ticket_format,
      status: status,
      payment_data: paymentIntent, 
      otp: otp,
    };

    const orderResponse = await axios.post(
      'https://api-socialdealer.synchsoft.in/api/v1/create-ticket-order',  
      orderData,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    $notyf.success('Order created successfully!');
    const orderId = orderResponse.data.id;  

    if (ticketDetails.value.ticket_format == 'normal') {
      router.push(`/transferTicket/${orderId}/ticketReceived`);
    } else if (ticketDetails.value.ticket_format == 'paper') {
      router.push(`/transferTicket/${orderId}/stepsForPaperTicket`);
    } else if (ticketDetails.value.ticket_format == 'digital') {
      router.push(`/transferTicket/${orderId}/stepsForDigitalTickets`);
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      const errorCode = error.response.data.error.code;
      if (errorCode === 'FST_JWT_AUTHORIZATION_TOKEN_EXPIRED') {
        $notyf.error('Session expired. Please log in again.');
        router.push('/auth/login');
        return;
      }
    }
    $notyf.error(`Failed to process payment or create order: ${error.message}`);
    console.error('Failed to process payment or create order:', error);
  } finally {
    isLoading.value = false; // Stop loading regardless of outcome
  }
};
onMounted(async () => {
  await fetchTickets();
  const stripe = await stripePromise;
  const elements = stripe.elements(); 
  const options = {
  layout: {
    type: 'tabs',
    defaultCollapsed: false,
  }
};
  cardElement.value = elements.create('card', {
  style: {
    base: {
      iconColor: '#000000',
      color: '#000000',
      fontWeight: '500',
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#fce883',
      },
      '::placeholder': {
        color: '#808080',
      },
    },
    invalid: {
      iconColor: '#FFC7EE',
      color: '#ff0000',
    },
  },
});
  cardElement.value.mount('#card-element');
});
</script>





<style scoped>
input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button{
  -webkit-appearance: none;
  margin:0;
}
button.btn.btn-secondary:hover {
  background-color:  #E8550D;
  color: white;
}
.EventMAinPageHEro {
  height: 360px !important;
}
.LovelandFestivalsEvent {
  top: 65% !important;
}
.EventDate {
  top: 55% !important;
}
.totalBill {
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 50px;
  text-align: left;
  color: #bc1818;
}
.ticketSAvailableReguar {
  padding: 0px 10px;
}
.circularImage {
  display: flex;
  gap: 29px;
}
.TotalTicketsEvent {
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 50px;
  text-align: left;
}
.FeesTicketsScreen {
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 50px;
  text-align: left;
}
span.NumberTwo {
  font-size: 20px;
}
.SubtotalTicketsScreen {
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 27.5px;
  text-align: left;
}
.RegularTextTcketScreen {
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 400;
  line-height: 50px;
  text-align: left;
}
.TicketsContainerTicketScreen {
  max-width: 1300px;
}
.buttonMakeOffer {
  margin-bottom: 180px;
  margin-top: 80px;
}
.card {
  flex-basis: calc(38% - 30px);
  box-shadow: none;
  border: none;
}
.summaryTicketsScreen {
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 27.5px;
  text-align: left;
}
.ListingPriceTicketsScreen {
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 400;
  line-height: 50px;
  text-align: left;
}
.PRiceTicketScreen {
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 50px;
  text-align: left;
}
.RegularTicketSreen {
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 400;
  line-height: 50px;
  text-align: left;
}
.TwoTicketsAvailableTicketsScreen {
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 50px;
  text-align: left;
}
.SuperSellerFiveStar {
  font-family: Montserrat;
  font-size: 20px;
  gap:5px;
  align-items: center;
  font-weight: 500;
  line-height: 29.01px;
  text-align: left;
  color: #e8550d;
}
.cardBorder {
  border: 2px solid grey;
}
.CardImage {
  align-items: center;
}
.forwordArrow {
  width: 14px;
}
.MaximillianPara {
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 42.67px;
  text-align: left;
}
.MoneyPllusMinus {
  display: flex;
  padding:0px 10px;
  align-items: center;
  
  justify-content: space-between;
}
button.minus {
  border-radius: 5px;
  border: 2px solid #bdbdbd;
  padding: 0px 8px;
  font-size: 16px;
}
.plusMinus {
  display: flex;
  gap: 10px;
  padding: 0px 10px;
  border-radius: 5px;
}
button.Plus {
  border: 1px solid #000000;
  padding: 0px 8px;
  border-radius: 5px;

  background-color: #ece9e4;
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
.BuyNow {
  border-radius: 17px;
  padding: 11px 15px;
  height: 25%;
  width: 35%;
  justify-content: center;
  display: flex;
  margin: 25px auto;
  gap: 0px;
  background-color: #e8550d;
  font-family: Montserrat;
  font-size: 20px;
  color: white;
  font-weight: 500;
  line-height: 27.5px;
  text-align: center;
}
.makeoffer {
  border-radius: 17px;
  padding: 11px 15px;
  height: 25%;
  width: 35%;
  justify-content: center;
  display: flex;
  margin: 25px auto;
  gap: 0px;
  color: black;
  background-color: #ece9e4;
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

  margin-bottom: 13px;
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
  width: 8%;
  height: 2%;
}
.DigitalTicketsButtons {
  padding: 0px 22px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #8fcd92;
  border: 1px solid #8fcd92;
  /* margin-right: 45px; */
}

.LovelandFestivalsEvent {
  top: 65%;
}
.EventDate {
  top: 55%;
}
@media screen and (max-width: 1200px) {
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
  .MaximillianPara {
    font-family: Montserrat;
    font-size: 19px;
  }
  .circularImage {
    gap: 14px;
}
.DigitalTicketsButtons {
    font-size: 12px;
}
  .BuyNow {
    width: 100%;
  }
}



.ElementsApp, .ElementsApp .InputElement {
    color: black !important;
    font-weight: 500;
    font-family: Roboto, Open Sans, Segoe UI, sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>

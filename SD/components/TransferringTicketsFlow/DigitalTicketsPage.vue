<template>
  <!-- <EventTicketPage /> -->

  <!-- steps in bootstrap -->
  <!-- Process 1 - Bootstrap Brain Component -->
  <section class="">
    <div class="container">
      <div class="row gy-5 gy-lg-0 align-items-lg-center">
        <!-- <div class="col-12 col-lg-6">
        <img class="img-fluid rounded" loading="lazy" src="./assets/img/process-img-1.png" alt="Our Design Process">
      </div> -->
        <div class="col-12">
          <div class="row justify-content-xl-center">
            <div class="col-12 col-xl-11">
              <!-- <h2 class="h1 mb-3">Our Design Process</h2> -->
              <p class="lead mb-4 mt-4">Steps To Send Your Digitaal Ticket</p>
              <div class="cotentMain">
                <div class="d-flex mb-4 mt-4">
                  <div>
                    <span class="OneImg">
                      <img
                        class="imgoneCircle"
                        src="@/assets/images/oneInaCircle.png"
                        alt="Description of the image"
                      />
                    </span>
                  </div>
                  <div>
                    <h4 class="messageTheSeller mb-2">Generate a Link</h4>
                    <p class="mb-0 messageTheSellerPara">
                      Head to the application where you purchased your ticket in order to generate a transfer ticket link.
                    </p>
                  </div>
                </div>
                <div class="d-flex mb-4 mt-4">
                  <div>
                    <span class="OneImg">
                      <img
                        class="imgthreeCircle"
                        src="@/assets/images/twoInaCircle.png"
                        alt="Description of the image"
                      />
                    </span>
                  </div>
                  <div>
                    <h4 class="messageTheSeller mb-2">Message the buyer</h4>
                    <p class="mb-0 messageTheSellerPara">
                      Once you have generated a link, make sure you send this to the buyer!
                    </p>
                    <p class="messageTheSellerPara">
                      Once the buyer has accepted this link, forward us the email confirmation to ensure that this has gone through!
                    </p>
                  </div>
                </div>
                <div class="d-flex mb-4 mt-4">
                  <div>
                    <span class="OneImg">
                      <img
                        class="imgfifthCircle"
                        src="@/assets/images/threeInaCircle.png"
                        alt="Description of the image"
                      />
                    </span>
                  </div>
                  <div>
                    <h4 class="AcceptTheTicket mb-2">Email Confirmation</h4>
                    <p class="mb-0 AcceptTheTicketPara">
                      Once the buyer has accepted this link, forward us the email confirmation to ensure that this has gone through!
                    </p>
                  </div>
                </div>
                <div class="d-flex mb-4 mt-4">
                  <div>
                    <span class="OneImg">
                      <img
                        class="imgFourthCircle"
                        src="@/assets/images/FourInaCircle.png"
                        alt="Description of the image"
                      />
                    </span>
                  </div>
                  <div>
                    <h4 class="AcceptTheTicket mb-2">Confirm Transaction</h4>
                    <p class="mb-0 AcceptTheTicketPara">
                      Head to “my listings” to confirm that you have completed these steps!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="OtherSection">
        <p class="ClickHere">
          Click <span class="ExampleShown">here</span> to see an example of this
          process!
        </p>
      </div>
      <div class="TextWithButton">
        <p class="ClickToViewOrder">
          Click below to view your order and to contact your seller!
        </p>
        <NuxtLink to="/TransferringTicketsFlowPage/TransferDigitalTicket"
          ><button class="ViewMyorder">View My Order</button></NuxtLink
        >
      </div>
    </div>
  </section>
</template>
<script setup>
// import EventTicketPage from "~/components/EventsComponent/EventTicketPage.vue";
</script>

<style scoped>

.ClickHere {
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 400;
  line-height: 58.96px;
  text-align: center;
}
img.imgthreeCircle {
    width: 120px;
}
.ExampleShown {
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 400;
  line-height: 58.96px;
  text-align: left;
  color: #49b4c2;
  cursor: pointer;
}

.ClickToViewOrder {
  text-align: center;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 65.51px;
  text-align: center;
}

.messageTheSeller,
.confirmTicketReceipt,
.AcceptTheTicket {
  font-family: Montserrat;
font-size: 27px;
font-weight: 700;
}
button.ViewMyorder {
  border-radius: 17px;
  padding: 12px 15px;
  height: 25%;
  width: 26%;
  justify-content: center;
  display: flex;
  margin: 38px auto;
  gap: 0px;
  background-color: #e8550d;
  font-family: Montserrat;
  font-size: 20px;
  color: white;
  font-weight: 500;
  line-height: 27.5px;
  text-align: center;
}
.messageTheSellerPara,
.AcceptTheTicketPara,
.confirmTicketReceiptPara {
  font-family: Montserrat;
font-size: 18px;
font-weight: 500;
}
img.imgFourthCircle {
    width: 77px;
}
img.imgfifthCircle {
    width: 114px;
}

.d-flex.mb-4 {
  align-items: flex-start;
  gap: 15px;
}
.cotentMain {
  margin: 0px auto;
  max-width: 50%;
  gap: 15px;
}
p.lead.mb-4.mt-4 {
  text-align: center;
    font-family: Montserrat;
font-size: 40px;
font-weight: 600;
line-height: 85.33px;
text-align: center;
}
.textWithHeading {
  margin: 0px auto;
}
.col-12.col-xl-11 {
  display: grid;
  justify-content: center;
}
.imgoneCircle{
  width: 100px;
}
.imgtwoCircle{
  width: 49px;
}
.imgthreeCircle {
    width: 109px;
}
.messageTheSeller.d-flex {
  align-items: center;
  margin: 38px 0px;
  justify-content: center;
}
.ConfirmticketReceipt {
  align-items: center;
  margin: 38px 0px;
  justify-content: center;
}
.AccepttheTicket {
  align-items: center;
  margin: 38px 0px;
  justify-content: center;
}
.SellerContainer{
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
    max-width: 90%;
}
}
</style>

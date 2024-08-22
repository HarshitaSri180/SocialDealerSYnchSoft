<template>
  <EventTicketPage />

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
              <p class="lead mb-4 mt-4">Steps To Send Your Digital Ticket</p>
              <div class="cotentMain">
                <div class="d-flex mb-4 mt-4">
                  <div>
                    <span class="OneImg">
                      <img
                        class="imgOneCircle"
                        src="@/assets/images/oneInaCircle.png"
                        alt="Description of the image"
                      />
                    </span>
                  </div>
                  <div>
                    <h4 class="messageTheSeller mb-2">Generate a Link</h4>
                    <p class="mb-0 messageTheSellerPara">
                      Message the seller of this ticket to receive a ‘transfer
                      link’
                    </p>
                  </div>
                </div>
                <div class="d-flex mb-4 mt-4">
                  <div>
                    <span class="OneImg">
                      <img
                        class="imgOneCircle"
                        src="@/assets/images/twoInaCircle.png"
                        alt="Description of the image"
                      />
                    </span>
                  </div>
                  <div>
                    <h4 class="messageTheSeller mb-2">Message the buyer</h4>
                    <p class="mb-0 messageTheSellerPara">
                      Message the seller of this ticket to receive a ‘transfer
                      link’
                    </p>
                    <p class="messageTheSellerPara">
                      P.S. Only click on links that are from primary
                      ticketing<br />
                      agents, e.g. FIXR, RA Guide, etc. in order to remain safe!
                    </p>
                  </div>
                </div>
                <div class="d-flex mb-4 mt-4">
                  <div>
                    <span class="OneImg">
                      <img
                        class="imgOneCircle"
                        src="@/assets/images/threeInaCircle.png"
                        alt="Description of the image"
                      />
                    </span>
                  </div>
                  <div>
                    <h4 class="AcceptTheTicket mb-2">Email Confirmation</h4>
                    <p class="mb-0 AcceptTheTicketPara">
                      Once you have received the link, make sure to accept the
                      ticket!
                    </p>
                  </div>
                </div>
                <div class="d-flex mb-4 mt-4">
                  <div>
                    <span class="OneImg">
                      <img
                        class="imgOneCircle"
                        src="@/assets/images/threeInaCircle.png"
                        alt="Description of the image"
                      />
                    </span>
                  </div>
                  <div>
                    <h4 class="AcceptTheTicket mb-2">Confirm Transaction</h4>
                    <p class="mb-0 AcceptTheTicketPara">
                      Once you have received the link, make sure to accept the
                      ticket!
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
        <NuxtLink to="/TransferDigitalTicket"
          ><button class="ViewMyorder">View My Order</button></NuxtLink
        >
      </div>
    </div>
  </section>
</template>
<script setup>
import EventTicketPage from "~/components/EventTicketPage.vue";
</script>

<style scoped>
.ClickHere {
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 400;
  line-height: 58.96px;
  text-align: center;
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
  font-size: 32px;
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
  opacity: 0px;
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
  font-size: 20px;
  font-weight: 500;
}

.d-flex.mb-4 {
  align-items: flex-start;
  gap: 15px;
}
.cotentMain {
  margin: 0px auto;
  max-width: 90%;
  gap: 15px;
}
p.lead.mb-4.mt-4 {
  text-align: center;
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 600;
  line-height: 85.33px;
  text-align: left;
}
.textWithHeading {
  margin: 0px auto;
}
.col-12.col-xl-11 {
  display: grid;
  justify-content: center;
}
.imgOneCircle,
.imgtwoCircle,
.imgthirdCircle {
  width: 49px;
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
.SellerContainer {
  margin: 0 auto;
  max-width: 50%;
}
</style>

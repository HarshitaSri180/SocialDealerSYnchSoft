<template>
  
</template>
<script></script>
<style scoped>
.TicketsContainer {
  max-width: 1400px;
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
  color: #e8550d;
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
  background-color: #ece9e4;
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
  background-color: #e8550d;
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
span.bookingFee {
  display: flex;
  gap: 5px;
  color: #e8550d;
  font-family: Montserrat;
  font-size: 18px;
  align-items: center;
  font-weight: 500;
  line-height: 42.01px;
  text-align: left;
}
.regukarBOxButton {
  display: flex;
  margin: 38px auto;
  align-items: center;
  padding: 11px 17px;
  max-width: 50%;
  border: 1px solid black;
  border-radius: 5px;
  justify-content: space-between;
}
.CategoryButton {
  display: flex;
}
.TicketsButtonWithText {
  width: 100%;
  height: 60%;
  padding: 5px 10px;
  background-color: #f6bb9e;
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
  color: #8fcd92;
  border: 1px solid #8fcd92;
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

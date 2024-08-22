<template> 
<Banner/>
  <div class="container LayoutDigitalTicketsContaine">
    <div class="buttonSellerInfo">
    <button class="orderId">
      #ORD123
    </button></div>
   <NuxtLink to="/Sellinghub/SelectEvent"> <button class="ViewNextStepButton">View next steps to transfer your Digital Ticket</button></NuxtLink>
    <!-- sellerInfoRating component starts here -->
    <div class="sellerInfoRating">
      <div class="sellerInfoHeadig">Buyer Information</div>
      <hr/>
    </div>
        <!-- card rating -->
    <div class="card ratingCard" style="width: 26rem;">
      <div class="MenImageDiv d-flex justify-content-between">
        <div class="menImage">
          <img src="@/assets/images/MenImageSquare.png">
        </div>
        <div class="MenNameSection">
          <p class="MenNAme">Maximillian Jacobson</p>
          <p class="MemberShip">Member Since 2 Years</p></div>
          <div class="starRating">
        <img src="@/assets/images/chat.png">
      </div>
      </div>
  
   
    
  <div class="card-body">
    
    <div class="StarImage d-flex">
      <img src="@/assets/images/StarPink.png">
      <img src="@/assets/images/StarPink.png">
      <img src="@/assets/images/StarPink.png">
      <img src="@/assets/images/StarPink.png">
      <img src="@/assets/images/StarPink.png">
    </div>
    
  </div>
</div>
    <!-- card rating ends -->
    <!-- </div> -->
        <!-- sellerInfoRating component ends here -->
        <!-- enter Six digit code -->
        <div class="SixDigitCode">
        <p class="SixDigitCodeHeading">Enter 6-digit code:</p>  
        </div>
        <hr/>
        <div >
          <p class="sixDigitcodeDescription">Contact your buyer to receive a 6-digit code to verify your transaction!</p>

        </div>
 
                <!-- enter Six digit code -->
<div class="horizontalLineDiv d-flex justify-content-center gap-4">
  <img  class="OtpHorizontaiLine"  src="@/assets/images/HorizontalLine.png">
  <img  class="OtpHorizontaiLine" src="@/assets/images/HorizontalLine.png">
  <img class="OtpHorizontaiLine"  src="@/assets/images/HorizontalLine.png">
  <img class="OtpHorizontaiLine"  src="@/assets/images/HorizontalLine.png">
  <img  class="OtpHorizontaiLine" src="@/assets/images/HorizontalLine.png">
  <img  class="OtpHorizontaiLine" src="@/assets/images/HorizontalLine.png">
</div>
<button class="VerifyCodeButton">VerifyCode</button>
    </div>

</template>
<script setup>
import Banner from '~/components/Events/Banner.vue'
</script>
<style scoped>
/* .CodeLine:after {
    display: flex;
    height: 5px;
    content: " ";
    background-color: red;
    width: 50px;
} */

.sixDigitcodeDescription{
  margin-bottom: 168px;
  font-family: Montserrat;
font-size: 18px;
font-weight: 500;
line-height: 52.36px;
text-align: left;

}

hr{
  margin-bottom: 20px !important;
}
.OtpHorizontaiLine {
    height: 5px;
    margin: 15px 14px;
}
.OtpHorizontaiLine{
  width:34px;
}
.SixDigitCodeHeading{
  font-family: Montserrat;
font-size: 30px;
font-weight: 600;
line-height: 27.5px;
text-align: left;

}
.VerifyCodeButton{
  
  border-radius: 17px;
  padding: 12px 15px;
  height: 25%;
  
  justify-content: center;
  display: flex;
  margin: 38px auto;
  background-color: #e8550d;
  font-family: Montserrat;
  font-size: 21px;
  color: white;
  font-weight: 500;
  line-height: 27.5px;
  text-align: center;
}
button.orderId{
  
 
  border-radius: 13px;
  padding: 5px 36px;
  height: 25%;
 
  justify-content: center;
  display: flex;
  margin: 38px auto;
  gap: 0px;
  
  background-color: transparent;
  font-family: Montserrat;
  font-size: 21px;
  color: rgb(0, 0, 0);
  font-weight: 500;
  line-height: 27.5px;
  text-align: center;
 border: 1px solid grey;
 
 
 
 }
 button.ViewNextStepButton {
  
  
  border-radius: 17px;
  padding: 12px 15px;
  height: 25%;
  
  justify-content: center;
  display: flex;
  margin: 38px auto;
  background-color: #e8550d;
  font-family: Montserrat;
  font-size: 21px;
  color: white;
  font-weight: 500;
  line-height: 27.5px;
  text-align: center;
 }

.StarImage.d-flex {
    width: 33px;
    gap: 14px;
    justify-content: center;
}
.sellerInfoHeadig{
  font-family: Montserrat;
font-size: 30px;
font-weight: 600;
line-height: 27.5px;
text-align: left;

}
.card-body {
    display: flex;
    justify-content: center;
}
.menImage {
    width: 66px;
}
.card.ratingCard {
  box-shadow: none;
  
  border:1px solid grey;
    margin: 60px auto;
}
.MemberShip {
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 400;
    line-height: 17.57px;
    text-align: left;
}
.MenNAme{
  font-family: Montserrat;
font-size: 18px;
font-weight: 600;
line-height: 42.67px;
text-align: left;

}
.starRating {
    width: 34px;
}

</style>
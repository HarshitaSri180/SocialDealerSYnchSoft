<template>
  <div class="messageScreenContaimer container">
    <!-- <p class="messageHeading">Messages</p> -->
    <div class="ListingComponent d-flex">
      <p class="chatHeading">Chat <span class="ChatOne">(1)</span></p>
    </div>
    <div class="hrMsgScreen"><hr class="hrMsgScreen" /></div>

    <div class="messageMainScreen d-flex">
      <div class="chatoption ">
        <!-- firstDiv -->

        <div class="firstChatOption d-flex">
          <div class="menImagediv d-flex">
            <img
              src="@/assets/images/MsgScreenImgMen.png"
              alt=""
              class="menMsgScn"
            />
            <div class="nameMsg">
              <p class="NamemSgScreen">Andrew Parker</p>
              <p class="offersent">Offer Sent</p>
            </div>
          </div>
          <div class="DateandRightArrow d-flex">
            <p class="dateMsgScreen">17:52</p>
            <img
              src="@/assets/images/ArrowRight.png"
              alt=""
              class="rightarrow"
            />
          </div>
        </div>
        <!-- secondDiv -->
        <div class="thirdChatOption d-flex">
          <div class="menImagediv d-flex">
            <img
              src="@/assets/images/MsgScreenIMgWomen.png"
              alt=""
              class="menMsgScn"
            />
            <div class="nameMsg">
              <p class="NamemSgScreen">Karen Castillo</p>
              <p class="offersent">0:14</p>
            </div>
          </div>
          <div class="DateandRightArrow d-flex">
            <p class="dateMsgScreen">11/15/19</p>
            <img
              src="@/assets/images/ArrowRight.png"
              alt=""
              class="rightarrow"
            />
          </div>
        </div>
        <!-- third div -->
        <div class="thirdChatOption d-flex mb-4">
          <div class="menImagediv d-flex">
            <img
              src="@/assets/images/MessageScreenImageWomens.png"
              alt=""
              class="menMsgScn"
            />
            <div class="nameMsg">
              <p class="NamemSgScreen">Martha Craig</p>
              <p class="offersent">Are you willing to buy?</p>
            </div>
          </div>
          <div class="DateandRightArrow d-flex">
            <p class="dateMsgScreen">17:52</p>
            <img
              src="@/assets/images/ArrowRight.png"
              alt=""
              class="rightarrow"
            />
          </div> </div>
        </div>
     
      <div class="chatScreen">
        <div class="secondChatOption d-flex">
          <div class="menImagediv d-flex">
            <img
              src="@/assets/images/MsgScreenImgMen.png"
              alt=""
              class="menMsgScn"
            />
            <div class="nameMsg">
              <p class="NamemSgScreen">Andrew Parker</p>
              <p class="offersent">See Profile</p>
            </div>
          </div>
          <div class="DateandRightArrow d-flex">
            <img
              src="@/assets/images/ArrowRight.png"
              alt=""
              class="rightarrow"
            />
          </div>
        </div>
        <div class="msgsChatScreen">
          <p class="LovelandMsgScreen">Loveland Festival 2022 | 25YRS</p>
          <div class="CalenderWithParaSec d-flex">
            <div class="calender">
              <img class="calender" src="@/assets/images/Calendar.png" />
            </div>
            <div class="calenderTExt">
              <p class="CAlenderPara">
                Fri 22 Jul 2022, 15:00 till Sat 23 Jul 2022, 23:00
              </p>
            </div>
          </div>
          <div class="CalenderWithParaSec d-flex">
            <div class="calender">
              <img class="calender" src="@/assets/images/Location.png" />
            </div>
            <div class="calenderTExt">
              <p class="CAlenderPara">Ruigoord, Amsterdam, Netherlands</p>
            </div>
          </div>
          <div class="OneExRegular d-flex justify-content-between">
            <p class="CAlenderPara">1 X Regular</p>
            <p class="Euroregular">€9.73</p>
          </div>
          <div class="offeredAmount">
            <p class="offeredAmt">Offered Amount</p>
            <div class="amntsEuro d-flex gap-2">
              <p class="AmountOffered">€9.00</p>
              <p class="cutOffer">€9.73</p>
            </div>
            <div class="buttonRejectAccept gap-2 d-flex">
              <button class="reject">Reject Offer</button>
              <button class="accept">Accept Offer</button>
            </div>
            <div class="Timing">
              <p class="timimgPAra">1:20 PM</p>
            </div>
          </div>
          
        </div>
        <div class="secondMSg">
          <div class="secondMessageDiv">
            <p class="msgSecond">
              Please allow me for 5 minutes I’m driving right now.
            </p>
            <p class="timimgPAra">1:20 PM</p>
          </div>
        </div>
        <div class="thirdmsg">
          <p class="msgSecond">Okay sure, take your time.</p>
          <p class="timimgPAra">1:20 PM</p>
        </div>
   
       
      </div>
      
  

    </div>
    <div class="messageInput">
  <input type="text" placeholder="Enter your message" />
  <button class="send-button rounded-end"> <i class="bi bi-send" style="padding: 14px;"></i>
</button>
</div>
  </div>
</template>
<script setup>
</script>
<style scoped>
.OneExRegular.d-flex.justify-content-between {
  padding: 7px 0px;
}
.messageInput {
  position: relative;
  display: inline-block;
}

.messageInput input {
  padding-right: 50px; /* Adjust to fit the button */
  width: 100%;
  box-sizing: border-box;
}

.messageInput .send-button {
  position: absolute;
  right: 0;
  top:47px;
  bottom: 0;
  border: none;
  background-color: #bc1818; /* Button background color */
  color: white;
  padding: 0 10px;
  cursor: pointer;
  height: 56%;
}

.messageInput .send-button:hover {
  background-color: orangered; /* Button hover color */
}

.timimgPAra {
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 400;
  line-height: 24.38px;
  letter-spacing: -0.40799999237060547px;
  text-align: right;
}
.chatoption {
  overflow-y: scroll;
}
input[type="text"]:focus{
  border-bottom: 2px solid #bc1818;
  outline: none;;
}
input[type="text"] {
    width: 70%;
    padding: 19px;
    border-radius: 9px;
    margin-top:45px;
}
.messageInput {
    display: flex;
    justify-content: end;
}
/* Highlighted: Scoped scrollbar styling to both .chatScreen and .chatoption */
.chatScreen::-webkit-scrollbar,
.chatoption::-webkit-scrollbar {
  width: 10px;
}

/* Highlighted: Scoped scrollbar track styling to both .chatScreen and .chatoption */
.chatScreen::-webkit-scrollbar-track,
.chatoption::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(255, 255, 255);
  border-radius: 0px;
}

/* Highlighted: Scoped scrollbar thumb styling to both .chatScreen and .chatoption */
.chatScreen::-webkit-scrollbar-thumb,
.chatoption::-webkit-scrollbar-thumb {
  background: #999090;
  border-radius: 10px;
}
.CalenderWithParaSec.d-flex {
  gap: 7px;
  margin-bottom: 15px;

  align-items: center;
}

.thirdmsg {
  width: 39%;

  padding: 20px 18px;
  border-radius: 9px;
  background: #e5e5ea;
}

.secondMessageDiv {
  background-color: #ece9e4;
  width: 49%;
  border-style: solid;
}
.secondMSg {
  display: flex;
  justify-content: end;
}
p.msgSecond {
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: -0.40799999237060547px;
}
.secondMessageDiv {
  padding: 20px 18px;
  border-radius: 9px;
}

.reject {
  font-family: Montserrat;
  font-size: 17px;
  padding: 1px 7px;

  font-weight: 700;
  line-height: 30.48px;
  text-align: center;
  border-radius: 12px;
  border: 2px solid black;
}
.accept {
  font-family: Montserrat;
  font-size: 17px;
  padding: 1px 7px;
  font-weight: 700;
  border-radius: 12px;

  line-height: 30.48px;
  text-align: center;
  background: black;
  color: white;
}
.AmountOffered {
  font-family: Montserrat;
  font-size: 25px;
  font-weight: 600;
  line-height: 46.32px;
  text-align: left;
}
.cutOffer {
  font-family: Montserrat;
  font-size: 25px;
  font-weight: 500;
  color: grey;
  text-decoration: line-through;
  line-height: 46.32px;
  text-align: left;
  margin-bottom: 15px;
}

.offeredAmt {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;

  line-height: 26.82px;
  text-align: left;
}
.Euroregular {
  font-family: Montserrat;
  font-size: 30px;
  margin-bottom: 15px;

  font-weight: 600;
  line-height: 36.57px;
  text-align: left;
}
.CAlenderPara {
  font-family: Montserrat;
  font-size: 16px;

  font-weight: 400;
  line-height: 32.91px;
  text-align: left;
}
.LovelandMsgScreen {
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 36.57px;
  text-align: left;
}

.CalenderWithParaSec,
.OneExRegular {
  border-bottom: 1px dotted grey;
  align-items: center;
}
.msgsChatScreen {
  margin: 15px;
  width: 46%;
  border: none;
  /* box-shadow: 2px 2px 2px; */
  border-radius: 9px;
  padding: 20px 18px;
  background: #e5e5ea;
}

.chatScreen {
  width: 70%;
  float: right;
  overflow-y: scroll;

  /* height: 550px; */
}
.ChatOne {
  font-size: 26px;
  font-weight: 500;
  line-height: 58.51px;
  text-align: left;
}
.messageMainScreen.d-flex {
  height: 600px;
}
.chatHeading {
  font-family: Montserrat;
  font-size: 26px;
  font-weight: 700;
  line-height: 58.51px;
  text-align: left;
  padding: 5px 80px;
  border-bottom: 10px solid #bc1818;
  cursor: pointer;
}
.messageHeading {
  font-family: Montserrat;
  font-size: 40px;
  padding: 5px 80px;
  font-weight: 700;
  line-height: 94.5px;
  text-align: left;
}
.hrMsgScreen {
  color: black;
  margin-bottom: 0px !important;
}
.NamemSgScreen {
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: -0.33000001311302185px;
  text-align: left;
}
.offersent,
.dateMsgScreen {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 30.48px;
  letter-spacing: -0.15000000596046448px;
  text-align: left;
  color: #8e8e93;
}
.DateandRightArrow.d-flex {
  align-items: center;
  gap: 17px;
}
.firstChatOption {
  background-color: #e6e5e5;
  justify-content: space-between;
  padding: 14px 15px;
}
.thirdChatOption {
  justify-content: space-between;
  padding: 14px 15px;
}
img.rightarrow {
  width: 12px;
  height: 22px;
}
.chatoption {
  width: 30%;

  /* height: 274px; */
}
.secondChatOption.d-flex {
  justify-content: space-between;
  padding: 3px 15px;
}
img.menMsgScn {
  width: 75px;
  height: 65px;
}
.menImagediv.d-flex {
  align-items: center;
  gap: 15px;
}
@media screen and (min-width: 325px) and (max-width: 1015px) {
  .msgsChatScreen {
    width: 100%;
  }
  .messageMainScreen.d-flex {
    flex-direction: column;
  }
  input[type="text"] {
    width: 100%;
}
  .chatScreen {
    width: 100%;
  }
  .chatoption {
    width: 100%;
    height: 719px;
    /* height: 274px; */
  }
  .thirdmsg {
    width: 100%;
  }
  .secondMessageDiv {
    width: 100%;
  }
}
</style>

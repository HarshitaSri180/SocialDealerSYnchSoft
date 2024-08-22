<template>
  <Banner/>
  <div class=" container ticketsDetails">
    <div class="buttonTicetsDetails">
        <NuxtLink to="/Sellinghub/offerAccepted"> <button class="orderId">
          Standard: T3289273
      </button></NuxtLink></div>
      <p class="OfferReceived">Offer Received: <span class="clickTorespond">Click to Respond</span></p>
     
    <p class="TicketsListings">Ticket Details</p>
   
    <hr />
    <!-- cards starts here -->

<div class="TicketsDetailsEdit d-flex items-center">
  <p class="PriceClass">Price: £9.54</p>
  <p class="Edit">Edit</p>
</div>
<div class="AdditionalInfo d-flex">
  <P class="PriceClass">Additional Info</P>
  <p class="Edit">Edit</p>
</div>
    <!-- cards ends here -->
    <!-- uploaded tickets starts here -->
    <p class="TicketsListings">Uploaded Ticket</p>
    <hr />
    <div class="pdfUpload">
      <div class="imgPdf">
        <img class="imgPdfPng" src="@/assets/images/pdf.png">
      </div>
      <div class="pdfPara">
        <p class="TIketId">TicketID_3289273.pdf</p>
        <p class="UPloadedPdf">Uploaded on 21 July 2022</p>
      </div>
      <div class="shareImages d-flex">
        <img   class="ShareDownload" src="@/assets/images/Share.png">
        <img  class="ShareDownload" src="@/assets/images/Download.png">
      </div>
    </div>

   <!-- additional support -->
   <p class="TicketsListings">Additional Support</p>
   <hr />
   <p class="IssueTicket">Issue with ticket uploaded or need help?</p>
   <button class="ContactUs">Contact Us</button>
   <p class="YourListing">Your listing will be paused in the meantime</p>
  
  </div>
</template>
<script setup>
import Banner from '~/components/Events/Banner.vue';
</script>
<style scoped>
.OfferReceived{
  font-family: Montserrat;
font-size: 30px;
font-weight: 600;
line-height: 27.5px;
text-align: center;


}
.clickTorespond{
  color: #E8550D;
  font-family: Montserrat;
font-size: 30px;
font-weight: 600;
line-height: 27.5px;
text-align: center;



}
  
  .YourListing{
    font-family: Montserrat;
    font-size: 16px;
    margin-bottom: 82px;
    font-weight: 400;
    line-height: 30.48px;
    text-align: center;
}
.IssueTicket{
  font-family: Montserrat;
font-size: 23px;
font-weight: 600;
line-height: 77.76px;
text-align: center;


}
.ContactUs{
 

 
 border-radius: 17px;
 padding: 11px 15px;
 height: 25%;
 
 justify-content: center;
 display: flex;
 margin: 25px auto;
 gap: 0px;
 width:19%;
 
 background-color: #e8550d;
 font-family: Montserrat;
 font-size: 21px;
 color: white;
 font-weight: 500;
 line-height: 27.5px;
 text-align: center;
 
 }
.UPloadedPdf{
  font-family: Montserrat;
font-size: 21px;
font-weight: 400;
line-height: 36.57px;
text-align: left;

}
.PriceClass{
  font-family: Montserrat;
font-size: 30px;
font-weight: 600;
line-height: 27.5px;
text-align: left;

}
.TIketId{
  font-family: Montserrat;
font-size: 26px;
font-weight: 600;
line-height: 48.76px;
text-align: left;

}
.Edit{
  font-family: Montserrat;
font-size: 15px;
font-weight: 600;
line-height: 27.5px;
text-align: left;
color: #E8550D;


}

.ticketsDetails{
  max-width: 1400px;
}
.AdditionalInfo.d-flex{
  border: 1px solid black;
  border-radius: 15px;
  height: 141px;

    justify-content: space-between;
    max-width: 48%;
    margin:33px auto;
    padding: 21px 50px;
}
.TicketsDetailsEdit.d-flex.items-center{
    border: 1px solid black;
    border-radius: 15px;
    justify-content: space-between;
    max-width: 48%;
    margin:33px auto;
    padding: 14px 39px;
}
.pdfUpload {
    margin: 31px auto;
    padding: 4px 9px;
    align-items: center;
    width: 41%;
    display: flex;
    justify-content: space-between;
    gap: 62px;
    border: 1px solid black;
    /* border: 1px solid brown; */
    border-radius: 9px;
}
img.ShareDownload {
    width: 40px;
    height: 49px;
}
img.imgPdfPng {
    width: 56px;
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
  font-size: 20px;
  color: rgb(0, 0, 0);
  font-weight: 500;
  line-height: 27.5px;
  text-align: center;
 border: 1px solid grey;
 
 
 
 }

 .TicketsListings {
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 600;
  line-height: 83.5px;
  text-align: left;
}
@media screen and (min-width:325px) and (max-width:700px){
  .ContactUs{
    width:100%}
    .pdfUpload {
    gap: 0px;
   
    padding: 4px 9px;
    
    width: 100%;
   
    }
    .AdditionalInfo.d-flex {
  
    justify-content: space-between;
    max-width: 100%;
    }
    .TicketsDetailsEdit.d-flex.items-center {
   
    max-width: 100%;
    
    }
    .shareImages{
      flex-direction: column;
    }
    .UPloadedPdf {
  
    font-size: 19px;
  
    line-height: 30.57px;
    }
    .TIketId{
    font-family: Montserrat;
    font-size: 20px;
    }

}
</style>
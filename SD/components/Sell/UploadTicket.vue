<template>
  <div class="containerSeventeen container">
    <button class="StandardTicket">
      {{ selectedTicketType ? selectedTicketType.ticket_type : 'Standard Ticket' }}
    </button>
    <p class="howmanyTIcketsWannaSell">How many tickets would you like to sell?</p>
    <div class="plusMinusButton d-flex">
      <button class="minus" @click="decrementTicket">-</button>
      <p class="minusText">{{ ticketCount }}</p>
      <button class="plus" @click="incrementTicket">+</button>
    </div>
    <p class="originalpriceticket">
      Original Ticket Price
    </p>
    <p class="pricehundred">£{{ originalPrice }}</p>
    <div class="sellinPrizeBelow">
      The selling price must be at, or below:
      <span class="originalTicketPriceSpan">Original Ticket Price + 20% Price Cap</span>
    </div>
    <div class="seelingPriceCards mx-auto">
      <p class="additionalInfo">Selling Price</p>
      <input v-model="sellingPrice" type="number" class="EuroHundred" :max="maxSellingPrice" />
    </div>
    <p class="rememberTickets">
      Remember, tickets sold closer to the original ticket price earn sellers more points!
    </p>
    <hr />
    <p class="uploadTicketPdfheadding">Upload Ticket PDF</p>
    <p class="sellinPrizeBelow">
      If your original file contains multiple tickets make sure to upload all of them, and we will let you select the
      ones you want to sell.
    </p>
    <div class="uploadFileIcon" @dragover.prevent @drop.prevent="handleFileDrop" @click="triggerFileInput">
      <input type="file" id="file-input" ref="fileInput" style="display: none;" @change="handleFileUpload"
        accept=".pdf">
      <div v-if="!selectedFile" class="upload-placeholder">
        <img class="paperUpload" src="assets/images/Paper-Upload.png" alt="Upload">
        <p>Drag and drop your PDF here or click to select</p>
      </div>
      <div v-else class="selected-file">
        <p>{{ selectedFile.name }}</p>
        <button @click.stop="removeFile">Remove</button>
      </div>
    </div>
    <div class="AdditionalInfoPara">
      <p class="additionalInfo">Additional Info</p>
      <textarea v-if="isEditingAdditionalInfo" v-model="additionalInfo" rows="3" class="form-control"></textarea>
      <p v-else>{{ additionalInfo }}</p>
      <button class="EditPara" @click="toggleAdditionalInfoEdit">
        {{ isEditingAdditionalInfo ? 'Save' : 'Edit' }}
      </button>
    </div>

    <button class="buttonStyle" @click="continueHandler">Continue</button>
  </div>
</template>

<script setup>
import { defineProps, ref, computed } from 'vue';
import { useTicketStore } from '~/store/ticketStore';
import { useRouter } from 'vue-router';
const { $notyf } = useNuxtApp();
const ticketStore = useTicketStore();
const router = useRouter();

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
  selectedData: {
    type: Object,
    required: true,
  },
});
const ticketCount = ref(1);
const originalPrice = ref(100); 
const sellingPrice = ref(100);
const additionalInfo = ref('');
const isEditingAdditionalInfo = ref(false);

const selectedTicketType = computed(() => {
  console.log(props.selectedData);
  if (props.event && props.event.ticket_types && props.selectedData && props.selectedData.ticketTypeId) {
    return props.event.ticket_types.find(type => type.id === props.selectedData.ticketTypeId);
  }
  return null;
});

const maxSellingPrice = computed(() => {
  return originalPrice.value * 1.2; // 20% above original price
});

const incrementTicket = () => {
  ticketCount.value++;
};

const decrementTicket = () => {
  if (ticketCount.value > 1) {
    ticketCount.value--;
  }
};

const fileInput = ref(null);
const selectedFile = ref(null);

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file && file.type === 'application/pdf') {
    selectedFile.value = file;
    console.log('Uploaded file:', file);
  } else {
    $notyf.error('Please select a PDF file.');
   
  }
};

const handleFileDrop = (event) => {
  const file = event.dataTransfer.files[0];
  if (file && file.type === 'application/pdf') {
    selectedFile.value = file;
    console.log('Dropped file:', file);
  } else {
    alert('Please drop a PDF file.');
  }
};

const triggerFileInput = () => {
  fileInput.value.click();
};

const removeFile = () => {
  selectedFile.value = null;
  if (fileInput.value) {
    fileInput.value.value = '';
  }
};

const toggleAdditionalInfoEdit = () => {
  isEditingAdditionalInfo.value = !isEditingAdditionalInfo.value;
};

const continueHandler = async () => {
  if (props.selectedData.selectedTicketType === 'normal' && !selectedFile.value) {
    $notyf.error('Please upload the ticket PDF for normal tickets.');
    return;
  }

  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    router.push('/auth/login');
    return;
  }

  try {
    const formData = new FormData();
    formData.append('event_id', props.event.id);
    formData.append('ticket_type_id', selectedTicketType.value.id);
    formData.append('ticket_count', ticketCount.value);
    formData.append('selling_price', sellingPrice.value);
    formData.append('additional_info', additionalInfo.value);
    if (selectedFile.value) {
      formData.append('ticket_pdf', selectedFile.value);
    }

    await ticketStore.addTicket(formData);
    console.log('Ticket added successfully:', response.data);
    $notyf.success('Ticket added successfully!');
  } catch (error) {
    if (error.message === 'User is not authenticated.') {
      router.push('/auth/login');
    } else {
      $notyf.error('Failed to add ticket. Please try again.');
    }

   

  }
};
</script>




<style scoped>
/* Add these new styles */

.EuroHundred {
  font-family: Montserrat;
  font-size: 25px;
  font-weight: 600;
  line-height: 30.95px;
  text-align: left;
  background: transparent;
  /* border-bottom:1px solid rgb(206, 206, 206); */
}

.EditPara {
  font-family: Montserrat;
  font-size: 19px;
  font-weight: 600;
  line-height: 27.5px;
  text-align: left;
  color: #E8550D;
}

.additionalInfo {
  font-family: Montserrat;
  font-size: 19px;
  font-weight: 400;
  line-height: 40.76px;
  text-align: left;
}

.rememberTickets {
  margin-bottom: 34px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  /* line-height: 20.48px; */
  text-align: center;
}

.seelingPriceCards {
  width: 50%;
  margin: 15px auto;
  border: 1px solid rgb(158, 158, 158);
  padding: 17px 22px;
  border-radius: 9px;
}

.originalTicketPriceSpan {
  font-family: Montserrat;
  font-size: 19px;
  font-weight: 600;
  line-height: 73.88px;
  text-align: left;
}

.sellinPrizeBelow {
  font-family: Montserrat;
  font-size: 19px;
  font-weight: 400;
  line-height: 43.88px;
  text-align: left;
}

.pricehundred {
  font-family: Montserrat;
  font-size: 25px;
  font-weight: 600;
  line-height: 29.95px;
  text-align: left;
  color: #BC1818;
}

.originalpriceticket,
.uploadTicketPdfheadding {
  font-family: Montserrat;
  font-size: 25px;
  font-weight: 600;
  line-height: 60.95px;
  text-align: left;
}

.AdditionalInfoPara {
  width: 50%;
  margin: 65px auto;
  border: 1px solid rgb(8, 8, 8);
  display: flex;
  height: 110px;
  align-items: baseline;
  justify-content: space-between;
  padding: 20px 22px;
  border-radius: 9px;
}

.uploadFileIcon {
  width: 50%;
  margin: 65px auto;
  border: 1px dotted rgb(158, 158, 158);
  justify-content: center;
  display: flex;
  padding: 37px 22px;
  border-radius: 9px;
}

img.paperUpload {
  display: flex;
  width: 45px;
  margin: 0px auto;
  /* justify-content: center; */
}



button.StandardTicket {
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

button.plus {
  border-radius: 4px;
  font-weight: 600;
  font-size: 22px;
  border: 1px solid #000000;
  padding: 0px 11px;
}

.minusText {
  font-weight: 600;
  font-size: 22px;
  padding: 0px 11px;
}

button.minus {
  border-radius: 4px;
  font-weight: 600;
  font-size: 22px;
  border: 1px solid #8f8282;
  padding: 0px 11px;
}

.plusMinusButton.d-flex {
  margin: 32px 0px;
  gap: 14px;
}

.howmanyTIcketsWannaSell {
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 500;
  line-height: 27.5px;
  text-align: left;
}

.buttonStyle {
  width: 25%;
  border-radius: 8px;
  padding: 19px 15px;
  height: 25%;
  justify-content: center;
  display: flex;
  margin: 45px auto;
  gap: 0px;
  background-color: #e8550d;
  font-family: Montserrat;
  font-size: 20px;
  color: white;
  font-weight: 600;
  line-height: 27.5px;
  text-align: center;
}

@media screen and (min-width:315px) and (max-width:765px) {
  .uploadFileIcon {
    width: 100%;
    border: 2px dotted rgb(158, 158, 158);
  }

  .AdditionalInfoPara {
    width: 100%;
  }
}
</style>

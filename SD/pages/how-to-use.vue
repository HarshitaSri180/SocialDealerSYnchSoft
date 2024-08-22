<script lang="ts" setup>
definePageMeta({

});

const currentUser = useAuthUser();

async function onLoginSuccess() {
  const redirect = "/home";
  await navigateTo(redirect);
}
</script>

<template>
  <div class="card card-body m-5 p-5">
    <h1 class="display-4">How to use Stellar Fate App.</h1>
    <p class="display-5">Last updated: October 20, 2023</p>

    <h1 class="display-4 my-3 ">1. Download the App from the Stores</h1>


    <h1 class="display-4 my-3 ">2. Create an account in the app</h1>

    <h1 class="display-4 my-3 ">3. Click on Stella Bot for Chatting</h1>

    <h1 class="display-4 my-3 ">4. Ask as many questions you like ...</h1>

    <h1 class="display-4 my-3 ">It's That Simple... </h1>




  </div>
</template>

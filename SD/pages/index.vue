<template>
  <!-- banner starts here -->

<common-nav-bar/>

 <hero/>
 <suggestedEvent/>
 <getPersonal/>
 <popularEvent/>
 <fourButton/>
 <DiscoverMoreEvent/>
    <!-- banner ends here -->

</template>

<script setup>
import hero from '~/components/landing/hero.vue';
import suggestedEvent from '~/pages/suggestedEvent.vue';
import getPersonal from '~/pages/getPersonal.vue';
import popularEvent from '~/pages/popularEvent.vue';
import fourButton from '~/pages/fourButton.vue';
import DiscoverMoreEvent from '~/pages/DiscoverMoreEvent.vue';
</script>

<style scoped>

</style>
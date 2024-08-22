<script lang="ts" setup>
defineProps<{ to: string }>();
</script>

<template>
  <NuxtLink :to="to" class="btn btn-outline-primary">
    <slot/>
  </NuxtLink>
</template>

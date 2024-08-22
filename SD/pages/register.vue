<script lang="ts" setup>
definePageMeta({
    middleware: ["guest-only"],
});

const currentUser = useAuthUser();

async function onRegisterSuccess() {
    const redirect = "/home";
    await navigateTo(redirect);
}
</script>

<template>
    <div class="m-4">
        <auth-register @success="onRegisterSuccess" />
    </div>
</template>

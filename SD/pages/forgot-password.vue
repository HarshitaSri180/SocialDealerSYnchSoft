<script lang="ts" setup>
definePageMeta({
    middleware: ["guest-only"],
});

const currentUser = useAuthUser();

async function onLoginSuccess() {
    const redirect = "/home";
    await navigateTo(redirect);
}
</script>

<template>
    <div class="m-4">
        <auth-login @success="onLoginSuccess" />
    </div>
</template>

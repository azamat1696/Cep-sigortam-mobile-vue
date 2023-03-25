<template>
    <q-layout view="lHh Lpr lFf">
        <q-page-container>
          <q-transition name="fadeIn">
            <router-view />
          </q-transition>
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
    name: "AuthLayout",
};
</script>

<style scoped></style>

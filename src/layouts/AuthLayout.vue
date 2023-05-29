<template>
    <q-layout view="lHh Lpr lFf">
 <DrawerComponent/>
        <q-page-container>
          <q-transition name="fadeIn">
            <router-view />
          </q-transition>
        </q-page-container>
    </q-layout>
</template>

<script lang="ts">
import { ref } from "vue";
 import {useI18n} from "vue-i18n";
import {useAuthStore} from "stores/auth-store";
import {storeToRefs} from "pinia";
import DrawerComponent from "components/DrawerComponent.vue";
 export default {
    name: "AuthLayout",
     components: {DrawerComponent},

};
</script>

<style scoped></style>

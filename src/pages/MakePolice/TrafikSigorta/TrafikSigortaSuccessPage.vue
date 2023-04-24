<template>
    <transition-group
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeIn"
    >
    <div key="trafikSuccess" class="fullscreen flex flex-center no-padding">
        <q-card
            class="no-shadow transparent"
            style="height: auto; min-width: 370px; margin-top: 130px"
        >
            <q-card-section class="q-pb-lg">
                <div class="text-center">
                    <q-icon
                        name="done"
                        class="bg-primary q-pa-lg"
                        color="white"
                        size="lg"
                        style="border-radius: 50%"
                    />
                </div>
            </q-card-section>
            <q-card-section class="q-pt-xs">
                <div class="q-pt-xs q-pb-md">
                    <div
                        class="text-subtitle1 q-pb-xl q-pl-md q-pr-md text-center"
                        style="color: #5e5e5e"
                    >
                        {{$t('motor_offer_success2')}}
                    </div>
                    <div class="text-center ">
         
                        {{$t('motor_offer_success_pdf')}}

                    </div>
                </div>
            </q-card-section>
            <q-card-section class="text-center" >
                <q-btn color="primary" no-caps :to="{ name: `${authToken ? 'homeLogin':'home'}` }"
                    >{{$t('home_page')}}</q-btn
                >
            </q-card-section>
        </q-card>
    </div>
    </transition-group>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import {useAuthStore} from "stores/auth-store";
import {storeToRefs} from "pinia";
const authStore = useAuthStore();
const { user,authToken } = storeToRefs(authStore);
const router = useRouter();
// setTimeout(() => {
//    authToken.value ? router.push({ name: "homeLogin" }) : router.push({ name: "home" });
// }, 5000);
//
// let show = ref(false);
// setTimeout(() => {
//     show.value = true;
// }, 6000);
</script>

<style scoped></style>

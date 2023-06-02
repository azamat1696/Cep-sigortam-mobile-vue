<template>
    <transition-group
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeIn"

    >
    <q-layout key="teklifal" view="lHh Lpr lFf">
        <q-header reveal elevated>
            <q-toolbar>
                <q-avatar size="sm">
                    <q-icon
                        name="chevron_left"
                        @click="$router.push({ name: 'homeLogin'})"
                        size="md"
                        class="cursor-pointer"
                    />
                </q-avatar>
                <q-toolbar-title class="text-subtitle2 text-bold text-center"
                    >{{$t('get_a_quote')}}</q-toolbar-title
                >
            </q-toolbar>
        </q-header>
        <q-page-container>
            <q-list>
<!--                <q-item clickable class="q-pa-lg" :to="{name: 'TrafikSigortaRegister'}">-->
<!--                    <q-item-section avatar>-->
<!--                        <img-->
<!--                            src="~assets/car.png"-->
<!--                            style="-->
<!--                                width: 24px;-->
<!--                                height: 24px;-->
<!--                                object-fit: contain;-->
<!--                            "-->
<!--                        />-->
<!--                    </q-item-section>-->
<!--                    <q-item-section>-->
<!--                        <q-item-label>{{$t('motor_insurance')}}</q-item-label>-->
<!--                    </q-item-section>-->
<!--                </q-item>-->
                <q-separator inset />
                <q-item clickable class="q-pa-lg" :to="{ name: 'kaskoRegister' }">
                    <q-item-section avatar>
                        <q-img
                            src="~assets/umbrella.png"
                            style="
                                width: 24px;
                                height: 24px;
                                object-fit: contain;
                            "
                        />
                    </q-item-section>

                    <q-item-section>
                        <q-item-label>{{$t('home_insurance_kasko')}}</q-item-label>
                    </q-item-section>
                </q-item>
                <q-separator inset />
                <q-item clickable class="q-pa-lg" :to="{name:'KonutRegister'}">
                    <q-item-section avatar>
                        <q-img
                            src="~assets/cottage.png"
                            style="
                                width: 24px;
                                height: 24px;
                                object-fit: contain;
                            "
                        />
                    </q-item-section>

                    <q-item-section>
                        <q-item-label>{{$t('home_insurance')}}</q-item-label>
                    </q-item-section>
                </q-item>

                <q-separator inset />
<!--                <q-item clickable class="q-pa-lg" :to="{name:'FerdiKazaRegister'}">-->
<!--                    <q-item-section avatar>-->
<!--                        <img-->
<!--                            src="~assets/car_crash.png"-->
<!--                            style="-->
<!--                                width: 26px;-->
<!--                                height: 26px;-->
<!--                                object-fit: contain;-->
<!--                            "-->
<!--                        />-->
<!--                    </q-item-section>-->
<!--                    <q-item-section>-->
<!--                        <q-item-label>{{$t('personel_accident_insurance')}}</q-item-label>-->
<!--                    </q-item-section>-->
<!--                </q-item>-->
            </q-list>
        </q-page-container>
    </q-layout>
    </transition-group>
</template>

<script lang="ts" setup>
import {onMounted} from "vue";
import {useMainStore} from "stores/main-store";
import { useQuasar } from 'quasar'
const $q = useQuasar()
const mainStore = useMainStore();
const {
    countriesGet: countriesGet,
    ilGet: ilGet,
    ilceSelectGet: ilceSelectGet,
    belediyeSelectGet: belediyeSelectGet,
    mahalleSelectGet: mahalleSelectGet,
    sokakSelectGet: sokakSelectGet,
    agentGet: agentGet,
    getJobs: getJobs,
    aracMarkaGet: aracMarkaGet,
    aracModelSelectGet: aracModelSelectGet,
    renkGet: renkGet,
    aracTipiGet: aracTipiGet
} = mainStore;

onMounted( () => {
    getJobs();
    countriesGet();
    ilGet();
    ilceSelectGet();
    belediyeSelectGet();
    mahalleSelectGet();
    sokakSelectGet();
    agentGet();
    aracMarkaGet();
    aracModelSelectGet();
    renkGet();
    aracTipiGet();
});
</script>

<style scoped></style>

<template>
    <transition-group
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeIn"
    >
    <q-page
        key="home"
        class="row items-top justify-evenly"
    >
        <q-card class="my-card no-shadow full-width" style="border-radius: 0px">
            <div class="pickgradient">
                <img src="~assets/home_page.png" />
                <div class="centeredUp">{{locale === 'tr'?greetingsLang.tr:greetingsLang.en}}</div>
                <div class="centeredDown no-wrap">Cep Sigortam'a {{$t('welcome_to')}} </div>
            </div>
            <q-list>
                <q-item clickable>
                    <q-item-section avatar>
                        <div
                            class="text-subtitle1 text-body2"
                            style="color: #5e5e5e"
                        >
                           {{$t('home_text')}}
                            <br />
                            <br />
                            {{$t('home_text2')}}
                        </div>
                    </q-item-section>
                </q-item>

                <q-separator inset />
                <q-item
                    clickable
                    class="q-pa-lg"
                    :to="{ name: 'TrafikSigortaRegister' }"
                >
                    <q-item-section avatar>
                        <img
                            src="~assets/car.png"
                            style="
                                width: 24px;
                                height: 24px;
                                object-fit: contain;
                            "
                        />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>{{$t('motor_insurance')}}</q-item-label>
                    </q-item-section>
                </q-item>

                <q-separator inset />
                <q-item
                    clickable
                    class="q-pa-lg"
                    :to="{ name: 'kaskoRegister' }"
                >
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
                <q-item
                    clickable
                    class="q-pa-lg"
                    :to="{ name: 'KonutRegister' }"
                >
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
                <q-item
                    clickable
                    class="q-pa-lg"
                    :to="{ name: 'FerdiKazaRegister' }"
                >
                    <q-item-section avatar>
                        <img
                            src="~assets/car_crash.png"
                            style="
                                width: 26px;
                                height: 26px;
                                object-fit: contain;
                            "
                        />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>{{$t('personel_accident_insurance')}}</q-item-label>
                    </q-item-section>
                </q-item>
                <div class="q-pa-md">
                    <q-btn
                        color="primary"
                        text-color="white"
                        :label="$t('login')"
                        no-caps
                        class="full-width"
                        style="border-radius: 8px"
                        size="20px"
                        :to="{ name: 'loginPage' }"
                    />
                </div>
            </q-list>
        </q-card>
    </q-page>
    </transition-group>
</template>
<!--to="/auth/login"-->
<script lang="ts" setup>
import {onMounted} from "vue";
import {useMainStore} from "stores/main-store";
import {useAuthStore} from "stores/auth-store";
import {storeToRefs} from "pinia";
import {useI18n} from "vue-i18n";
const { locale } = useI18n();

const authStore = useAuthStore();
const {greetingsLang} = storeToRefs(authStore);

const mainStore = useMainStore();
const {
    countriesGet: countriesGet,
    ilGet: ilGet,
    ilceSelectGet: ilceSelectGet,
    belediyeSelectGet: belediyeSelectGet,
    mahalleSelectGet: mahalleSelectGet,
    sokakSelectGet: sokakSelectGet,
    agentGet: agentGet,
    getJobs: getJobs
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

});




</script>
<style>
.pickgradient {
    position: relative;
    display: inline-block;
}
.pickgradient:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    background: linear-gradient(
        90deg,
        rgba(23, 23, 23, 0.92) 6.07%,
        rgba(0, 0, 0, 0) 102.16%
    );
}

.pickgradient > img {
    display: block;
    height: 100%;
    width: 100%;
}
.centeredUp {
    position: absolute;
    z-index: 9;
    left: 4.92%;
    right: 72.6%;
    top: 45.08%;
    bottom: 40.98%;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    letter-spacing: -0.04em;
    color: #ffffff;
    text-shadow: 0px 50px 50px rgba(0, 0, 0, 0.25);
    width: max-content;
}
.centeredDown {
    position: absolute;
    z-index: 9;
    left: 4.92%;
    right: 44.09%;
    top: 62.3%;
    bottom: 19.67%;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    letter-spacing: -0.04em;
    color: #ffffff;
    text-shadow: 0px 50px 20px rgba(0, 0, 0, 0.25);
}
</style>

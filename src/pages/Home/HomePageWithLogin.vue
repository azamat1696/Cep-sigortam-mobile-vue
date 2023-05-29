<template>
    <transition-group
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeIn"
    >
     <q-page
        key="home-login"
        class="row items-top justify-evenly"
    >
        <q-card class="my-card no-shadow full-width" style="border-radius: 0px">
            <div class="pickgradient">
                <img src="~assets/home_page.png" width="100%"/>
                <div class="centeredUp">{{locale === 'tr'? greetingsLang.tr:greetingsLang.en}}</div>
                <div class="centeredDown">{{logedInUser.name +' '+logedInUser.surname}} </div>
            </div>
            <q-list>
                <q-item clickable class="q-pa-lg" :to="{ name: 'showPolice' }">
                    <q-item-section avatar>
                        <q-img
                            src="~assets/paper.png"
                            style="
                                width: 24px;
                                height: 24px;
                                object-fit: contain;
                            "
                        />
                    </q-item-section>

                    <q-item-section no-wrap>
                        <q-item-label
                            >{{$t('commercial_papers')}}
                            <q-chip
                                style="background-color: #eaf5fe; width: 60px"
                                size="sm"
                                >{{ policy.length }} {{$t('commercial_paper')}}</q-chip
                            ></q-item-label
                        >
                    </q-item-section>
                    <q-item-section> </q-item-section>

                    <q-item-section>
                        <q-icon
                            name="chevron_right"
                            size="md"
                            style="margin-left: auto"
                        />
                    </q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable :to="{ name: 'showDamage' }" class="q-pa-lg">
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

                    <q-item-section no-wrap>
                        <q-item-label
                            >{{$t('show_damage')}}
                            <q-chip
                                style="background-color: #eaf5fe; width: 55px"
                                size="sm"
                                >{{hasarPolicy?.length}} {{$t('damage')}}</q-chip
                            ></q-item-label
                        >
                    </q-item-section>
                    <q-item-section> </q-item-section>

                    <q-item-section>
                        <q-icon
                            name="chevron_right"
                            size="md"
                            style="margin-left: auto"
                        />
                    </q-item-section>
                </q-item>
                <q-separator />

                <q-separator />
                <q-item clickable class="q-pa-lg" :to="{name: 'TrafikSigortaCreate'}">
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
                        <q-item-label
                            >{{$t('motor_insurance_commercial_paper_create')}}</q-item-label
                        >
                    </q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable class="q-pa-lg" :to="{name: 'FerdiKazaCreate'}">
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
                        <q-item-label
                            >{{$t('personel_accident_insurance_commercial_paper_create')}}</q-item-label
                        >
                    </q-item-section>
                </q-item>
                <div class="q-pa-md">
                    <q-btn
                        color="primary"
                        text-color="white"
                        :label="$t('get_a_quote')"
                        no-caps
                        class="full-width"
                        style="border-radius: 8px"
                        size="20px"
                        :to="{ name: 'teklifAl' }"
                    />
                </div>
                <q-item
                    clickable
                    class="q-pa-lg"
                    :to="{ name: 'showServices' }"
                >
                    <q-item-section avatar>
                        <img
                            src="~assets/cracked_car.png"
                            style="
                                width: 26px;
                                height: 26px;
                                object-fit: contain;
                            "
                        />
                    </q-item-section>
                    <q-item-section no-wrap>
                        <q-item-label>{{$t('agreed_motor_services')}}</q-item-label>
                    </q-item-section>

                    <q-item-section>
                        <q-icon
                            name="chevron_right"
                            size="md"
                            style="margin-left: auto"
                        />
                    </q-item-section>
                </q-item>
            </q-list>
        </q-card>
    </q-page>
     </transition-group>
</template>
<!--to="/auth/login"-->
<script lang="ts" setup>
import {onMounted, ref} from "vue";
import { useAuthStore} from "stores/auth-store";
import { storeToRefs} from "pinia";
import {useMainStore} from "stores/main-store";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const authStore = useAuthStore();
const { logedInUser,policy,hasarPolicy,greetingsLang} = storeToRefs(authStore);
const { getAllPolicy,getHasarPolicy } = authStore
const {
    countriesGet: countriesGet,
    ilGet: ilGet,
    ilceSelectGet: ilceSelectGet,
    belediyeSelectGet: belediyeSelectGet,
    mahalleSelectGet: mahalleSelectGet,
    sokakSelectGet: sokakSelectGet,
    agentGet: agentGet,
    getJobs: getJobs,
    aracModelSelectGet: aracModelSelectGet,
    aracTipiGet: aracTipiGet,
    renkGet: renkGet,
    aracMarkaGet: aracMarkaGet,
} = useMainStore();

onMounted(() => {
    getAllPolicy();
    getHasarPolicy();
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
    aracTipiGet()
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
    height: 115px;
    width: 100%;
    margin-left: 15px;
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

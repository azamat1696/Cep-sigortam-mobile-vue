<template>
    <div class="q-pa-md row">
        <div class="col-12 text-center" >
            <img src="/nesuygulamaikon.svg" alt="" height="100" width="160" />
            <!--             <div class="text-h5 text-primary text-custom-1">CEP SIGORTA</div>-->
            <!--             <div class="text-h5 text-primary text-custom-2">Sizin İçin Çalışır O</div>-->
        </div>
        <div class="col-12">

            <q-carousel
                animated
                v-model="slide"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                navigation
                infinite
                autoplay
            >
                <template v-slot:navigation-icon="{ active, btnProps, onClick }">
                    <q-btn
                        v-if="active"
                        size="md"
                        icon="radio_button_checked"
                        color="primary"
                        flat
                        round
                        dense
                        @click="onClick"
                    />
                    <q-btn
                        v-else
                        size="md"
                        icon="radio_button_unchecked"
                        color="white"
                        flat
                        round
                        text-color="grey-5"
                        dense
                        @click="onClick"
                    />

                </template>

                <q-carousel-slide :name="1" >
                    <div class="q-card--bordered rounded-borders q-pa-md" style="border-radius: 9px">
                        <div >
                            <q-img  src="/slides/slide1.png"/>
                        </div>
                        <div >
                            <div class="slider_text q-pt-md">
                                {{$t('slider_text1')}}
                            </div>
                        </div>
                    </div>

                </q-carousel-slide>
                <q-carousel-slide :name="2" >
                    <div class="q-card--bordered rounded-borders q-pa-md" style="border-radius: 9px">
                        <div >
                            <q-img  src="/slides/slide2.png"/>
                        </div>
                        <div >
                            <div class="slider_text q-pt-md">
                                {{$t('slider_text2')}}
                            </div>
                        </div>
                    </div>

                </q-carousel-slide>
                <q-carousel-slide :name="3">
                    <div class="q-card--bordered rounded-borders q-pa-md" style="border-radius: 9px">
                        <div >
                            <q-img  src="/slides/slide3.png"/>
                        </div>
                        <div >
                            <div class="slider_text q-pt-md">
                                {{$t('slider_text3')}}
                            </div>
                        </div>
                    </div>

                </q-carousel-slide>
            </q-carousel>

        </div>

    </div>
    <div class="q-pa-lg row">
        <div class="col-12">
            <q-btn no-wrap no-caps unelevated :to="{name:'homeLogin'}" v-if="authToken">
                <div class="text-subtitle1 text-weight-bold text-grey-7">{{$t('skip')}} <q-icon size="sm" name="chevron_right" /></div>
            </q-btn>
            <q-btn no-wrap no-caps unelevated :to="{name:'home'}" v-else>
                <div class="text-subtitle1 text-weight-bold text-grey-7">{{$t('skip')}}  <q-icon size="sm" name="chevron_right" /></div>
            </q-btn>
        </div>
    </div>


</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {storeToRefs} from "pinia";
import {useAuthStore} from "stores/auth-store";

const {user,authToken} = storeToRefs(useAuthStore())
 const slide = ref(1)

</script>

<style scoped>
.text-custom-2 {
    font-family: Reklame, Script;
    weight: 700;
    size: 40px;
    line-height: 38px;
    transform: rotate(-3deg);

}
.text-custom-1 {
    font-family: Montserrat;
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: center;
}
.slider_text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    /* or 143% */

    text-align: center;
    letter-spacing: 0.0025em;

    color: #5E5E5E;


}
</style>

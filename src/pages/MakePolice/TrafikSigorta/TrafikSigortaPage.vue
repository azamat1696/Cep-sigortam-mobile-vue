<!--suppress ALL -->
<template>
    <transition-group
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeIn"
    >
    <q-layout key="trafik" view="lHh Lpr lFf">
        <q-header reveal elevated>
            <q-toolbar>
                <q-avatar size="sm">
                    <q-icon
                        name="chevron_left"
                        @click="$router.push({ name: 'homeLogin' })"
                        size="md"
                        class="cursor-pointer"
                    />
                </q-avatar>
                <q-toolbar-title class="text-subtitle2 text-bold text-center"
                    >{{$t('motor')}}</q-toolbar-title
                >
            </q-toolbar>
        </q-header>
        <q-page-container>
            <div class="q-pt-xl">
                <q-stepper
                    v-model="step"
                    header-nav
                    ref="stepper"
                    color="primary"
                    active-icon="none"
                     animated
                    class="no-shadow"
                    header-class="no-border"
                >
                    <q-step
                        :name="1"
                        :prefix="1"
                        title=""
                        :done="step > 1"
                        :header-nav="step > 1"
                        class="q-pt-none"
                    >
                        <q-form @submit="onNextStep" class="q-gutter-md">
                            <q-input
                                dense
                                outlined
                                v-model="formFields.KullaniciAdi"
                                :label="$t('name')"
                                hide-bottom-space
                                readonly
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        $t('required'),
                                ]"
                            />
                            <q-input
                                dense
                                outlined
                                v-model="formFields.KullaniciSoyAdi"
                                :label="$t('surname')"
                                readonly
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        $t('required'),
                                ]"
                            />
                            <q-input
                                dense
                                outlined
                                v-model="formFields.MusteriTcKimlikNo"
                                :label="$t('identity_no')"
                                hide-bottom-space
                                readonly
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        $t('required'),
                                ]"
                            />

                            <q-input
                                v-model="formFields.MusteriDogumTarihi"
                                outlined
                                dense
                                readonly
                                hide-bottom-space
                                :label="$t('birth_date')"
                            >
                                <template v-slot:append>
                                    <q-icon name="event" class="cursor-pointer">
                                        <q-popup-proxy
                                            cover
                                            transition-show="scale"
                                            transition-hide="scale"
                                        >
                                            <q-date
                                                v-model="
                                                    formFields.MusteriDogumTarihi
                                                "
                                                mask="DD/MM/YYYY"
                                            >
                                                <div
                                                    class="row items-center justify-end"
                                                >
                                                    <q-btn
                                                        v-close-popup
                                                        :label="$t('close')"
                                                        color="primary"
                                                        flat
                                                    />
                                                </div>
                                            </q-date>
                                        </q-popup-proxy>
                                    </q-icon>
                                </template>
                            </q-input>
                            <div class="row no-wrap justify-between">
                                <div class="col-3 q-my-auto">
                                    <label class="text-no-wrap text-center"
                                        >{{$t('license_plate_no')}}</label
                                    >
                                </div>
                                <div class="col-9 row">
                                    <div class="col-6">
                                        <q-input
                                            dense
                                            outlined
                                            v-model="formFields.AracPlaka1"
                                            hide-bottom-space
                                            lazy-rules
                                            @input="
                                                (v) => {
                                                    console.log(v);
                                                }
                                            "
                                            :rules="[
                                                (val) =>
                                                    (val && val.length > 0) ||
                                                    ' ',
                                            ]"
                                            class="q-mr-xs q-ml-xs"
                                        />
                                    </div>
                                    <div class="col-6">
                                        <q-input
                                            dense
                                            outlined
                                            v-model="formFields.AracPlaka2"
                                            hide-bottom-space
                                            lazy-rules
                                            :rules="[
                                                (val) =>
                                                    (val && val.length > 0) ||
                                                    ' ',
                                            ]"
                                            class="q-ml-xs q-mr-xs"
                                            autogrow
                                        />
                                    </div>
<!--                                    <div class="col-4">-->
<!--                                        <q-select-->
<!--                                            outlined-->
<!--                                            v-model="formFields.AracPlakaIlKodu"-->
<!--                                            :options="aracPlakaIlKoduOptions"-->
<!--                                            :option-label="-->
<!--                                                (option) => option.label-->
<!--                                            "-->
<!--                                            option-value="value"-->
<!--                                            emit-value-->
<!--                                            map-options-->
<!--                                            dense-->
<!--                                            options-dense-->
<!--                                            hide-bottom-space-->
<!--                                            class="q-ml-xs"-->
<!--                                            behavior="menu"-->
<!--                                        />-->
<!--                                    </div>-->
                                </div>
                            </div>
                            <q-input
                                dense
                                outlined
                                v-model="formFields.MusteriDogumYeri"
                                :label="$t('birthplace')"
                                hide-bottom-space
                                readonly
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        $t('required'),
                                ]"
                            />
                            <q-select
                                outlined
                                v-model="formFields.MusteriCinsiyet"
                                :options="genderOptions"
                                :option-label="(option) => option.label"
                                option-value="value"
                                :label="$t('gender')"
                                dense
                                readonly
                                emit-value
                                map-options
                                hide-bottom-space
                                behavior="menu"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || $t('required'),]"
                            />

                            <q-select
                                outlined
                                v-model="formFields.MusteriUyruk"
                                :options="countriesOptions"
                                :option-label="(item) => item.Aciklama"
                                option-value="id"
                                emit-value
                                map-options
                                use-input
                                input-debounce="0"
                                options-dense
                                :label="$t('country')"
                                dense
                                hide-bottom-space
                                clearable
                                @filter="filterCountries"
                                behavior="menu"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || $t('required'),]"
                            >
                                <template v-slot:no-option>
                                    <q-item>
                                        <q-item-section class="text-grey">
                                            {{$t('no_results')}}
                                        </q-item-section>
                                    </q-item>
                                </template>
                            </q-select>
                            <q-select
                                outlined
                                v-model="formFields.AracMarka"
                                :options="aracMarkaOptions"
                                :option-label="(item) => item.Marka_Adi"
                                option-value="id"
                                emit-value
                                map-options
                                use-input
                                input-debounce="0"
                                options-dense
                                :label="$t('car_brand')"
                                dense
                                hide-bottom-space
                                clearable
                                @filter="filterAracMarka"
                                @update:model-value="aracMarkaUpdated"
                                behavior="menu"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || $t('required'),]"
                            >
                                <template v-slot:no-option>
                                    <q-item>
                                        <q-item-section class="text-grey">
                                            {{$t('no_results')}}
                                        </q-item-section>
                                    </q-item>
                                </template>
                            </q-select>
                            <q-select
                                outlined
                                v-model="formFields.AracTipi"
                                :options="aracModelOptions"
                                :option-label="(item) => item.Tip_Adi"
                                option-value="id"
                                emit-value
                                map-options
                                use-input
                                input-debounce="0"
                                options-dense
                                :label="$t('car_model')"
                                dense
                                hide-bottom-space
                                clearable
                                @filter="filterAracModel"
                                behavior="menu"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || $t('required'),]"
                            >
                                <template v-slot:no-option>
                                    <q-item>
                                        <q-item-section class="text-grey">
                                            {{$t('no_results')}}
                                        </q-item-section>
                                    </q-item>
                                </template>
                            </q-select>

                            <q-input
                                dense
                                outlined
                                v-model="formFields.AracModelYili"
                                type="number"
                                :label="$t('car_model_year')"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        $t('required'),
                                ]"
                            />
                            <q-select
                                outlined
                                v-model="formFields.AracTarz"
                                :options="aracTipiOptions"
                                :option-label="(item) => item.arac_tipi"
                                option-value="id"
                                emit-value
                                map-options
                                use-input
                                input-debounce="0"
                                options-dense
                                :label="$t('use_type')"
                                dense
                                hide-bottom-space
                                clearable
                                @filter="filterAracTarz"
                                behavior="menu"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || $t('required'),]"
                            >
                                <template v-slot:no-option>
                                    <q-item>
                                        <q-item-section class="text-grey">
                                            No results
                                        </q-item-section>
                                    </q-item>
                                </template>
                            </q-select>
                            <q-select
                                outlined
                                v-model="formFields._YakitTipi"
                                :options="yakitTipiOptions"
                                :option-label="(item) => item.label"
                                option-value="value"
                                emit-value
                                map-options
                                use-input
                                input-debounce="0"
                                options-dense
                                :label="$t('fuel_type')"
                                dense
                                hide-bottom-space
                                clearable
                                @filter="filterAracMarka"
                                behavior="menu"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || $t('required'),]"
                            >
                                <template v-slot:no-option>
                                    <q-item>
                                        <q-item-section class="text-grey">
                                             {{$t('no_results')}}
                                        </q-item-section>
                                    </q-item>
                                </template>
                            </q-select>

                            <q-stepper-navigation>
                                <!--            <q-btn @click="() => { done1 = true; step = 2 }" type="submit" color="primary" label="Ilerle" no-caps class="full-width" />-->
                                <q-btn
                                    type="submit"
                                    color="primary"
                                    :label="$t('forward')"
                                    no-caps
                                    class="full-width"
                                />
                            </q-stepper-navigation>
                        </q-form>
                    </q-step>

                    <q-step
                        :name="2"
                        prefix="2"
                        title=""
                        :done="step > 2"
                        :header-nav="step > 2"
                        style="min-height: 200px"
                    >
                        <q-form @submit="onNextStep" class="q-gutter-md">
                            <q-input
                                dense
                                outlined
                                v-model="formFields.Motor_cc"
                                type="number"
                                :label="$t('motor_cc')"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        $t('required'),
                                ]"
                            />
<!--                            <q-input-->
<!--                                dense-->
<!--                                outlined-->
<!--                                v-model="formFields.AracBedeli"-->
<!--                                type="number"-->
<!--                                label="Araç Bedeli"-->
<!--                                hide-bottom-space-->
<!--                                lazy-rules-->
<!--                                :rules="[-->
<!--                                    (val) =>-->
<!--                                        (val && val.length > 0) ||-->
<!--                                        'Lutfen Araç Bedeli giriniz',-->
<!--                                ]"-->
<!--                            />-->
                            <q-input
                                dense
                                outlined
                                v-model="formFields.ipotekli"
                                type="text"
                                :label="$t('ipotekli')"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        $t('required'),
                                ]"
                            />
                            <q-input
                                dense
                                outlined
                                v-model="formFields.AracMotorNo"
                                type="text"
                                :label="$t('motor_no')"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        $t('required'),
                                ]"
                            />
                            <q-input
                                dense
                                outlined
                                v-model="formFields.AracSasiNo"
                                type="text"
                                :label="$t('chassis_no')"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        $t('required'),
                                ]"
                            />
                            <q-select
                                outlined
                                v-model="formFields.AracDireksiyonTarafi"
                                :options="aracDireksiyonOptions"
                                :option-label="(option) => option.label"
                                option-value="value"
                                emit-value
                                map-options
                                :label="$t('car_direction')"
                                dense
                                hide-bottom-space
                                clearable
                                behavior="menu"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || $t('required'),]"
                            />
                            <q-select
                                outlined
                                v-model="formFields._SbmCarColorCode"
                                :options="renkOptions"
                                :option-label="(option) => option.adi"
                                option-value="id"
                                emit-value
                                map-options
                                :label="$t('car_color')"
                                options-dense
                                dense
                                use-input
                                hide-bottom-space
                                clearable
                                @filter="filterRenk"
                                behavior="menu"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || $t('required'),]"
                            />
                            <q-select
                                outlined
                                v-model="formFields._AracVitesBilgisi"
                                :options="aracVitesOptions"
                                :option-label="(option) => option.label"
                                option-value="value"
                                emit-value
                                map-options
                                :label="$t('gear_type')"
                                dense
                                hide-bottom-space
                                clearable
                                behavior="menu"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || $t('required'),]"
                            />
                            <q-stepper-navigation >
                            <div class="row">
                                <div class="col-6">
                                    <q-btn
                                         color="primary"
                                        :label="$t('backward')"
                                        no-caps
                                        @click="onPrevStep"
                                    />

                                </div>
                                <div class="col-6 text-right">
                                    <q-btn
                                        type="submit"
                                        color="primary"
                                        :label="$t('forward')"
                                        no-caps

                                        @click="onNextStep"
                                    />

                                </div>
                            </div>
                            </q-stepper-navigation>
                        </q-form>
                    </q-step>

                    <q-step
                        :name="3"
                        prefix="3"
                        title=""
                        :header-nav="step > 3"
                        style="min-height: 200px"
                    >
                        <q-form @submit="onSubmitKasko" class="q-gutter-md">
                            <q-select
                                outlined
                                v-model="formFields.MusteriIlceKodu"
                                :options="ilOptions"
                                :option-label="(option) => option.Aciklama"
                                option-value="id"
                                emit-value
                                map-options
                                :label="$t('province_select')"
                                dense
                                hide-bottom-space
                                behavior="menu"
                                clearable
                                use-input
                                @filter="filterIl"
                                @update:model-value="getIlOnSelect"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || $t('required'),]"
                            />
                            <q-select
                                outlined
                                v-model="formFields.MusteriBucakKodu"
                                :options="ilceOptions"
                                :option-label="(option) => option.ilce_Adi"
                                option-value="id"
                                emit-value
                                map-options
                                :label="$t('district_select')"
                                dense
                                clearable
                                hide-bottom-space
                                behavior="menu"
                                use-input
                                @filter="filterIlce"
                                @update:model-value="getIlceOnSelect"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || $t('required'),]"
                            />
                            <q-select
                                outlined
                                v-model="formFields.MusteriBelediyeKodu"
                                :options="belediyeOptions"
                                :option-label="(option) => option.Belediye_Adi"
                                option-value="id"
                                emit-value
                                map-options
                                :label="$t('council_select')"
                                dense
                                clearable
                                hide-bottom-space
                                behavior="menu"
                                use-input
                                @filter="filterBelediye"
                                @update:model-value="getBelediyeOnSelect"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || $t('required'),]"

                            />
                            <q-select
                                outlined
                                v-model="formFields.MusteriMahalleKodu"
                                :options="mahalleOptions"
                                :option-label="(option) => option.Mahalle_Adi"
                                option-value="id"
                                emit-value
                                map-options
                                :label="$t('municipality_select')"
                                dense
                                clearable
                                hide-bottom-space
                                use-input
                                @filter="filterMahalle"
                                @update:model-value="getMahalleOnSelect"
                                behavior="menu"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || $t('required'),]"
                            />
                            <q-select
                                outlined
                                v-model="formFields.MusteriCSBMKodu"
                                :options="sokakOptions"
                                :option-label="(option) => option.Sokak_Adi"
                                option-value="id"
                                emit-value
                                map-options
                                :label="$t('street_select')"
                                dense
                                clearable
                                use-input
                                @filter="filterSokak"
                                hide-bottom-space
                                behavior="menu"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || $t('required'),]"
                            />
                            <q-input
                                dense
                                outlined
                                v-model="formFields.MusteriApartmanAdi"
                                type="text"
                                :label="$t('building_no')"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        $t('required'),
                                ]"
                            />
                            <q-input
                                dense
                                outlined
                                v-model="formFields.MusteriApartmanNo"
                                type="text"
                                :label="$t('apartment_no')"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        $t('required'),
                                ]"
                            />
                            <q-input
                                dense
                                outlined
                                v-model="formFields.MusteriCepTelefonNo"
                                type="text"
                                :label="$t('phone_no')"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        $t('required'),
                                ]"
                            />
                            <q-input
                                dense
                                outlined
                                v-model="formFields.MusteriEPosta"
                                type="text"
                                :label="$t('email_address')"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 7) ||
                                        $t('required'),
                                ]"
                            />
                            <q-select
                                outlined
                                v-model="formFields.AcenteId"
                                :options="agentOptions"
                                :option-label="(option) => option.Acente_Adi"
                                option-value="id"
                                emit-value
                                map-options
                                :label="$t('agent_select')"
                                dense
                                clearable
                                use-input
                                @filter="filterAgent"
                                hide-bottom-space
                                behavior="menu"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || $t('required'),]"
                            />
                            <q-stepper-navigation>
                                <div class="row">
                                    <div class="col-6">
                                        <q-btn
                                            color="primary"
                                            :label="$t('backward')"
                                            no-caps
                                            @click="onPrevStep"
                                        />

                                    </div>
                                    <div class="col-6 text-right">
                                        <q-btn
                                            type="submit"
                                            color="primary"
                                            :label="$t('get_a_quote')"
                                            no-caps
                                             :disable="!formFields.uyar"
                                        />

                                    </div>
                                </div>

                                <!--          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />-->
                            </q-stepper-navigation>

                            <div class="row">
                                <div class="col-1">
                                    <q-checkbox
                                        v-model="formFields.uyar"
                                        color="primary"
                                        dense
                                    />
                                </div>
                                <div
                                    class="col-11 text-grey-8"
                                    style="font-size: 11px"
                                >
                                    <b>{{$t('warning')}}:</b> {{$t('warning_text')}}
                                </div>
                            </div>
                        </q-form>
                    </q-step>
                    <q-step
                        :name="4"
                        :done="step > 4"
                        :prefix="4"
                        :header-nav="step > 4"
                        style="min-height: 200px"
                    >
                        <HesaplananPirimTrafik />
                        <q-stepper-navigation  >
                            <div class="row">
                                <div class="col-6">
                                    <q-btn
                                        color="primary"
                                        :label="$t('backward')"
                                        no-caps
                                        @click="onPrevStep"
                                    />

                                </div>
                                <div class="col-6 text-right">
                                    <q-btn
                                        type="submit"
                                        color="primary"
                                        :label="$t('forward')"
                                        no-caps
                                        @click="onNextStep"
                                    />

                                </div>
                            </div>

                        </q-stepper-navigation>
                    </q-step>

                    <q-step
                        :name="5"
                        :done="step > 5"
                        :prefix="5"
                        :header-nav="step >5"
                        style="min-height: 200px"
                    >
                        <PaymentPirimTrafik @go-to-payment="onNextStep"/>
                                                <q-stepper-navigation>
                                                    <q-btn
                                                        color="primary"
                                                        :label="$t('backward')"
                                                        no-caps
                                                        @click="onPrevStep"
                                                    />
                                                </q-stepper-navigation>
                    </q-step>
                    <q-step
                        :name="6"
                         :done="step > 6"
                        :prefix="6"
                        :header-nav="step >6"
                        style="min-height: 200px"
                    >
                      <PaymentTrafik/>
                  <q-stepper-navigation>
                      <div class="row">
                          <div class="col-6">
                              <q-btn
                                  color="primary"
                                  :label="$t('backward')"
                                  no-caps
                                  @click="onPrevStep"
                              />

                          </div>
                          <div class="col-6 text-right">
<!--                              <q-btn-->
<!--                                  type="submit"-->
<!--                                  color="primary"-->
<!--                                  :label="$t('forward')"-->
<!--                                  no-caps-->
<!--                                  @click="onNextStep"-->
<!--                              />-->

                          </div>
                      </div>

                  </q-stepper-navigation>
                    </q-step>
                </q-stepper>

                <!--    <form action="https://sanalposprov.garanti.com.tr/servlet/gt3dengine">-->
                <!--       <div id="formel"></div>-->
                <!--      <button type="submit" color="primary"  class="full-width"> Ödeme Yap</button>-->
                <!--    </form>-->

                <!--  <button @click="onSubmitPay">test</button>-->
            </div>
        </q-page-container>
    </q-layout>
    </transition-group>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useMainStore } from "../../../stores/main-store";
import { api } from "boot/axios";
import { Loading, Notify } from "quasar";
import { useRouter } from "vue-router";
import { useTrafikSigortaStore } from "stores/trafik-store";
import {useTrafikSigortaCreateStore} from "stores/trafik-sigorta-create";
import {useAuthStore} from "stores/auth-store";
import { date } from "quasar";
import HesaplananPirimTrafik from "pages/MakePolice/TrafikSigorta/HesaplananPirimTrafik.vue";
import PaymentPirimTrafik from "pages/MakePolice/TrafikSigorta/PaymentPirimTrafik.vue";
import PaymentTrafik from "pages/MakePolice/TrafikSigorta/PaymentTrafik.vue";
const router = useRouter();
const store = useMainStore();
const authStore = useAuthStore();
const {user} = storeToRefs(authStore);
const trafikSigortaCreateStore = useTrafikSigortaCreateStore();
const {trafikSigorta} = storeToRefs(trafikSigortaCreateStore);
const trafikSigortaStore = useTrafikSigortaStore();
const {
    countries: countries,
    aracMarka: aracMarka,
    aracTipi: aracTipi,
    aracTarz: aracTarz,
    aracModelSelect,
    renk,
    il: il,
    ilce,
    belediyeSelect,
    mahalleSelect,
    sokakSelect,
    agent,
} = storeToRefs(useMainStore());
const {
    countriesGet: countriesGet,
    aracMarkaGet: aracMarkaGet,
    aracModelSelectGet,
    renkGet: renkGet,
    ilGet: ilGet,
    ilceSelectGet: ilceSelectGet,
    belediyeSelectGet: belediyeSelectGet,
    mahalleSelectGet: mahalleSelectGet,
    sokakSelectGet: sokakSelectGet,
    agentGet: agentGet,
    aracTipiGet: aracTipiGet,
} = useMainStore();

countriesGet();
aracMarkaGet();
aracModelSelectGet();
renkGet();
ilGet();
ilceSelectGet();
belediyeSelectGet();
mahalleSelectGet();
sokakSelectGet();
agentGet();
aracTipiGet()
const genderOptions = [
    { value: "E", label: "Erkek" },
    { value: "K", label: "Kadın" },
];
const aracPlakaIlKoduOptions = [
    { value: "KKTC", label: "KKTC" },
    { value: "TC", label: "TC" },
    { value: "DİĞER", label: "DİĞER" },
];
const yakitTipiOptions = [
    { value: "Benzin", label: "Benzin" },
    { value: "Dizel", label: "Dizel" },
    { value: "LPG", label: "LPG" },
    { value: "Elektrikli", label: "Elektrik" },
];
const aracVitesOptions = [
    { value: "Manuel", label: "Manuel" },
    { value: "Otomatik", label: "Otomatik" },
    { value: "Triptonik", label: "Triptonik" },
];
const aracDireksiyonOptions = [
    { value: "Sağ", label: "Sağ" },
    { value: "Sol", label: "Sol" },
];
// ************* Options for the form *************** /
let countriesOptions = ref(countries.value);
let aracMarkaOptions = ref(aracMarka.value);
let aracTipiOptions = ref(aracTipi.value);
let aracModelOptions = ref();
let filteredArachModel = aracModelSelect.value;
let renkOptions = ref(renk.value);
const ilOptions = ref(il.value);
let ilceSelectGetOptions = ref([]);
let ilceOptions = ref([]);
const belediyeSelectGetOptions = ref([]);
const belediyeOptions = ref([]);
const mahalleSelectOptions = ref([]);
const mahalleOptions = ref([]);
const sokakSelectOptions = ref();
const agentOptions = ref(agent.value);
const sokakOptions = ref([]);


// ************* Fiters for the form  select *************** /
const filterCountries = (val: any, update: any) => {
    if (val === "") {
        update(() => {
            countriesOptions.value = countries.value;
        });
        return;
    }
    update(() => {
        const needle = val.toLowerCase();
        countriesOptions.value = countries.value.filter(
            // @ts-ignore
            (v) => v.Aciklama.toLowerCase().indexOf(needle) > -1
        );
    });
};
const filterAracMarka = (val: any, update: any) => {
    if (val === "") {
        update(() => {
            aracMarkaOptions.value = aracMarka.value;
        });
        return;
    }
    update(() => {
        const needle = val.toLowerCase();
        aracMarkaOptions.value = aracMarka.value.filter(
            // @ts-ignore
            (v) => v.Marka_Adi.toLowerCase().indexOf(needle) > -1
        );
    });
};
const filterAracModel = (val: any, update: any) => {
    // @ts-ignore
    formFields.AracModel = "";
    if (val === "") {
        update(() => {
            aracModelOptions.value = filteredArachModel;
        });
        return;
    }
    update(() => {
        const needle = val.toLowerCase();
        aracModelOptions.value = filteredArachModel.filter(
            // @ts-ignore
            (v) => v.Tip_Adi.toLowerCase().indexOf(needle) > -1
        );
    });
};
const filterAracTarz = (val: any, update: any) => {
    if (val === "") {
        update(() => {
            aracTipiOptions.value = aracTipi.value;
        });
        return;
    }
    update(() => {
        const needle = val.toLowerCase();
        aracTipiOptions.value = aracTipi.value.filter(
            // @ts-ignore
            (v) => v.arac_tipi.toLowerCase().indexOf(needle) > -1
        );
    });
};
const filterRenk = (val: any, update: any) => {
    if (val === "") {
        update(() => {
            renkOptions.value = renk.value;
        });
        return;
    }
    update(() => {
        const needle = val.toLowerCase();
        renkOptions.value = renk.value.filter(
            // @ts-ignore
            (v) => v.adi.toLowerCase().indexOf(needle) > -1
        );
    });
};
const filterIl = (val: any, update: any) => {

    update(() => {
        const needle = val.toLowerCase();
        ilOptions.value = il.value.filter(
            // @ts-ignore
            (v) => v.Aciklama.toLowerCase().indexOf(needle) > -1
        );
    });
};
const filterIlce = (val: string, update: any) => {
    update(() => {
        const needle = val.toLowerCase();
        ilceOptions.value = ilceSelectGetOptions.value.filter(
            // @ts-ignore
            (v) => v.ilce_Adi.toLowerCase().indexOf(needle) > -1
        );
    });
};
const filterBelediye = (val: string, update: any) => {
    update(() => {
        const needle = val.toLowerCase();
        belediyeOptions.value = belediyeSelectGetOptions.value.filter(
            // @ts-ignore

            (v) => v.Belediye_Adi.toLowerCase().indexOf(needle) > -1
        );
    });
};
const filterMahalle = (val: string, update: any) => {
    console.log(val)
    update(() => {
        const needle = val.toLowerCase();
        mahalleOptions.value = mahalleSelectOptions.value.filter(
            // @ts-ignore
            (v) => v.Mahalle_Adi.toLowerCase().indexOf(needle) > -1
        );
    });
};
const filterSokak = (val: string, update: any) => {
    if (val === "") {
        update(() => {
            sokakOptions.value = sokakSelectOptions.value;
        });
        return;
    }
    update(() => {
        const needle = val.toLowerCase();
        sokakOptions.value = sokakSelectOptions.value.filter(
            // @ts-ignore
            (v) => v.Sokak_Adi?.toLowerCase().indexOf(needle) > -1
        );
    });
};
const filterAgent = (val: string, update: any) => {
    if (val === "") {
        update(() => {
            agentOptions.value = agent.value;
        });
        return;
    }
    update(() => {
        const needle = val.toLowerCase();
        agentOptions.value = agent.value.filter(
            // @ts-ignore
            (v) => v.Acente_Adi.toLowerCase().indexOf(needle) > -1
        );
    });
};

// ************* Select box on update for the form *************** /
const aracMarkaUpdated = (id?: number) => {
    // @ts-ignore
    const marka = aracMarka.value.find((item) => item.id === id);
    let filteredModels = aracModelSelect.value.filter(
        // @ts-ignore
        (item) => item.Marka_Kod === marka?.Marka_Kod
    );
    filteredArachModel = filteredModels;
};

const getIlOnSelect = (data: number) => {
     if (data !== null) {
        ilceSelectGetOptions.value = ilce.value.filter(
            // @ts-ignore
            (item) => item.il_Kodu === +data
        );
    }else {
        ilceSelectGetOptions.value = []
    }

};
const getIlceOnSelect = (data: number) => {

    if (data !== null) {
        belediyeSelectGetOptions.value = belediyeSelect.value.filter(
            // @ts-ignore
            (item) => item.ilce_Kodu === +data
        );
    }else {
        belediyeSelectGetOptions.value = []
    }


};
const getBelediyeOnSelect = (data: number) => {

    if (data !== null) {
        mahalleSelectOptions.value = mahalleSelect.value.filter(
            // @ts-ignore
            (item) => +item.belediyenin_Kodu === +data
        );
    }else {
        mahalleSelectOptions.value = []
    }
};
const getMahalleOnSelect = (data: object) => {
    sokakSelectOptions.value = sokakSelect.value.filter(
        // @ts-ignore
        (item) => +item.mahallenin_Kodu === +data
    );
};
const onNextStep = () => {
    step.value++;
};
const onPrevStep = () => {
    step.value--;
};
// ************* Form Submit *************** /
const onSubmitKasko = async () => {
    let formData = new FormData();
    for (const [key, val] of Object.entries(formFields.value)) {
        if (key === "uyar")
        {
            formData.append(key, val ? "1" : "0");
        }else if (key === 'TCVat'){
            formData.append(key, val ? "1" : "0");
        }else {
            // @ts-ignore
            formData.append(key, val);
        }

    }
    // for (const pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }

    await trafikSigortaCreateStore.hesaplaTrafikSigorta(formData).then((res) => {
        console.log(res);
        if (res)
        {
            onNextStep();
        }
    });

};
// ************* Form Field states *************** /
const step = ref(1);
const formFields = ref({
    KullaniciAdi: user.value?.name, //ok
    KullaniciSoyAdi: user.value?.surname, //ok
    MusteriTcKimlikNo: user.value.id_card, //ok
    MusteriDogumYeri: user.value.birthplace, //ok
    MusteriCinsiyet: user.value.gender, //ok
    MusteriUyruk: '',
    MusteriDogumTarihi: date.formatDate(user.value.birth_date,'DD/MM/YYYY'),
    AracPlaka1: "ds",
    AracPlaka2: "786",
    AracPlakaIlKodu: "", // select box
    AracMarka: 3, // select box
    AracModelYili: "2005", // select box
    AracTarz: "", // select box
    _YakitTipi: "", // select box
    Motor_cc: "54",
    // AracBedeli: "87897979",
    ipotekli: "ipotekli değil",
    AracMotorNo: "232323232",
    AracSasiNo: "232323232323",
    AracDireksiyonTarafi: "Sağ", // select box
    _AracVitesBilgisi: "", // select box
    MusteriIlceKodu: "", // select box
    MusteriBucakKodu: "", // select box
    MusteriBelediyeKodu: "", // select box
    MusteriMahalleKodu: "", // select box
    MusteriCSBMKodu: "", // select box
    MusteriApartmanAdi: "apartman adı", //
    MusteriApartmanNo: "34", // input
    MusteriCepTelefonNo: user.value?.phone, // input // ok
    MusteriEPosta: user.value?.email, // input // ok
    AcenteId: 1, // input
    _SbmCarColorCode: "", // select box
    uyar: false, // 'accepted'
    TCVat: false
});
// ************* Garanti ödeme test *************** /
// const data ={
//
// }
// const onSubmitPay = () => {
//  let html = ''
//   for (const [key, value] of Object.entries(data)) {
//     html += `<input type="text" name="${key}" value="${value}">`
//   }
//   document.getElementById('formel').innerHTML = html
//
// }
// ************* Watcher for AracPlaka1 *************** /
watch(formFields.value, (value, oldValue, onCleanup) => {
    if (value.AracPlaka1) {
        formFields.value.AracPlaka1 = value.AracPlaka1.toUpperCase();
    }
});
// let testdata = {"message":"The given data was invalid.","errors":{"uyar":["The uyar must be accepted."]}}
// for (const [key, value] of Object.entries(testdata?.errors)) {
//   Notify.create({
//     message: 'Başvuru: ' + value[0],
//     color: 'negative',
//     position: 'bottom-right',
//     timeout: 1500,
//   })
// }
</script>

<style  scoped>
.q-stepper__header {
    display: none !important;
 }
.q-field--outlined .q-field__control {
    border-radius: 8px !important;
}
.q-select__dialog {
    max-height: calc(100vh - 500px) !important;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
}
.q-stepper--horizontal .q-stepper__step-inner {
    padding-top: 0px !important;
}
</style>

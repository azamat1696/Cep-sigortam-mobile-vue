<!--suppress ALL -->
<template>


    <q-layout view="lHh Lpr lFf">
        <q-header   elevated>
            <q-toolbar>
                <q-avatar class="cursor-pointer q-btn q-btn--flat" size="sm" @click="authToken ? $router.push({ name: 'teklifAl'}) : $router.push({ name: 'home'})">
                    <q-icon
                        name="chevron_left"
                        size="md"
                        class="cursor-pointer q-mt-sm"

                    />
                </q-avatar>
                <q-toolbar-title class="text-subtitle2 text-bold text-center q-mr-xl"
                    >{{$t('insurance')}}</q-toolbar-title
                >
            </q-toolbar>
        </q-header>
        <q-page-container>
            <div>
                <q-stepper
                    v-model="step"
                    header-nav
                    ref="stepper"
                    color="primary"
                    active-icon="none"
                    done-icon="none"
                    animated
                    class="no-shadow stepper_header"
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
                                mask="#### #### ###"
                                unmasked-value
                                @update:model-value="onIdCardChange"
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        $t('required'),
                                ]"
                            />

                            <q-checkbox
                                v-model="formFields.TCVat"
                                dense
                                :label="$t('tc_citizen')"
                                class="text-subtitle2"
                                :disable="checkIdCardNumber"
                            />

                            <q-input
                                v-model="formFields.MusteriDogumTarihi"
                                outlined
                                dense
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
                                                mask="DD / MM /YYYY"
                                                :locale="dateLocale"
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
<!--                                            lazy-rules-->
<!--                                            :rules="[val => val !== null && val !== ''-->
<!--                                            || '']"-->
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
                                            {{$t('no_results')}}
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
                            <q-select
                                outlined
                                v-model="formFields.TeminatLimitiDovic"
                                :options="currencyOptions"
                                :option-label="(option) => option.label"
                                option-value="value"
                                emit-value
                                map-options
                                :label="$t('currency_select')"
                                dense
                                clearable
                                use-input
                                hide-bottom-space
                                behavior="menu"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                          || $t('required'),]"
                            />
                            <q-input
                                dense
                                outlined
                                v-model="formFields.AracBedeli"
                                type="text"
                                mask="###,###,###,###"
                                reverse-fill-mask
                                unmasked-value
                                :suffix="formFields.TeminatLimitiDovic"
                                :label="$t('car_price')"
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
                                v-model="formFields.ipotekli"
                                type="text"
                                :label="$t('ipotekli')"
                                hide-bottom-space

                            />
<!--                            <q-input
                                dense
                                outlined
                                v-model="formFields.AracMotorNo"
                                type="text"
                                :label="$t('motor_no')"
                                hide-bottom-space

                            />-->
<!--                            <q-input
                                dense
                                outlined
                                v-model="formFields.AracSasiNo"
                                type="text"
                                :label="$t('chassis_no')"
                                hide-bottom-space

                            />-->
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

                            />
                            <q-stepper-navigation>
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
<!--                            <q-select
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
                            />-->
                            <q-input
                                dense
                                outlined
                                v-model="formFields.sokakIsme"
                                type="text"
                                :label="$t('street_name')"
                                hide-bottom-space

                            />
                            <q-input
                                dense
                                outlined
                                v-model="formFields.MusteriApartmanAdi"
                                type="text"
                                :label="$t('building_no')"
                                hide-bottom-space

                            />
                            <q-input
                                dense
                                outlined
                                v-model="formFields.MusteriApartmanNo"
                                type="text"
                                :label="$t('apartment_no')"
                                hide-bottom-space

                            />

                            <q-input
                                dense
                                outlined
                                v-model="formFields.MusteriCepTelefonNo"
                                type="text"
                                prefix="+90"
                                mask="### ### ## ##"
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
                                type="email"
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
                                v-model="formFields.AcenteNo"
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
                            <div class="text-subtitle2 text-bold">
                                {{$t('contact_type')}}
                            </div>
                            <q-checkbox v-model="formFields.email_fav" :label="$t('email')" dense  />
                            <q-checkbox v-model="formFields.phone_fav" :label="$t('phone')" dense  />
                            <q-checkbox v-model="formFields.sms_fav" :label="$t('sms')" dense   />
                            <q-stepper-navigation>
                                <q-btn
                                    type="submit"
                                    color="primary"
                                    :label="$t('get_a_quote')"
                                    no-caps
                                    class="full-width"
                                />
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
                                    <b>{{$t('warning')}}:</b> {{ $t('warning_text')}}
                                </div>
                            </div>
                        </q-form>
                    </q-step>
                </q-stepper>

<!--                    <form action="https://sanalposprov.garanti.com.tr/servlet/gt3dengine">-->
<!--                       <div id="formel"></div>-->
<!--                      <button type="submit" color="primary"  class="full-width"> Ödeme Yap</button>-->
<!--                    </form>-->

<!--                  <button @click="onSubmitPay">test</button>-->
            </div>
        </q-page-container>
    </q-layout>

</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useMainStore } from "../../../stores/main-store";
import { api } from "boot/axios";
import {date, Loading, Notify} from "quasar";
import { useRouter } from "vue-router";
import { useKaskoStore } from "stores/kosko-store";
import {useAuthStore} from "stores/auth-store";

import {useI18n} from "vue-i18n";
const { locale } = useI18n();

 const dateTranslate ={
    months: [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık",
    ],
    monthsShort: [
        "Oca",
        "Şub",
        "Mar",
        "Nis",
        "May",
        "Haz",
        "Tem",
        "Ağu",
        "Eyl",
        "Eki",
        "Kas",
        "Ara",
    ],
    days: [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi",
    ],
    daysShort: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
};
const dateLocale = locale.value === 'tr'? dateTranslate : null;

const router = useRouter();
const store = useMainStore();
const kaskoStore = useKaskoStore();
const authStore = useAuthStore();
const {user,authToken} = storeToRefs(authStore);

const {
    countries: countries,
    aracMarka: aracMarka,
    aracTipi: aracTipi,
    aracModelSelect,
    renk,
    il: il,
    ilce,
    belediyeSelect,
    mahalleSelect,
    sokakSelect,
    agent,
} = storeToRefs(store);

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
const aracModelSelectOptions = ref([]);
 let aracModelOptions = ref([]);
let filteredArachModel = aracModelSelect.value;
let renkOptions = ref(renk.value);
const ilOptions = ref(il.value);

const belediyeSelectGetOptions = ref([]);
const belediyeOptions = ref([]);
const mahalleSelectOptions = ref([]);
const mahalleOptions = ref([]);
const sokakSelectOptions = ref([]);
const sokakOptions = ref([]);

let ilceSelectGetOptions = ref([]);
let ilceOptions = ref([]);
 const agentOptions = ref(agent.value);

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

    update(() => {
        const needle = val.toLowerCase();
        aracModelOptions.value = aracModelSelectOptions.value.filter(
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
            (v) => v.adi.toLowerCase().indexOf(needle) > -1
        );
    });
};
const filterIl = (val: any, update: any) => {
    if (val === "") {
        update(() => {
            ilOptions.value = il.value;
        });
        return;
    }
    update(() => {
        const needle = val.toLowerCase();
        ilOptions.value = il.value.filter(
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
    update(() => {
        const needle = val.toLowerCase();
        mahalleOptions.value = mahalleSelectOptions.value.filter(
            // @ts-ignore
            (v) => v.Mahalle_Adi.toLowerCase().indexOf(needle) > -1
        );
    });
};
const filterSokak = (val: string, update: any) => {
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
const aracMarkaUpdated = (id: number) => {
    let aracModel = aracMarkaOptions.value.find(
        // @ts-ignore
        (item) => +item.id === +id
    );

    if (id !== null) {

        aracModelSelectOptions.value = aracModelSelect.value.filter(
            // @ts-ignore
            (item) => item.Marka_Adi ===  aracModel.Marka_Adi
        );
    }else {
        aracModelSelectOptions.value = []
    }
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
const getMahalleOnSelect = (data: number) => {
    console.log(sokakSelectOptions)
    sokakSelectOptions.value = sokakSelect.value.filter(
        // @ts-ignore
        (item) => +item.mahallenin_Kodu === +data
    );
};
// ************* Form Submit *************** /
const onSubmitKasko = async () => {
    let formData = new FormData();
    for (const [key, val] of Object.entries(formFields.value)) {
        if(key === "email_fav" || key === "phone_fav" || key === 'sms_fav' || key === 'TCVat' ) {
            // @ts-ignore
            formData.append(key, val === true ? 1 : 0);
            continue;
        }
        // @ts-ignore
        formData.append(key, val);
    }
    // for (const pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }

    await kaskoStore.kaskoFormSubmit(formData).then((res) => {
        if (res === true) {
            router.push({ name: "kaskoSuccess" });
        }
    });
};
// ************* Form Field states *************** /
const step = ref(1);
 const formFields = ref({
    KullaniciAdi: user.value?.name || "",
    KullaniciSoyAdi: user.value?.surname || "",
    MusteriTcKimlikNo: user.value?.id_card || "",
    TCVat: user.value?.id_card?.length === 11 ? true : false,
    MusteriDogumYeri: user.value?.birthplace || "",
    MusteriCinsiyet: user.value?.gender || "",
    MusteriUyruk: 601,
    MusteriDogumTarihi: date.formatDate(user.value.birth_date,'DD/MM/YYYY'),
    AracPlaka1: "",
    AracPlaka2: "",
    AracPlakaIlKodu: "", // select box
    AracMarka:"", // select box
    AracTipi: "", // select box
    AracModelYili: "", // select box
    AracTarz: 1, // select box
    _YakitTipi: "Benzin", // select box
    Motor_cc: "",
    AracBedeli: "",
    ipotekli: "",
    AracMotorNo: "",
    AracSasiNo: "",
    AracDireksiyonTarafi: "Sağ", // select box
    _AracVitesBilgisi: "Otomatik", // select box
    MusteriIlceKodu: "", // select box
    MusteriBucakKodu: "", // select box
    MusteriBelediyeKodu: "", // select box
    MusteriMahalleKodu: "", // select box
    MusteriCSBMKodu: 999999, // select box
    sokakIsme: "", // input box
    MusteriApartmanAdi: "", //
    MusteriApartmanNo: "", // input
    MusteriCepTelefonNo: user.value?.phone || '', // input
    MusteriEPosta: user.value?.email || '', // input
    AcenteNo: 1, // input
    _SbmCarColorCode: 1, // select box
    uyar: false, // 'accepted'
    TeminatLimitiDovic: "TL", // select box
    email_fav: false,
    phone_fav: false,
    sms_fav: false,

});
const currencyOptions = [
    { value: "TL", label: "₺" },
    { value: "$", label: "$" },
    { value: "€", label: "€" },
    {value: "£", label: "£" }
];
const checkIdCardNumber = ref(true);
const onIdCardChange = (val:string) => {
    //@ts-ignore
    formFields.value.id_card = val;
    if (val.length === 11) {
        formFields.value.TCVat = true;
    } else {
        formFields.value.TCVat = false;
    }
};
const onNextStep = () => {
    step.value++;
};
// ************* Garanti ödeme test *************** /
// const data ={
// mode: "PROD",
// apiversion: "v0.01",
// cardcvv2: "892",
// cardexpiredatemonth: "10",
// cardexpiredateyear: 25,
// cardnumber: 5356663176575870,
// customeripaddress: "94.79.123.82",
// errorurl: "http://sevener.neareasttechnology.net/pay-transaction/fail",
// orderid: "20230306BE41",
// secure3dhash: "9CAE8174B69DBDC22DA247DD86BFC0C15FD85300",
// secure3dsecuritylevel: "3D_FULL",
// successurl: "http://sevener.neareasttechnology.net/pay-transaction/success",
// terminalid: "10089933",
// terminalmerchantid: "152978",
// terminalprovuserid: "PROVAUT",
// terminaluserid: "10089933",
// txnamount: 240000,
// txncurrencycode: "949",
// txninstallmentcount: "",
// txntype: "sales",
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

<style >

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

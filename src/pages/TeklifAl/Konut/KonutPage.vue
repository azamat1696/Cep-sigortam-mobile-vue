<!--suppress ALL -->
<template>
    <transition name="next" >
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
                    <q-toolbar-title class="text-subtitle2 text-bold text-center  q-mr-xl"
                    >{{$t('housing')}}</q-toolbar-title
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
                                >
                                    <template v-slot:no-option>
                                        <q-item>
                                            <q-item-section class="text-grey">
                                                {{ $t('no_results') }}
                                            </q-item-section>
                                        </q-item>
                                    </template>
                                </q-select>
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
                                                    mask="DD/MM/YYYY"
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

                                <q-input
                                    dense
                                    outlined
                                    v-model="formFields.MusteriCepTelefonNo"
                                    type="text"
                                    :label="$t('phone_no')"
                                    hide-bottom-space
                                    prefix="+90"
                                    mask="### ### ## ##"
                                    unmasked-value
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
                                    :label="$t('email')"
                                    hide-bottom-space
                                    lazy-rules
                                    :rules="[
                                    (val) =>
                                        (val && val.length > 7) ||
                                         $t('required'),
                                ]"
                                />
                                <div class="text-subtitle2 text-bold">
                                     Sigortalanacak Konutun Adresi
                                </div>
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
                                    :label="$t('neighborhood_select')"
                                    dense
                                    clearable
                                    hide-bottom-space
                                    use-input
                                    @filter="filterMahalle"
                                    @update:model-value="getMahalleOnSelect"
                                    behavior="menu"
                                    lazy-rules
                                    :rules="[val => val !== null && val !== ''
                                ||  $t('required'),]"
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
                            :name="2"
                            prefix="2"
                            title=""
                            :done="step > 2"
                            :header-nav="step > 2"
                            style="min-height: 200px"
                        >
                            <q-form @submit="onNextStep" class="q-gutter-md">
<!--                                <q-select
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
                                    lazy-rules
                                    :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        $t('required') ,
                                ]"
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
                                        $t('required') ,
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
<!--                                <q-input-->
<!--                                    dense-->
<!--                                    outlined-->
<!--                                    v-model="formFields.SigortalanacakKonutunAdresi"-->
<!--                                    type="text"-->
<!--                                    :label="$t('insured_house_address')"-->
<!--                                    hide-bottom-space-->
<!--                                    autogrow-->
<!--                                    lazy-rules-->
<!--                                    :rules="[-->
<!--                                    (val) =>-->
<!--                                        (val && val.length > 0) ||-->
<!--                                       $t('required'),-->
<!--                                ]"-->
<!--                                />-->

                                <q-select
                                    outlined
                                    v-model="formFields.SigortalSifati"
                                    :options="sigortalSifatiOptions"
                                    :option-label="(option) => option.label"
                                    option-value="value"
                                    emit-value
                                    map-options
                                    :label="$t('insured_house_type')"
                                    dense
                                    clearable
                                    hide-bottom-space
                                    behavior="menu"
                                />

                                <q-input
                                    dense
                                    outlined
                                    v-model="formFields.Rehinli"
                                    type="text"
                                    :label="$t('pledged_payer_info')"
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
                                    v-model="formFields.KonutKullanim"
                                    :options="konutKullanimOptions"
                                    :option-label="(option) => option.label"
                                    option-value="value"
                                    emit-value
                                    map-options
                                    :label="$t('house_use_type') "
                                    dense
                                    clearable
                                    hide-bottom-space
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
                            <q-form @submit="onSubmitKonut" class="q-gutter-md">
                                <q-select
                                    outlined
                                    v-model="formFields.BinaYapi"
                                    :options="binaYapiOptions"
                                    :option-label="(option) => option.label"
                                    option-value="value"
                                    emit-value
                                    map-options
                                    :label="$t('building_construct_type')"
                                    dense
                                    clearable
                                    hide-bottom-space
                                    behavior="menu"
                                    lazy-rules
                                    :rules="[val => val !== null && val !== ''
                                          || $t('required'),]"
                                />
                                <q-select
                                    outlined
                                    v-model="formFields.KonutTipi"
                                    :options="konutTipiOptions"
                                    :option-label="(option) => option.label"
                                    option-value="value"
                                    emit-value
                                    map-options
                                    :label="$t('building_type')"
                                    dense
                                    clearable
                                    hide-bottom-space
                                    behavior="menu"
                                />
                                <q-select
                                    outlined
                                    v-model="formFields.KatBilgisi"
                                    :options="katBilgisiOptions"
                                    :option-label="(option) => option.label"
                                    option-value="value"
                                    emit-value
                                    map-options
                                    :label="$t('floor_info')"
                                    dense
                                    clearable
                                    hide-bottom-space
                                    behavior="menu"
                                />
                                <q-input
                                    dense
                                    outlined
                                    v-model="formFields.YasayanKisiSayisi"
                                    type="text"
                                    :label="$t('living_person_count')"
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
                                    v-model="formFields.HasarDurumu"
                                    :options="hasarDurumuOptions"
                                    :option-label="(option) => option.label"
                                    option-value="value"
                                    emit-value
                                    map-options
                                    :label="$t('damage_status')"
                                    dense
                                    clearable
                                    hide-bottom-space
                                    behavior="menu"
                                />
                                <div class="row no-wrap justify-between">
                                    <div class="col-3 q-my-auto">
                                        <label class="text-no-wrap text-center"
                                        >{{$t('building_year')}}</label
                                        >
                                    </div>
                                    <div class="col-9 row">
                                        <div class="col-5">
                                            <q-input
                                                dense
                                                outlined
                                                v-model="formFields.insaYili"
                                                hide-bottom-space
                                                lazy-rules
                                                :rules="[
                                                (val) =>
                                                    (val && val.length > 0) ||
                                                    '',
                                            ]"
                                                class="q-mr-xs q-ml-xs"
                                            />
                                        </div>
                                        <div class="col-2 q-my-auto">
                                            <div class="text-center text-subtitle2">
                                                <p>M <sup>2</sup></p>
                                            </div>
                                        </div>
                                        <div class="col-5">
                                            <q-input
                                                dense
                                                outlined
                                                v-model="formFields.M2"
                                                hide-bottom-space
                                                lazy-rules
                                                :rules="[
                                                (val) =>
                                                    (val && val.length > 0) ||
                                                    '',
                                            ]"
                                                class="q-ml-xs q-mr-xs"
                                                autogrow
                                            />
                                        </div>
                                    </div>
                                </div>
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
                                    v-model="formFields.BinaBedeli"
                                    type="text"
                                    :label="$t('new_building_price')"
                                    hide-bottom-space
                                    mask="###,###,###,###"
                                    reverse-fill-mask
                                    unmasked-value
                                    :suffix="formFields.TeminatLimitiDovic"
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
                                    v-model="formFields.EsyaBedeli"
                                    type="text"
                                    :label="$t('new_furniture_price')"
                                    hide-bottom-space
                                    mask="###,###,###,###"
                                    reverse-fill-mask
                                    unmasked-value
                                    :suffix="formFields.TeminatLimitiDovic"
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
                                    v-model="formFields.CamBedeli"
                                    type="text"
                                    :label="$t('new_glass_price')"
                                    hide-bottom-space
                                    lazy-rules
                                    mask="###,###,###,###"
                                    reverse-fill-mask
                                    unmasked-value
                                    :suffix="formFields.TeminatLimitiDovic"
                                    :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                       $t('required'),
                                ]"
                                />

                                <q-input
                                    dense
                                    outlined
                                    v-model="formFields.KonuttaHasarYasandi"
                                    type="text"
                                    :label="$t('any_damage_in_the_house')"
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
                                        <b>{{$t('warning')}}:</b>
                                         {{$t('warning_text')}}
                                    </div>
                                    <div class="col-12">
                                        <q-separator spaced />
                                    </div>
                                    <div class="col-12">
                                        {{$t('warning_text2')}}
                                    </div>
                                </div>
                            </q-form>
                        </q-step>
                    </q-stepper>
                </div>
            </q-page-container>
        </q-layout>
    </transition>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useMainStore } from "../../../stores/main-store";
import { api } from "boot/axios";
import {date, Loading, Notify} from "quasar";
import { useRouter } from "vue-router";
import { useKonutStore } from "stores/konut-store";
import { useAuthStore } from "stores/auth-store";
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
const konutStore = useKonutStore();
const authStore = useAuthStore();
const {
    countries: countries,
    il: il,
    ilce,
    belediyeSelect,
    mahalleSelect,
    sokakSelect,
    agent,
} = storeToRefs(store);
const {user,authToken} = storeToRefs(authStore)



const genderOptions = [
    { value: "E", label: "Erkek" },
    { value: "K", label: "Kadın" },
];
const sigortalSifatiOptions = [
    { value: "Mal Sahibi", label: "Mal Sahibi" },
    { value: "Kiracı", label: "Kiracı" },
];
const binaYapiOptions = [
    { value: "Betonarme", label: "Betonarme" },
    { value: "Yığma", label: "Yığma" },
    { value: "Diğer", label: "Diğer" },
];
const konutTipiOptions = [
    { value: "Apartman", label: "Apartman" },
    { value: "Müstakil", label: "Müstakil" },
];
const katBilgisiOptions = [
    { value: "Bodrum", label: "Bodrum" },
    { value: "Zemin", label: "Zemin" },
    { value: "Giriş", label: "Giriş" },
    { value: "Ara", label: "Ara" },
    { value: "Çatı", label: "Çatı" },
    { value: "Tamamı", label: "Tamamı" },
];
const hasarDurumuOptions = [
    { value: "Hasarsız", label: "Hasarsız" },
    { value: "Hafif Hasarlı", label: "Hafif Hasarlı" },
    { value: "Orta Hasarlı", label: "Orta Hasarlı" },
];
const konutKullanimOptions = [
    { value: "Daimi İkametgah", label: "Daimi İkametgah" },
    { value: "Yazlık", label: "Yazlık" },
];


// const currencyOptions = [
//     { value: "TL", label: "TL" },
//     { value: "USD", label: "USD" },
//     { value: "EUR", label: "EUR" },
//     {value: "GBP", label: "GBP" }
// ];
const currencyOptions = [
    { value: "TL", label: "₺" },
    { value: "$", label: "$" },
    { value: "€", label: "€" },
    {value: "£", label: "£" }
];
const tlCurrencyOptions = [
    { value: "200000", label: "200000" },
    { value: "400000", label: "400000" },
    { value: "750000", label: "750000" },
    { value: "1000000", label: "1000000" },
    { value: "1500000", label: "1500000" },
]
const usdCurrencyOptions = [
    { value: "10000", label: "10000" },
    { value: "25000", label: "25000" },
    { value: "40000", label: "40000 " },
    { value: "70000", label: "70000" },
    { value: "100000", label: "100000" },
]
// ************* Options for the form *************** /
let countriesOptions = ref(countries.value);
 let aracModelOptions = ref();
 const ilOptions = ref(il.value);

let ilceSelectGetOptions = ref([]);
let ilceOptions = ref([]);
const belediyeSelectGetOptions = ref([]);
const belediyeOptions = ref([]);
const mahalleSelectOptions = ref([]);
const mahalleOptions = ref([]);
const sokakSelectOptions = ref([]);
const sokakOptions = ref([]);

const agentOptions = ref(agent.value);
let currencyOptionsBinabedeli = ref();
let currencyOptionsCamBedeli = ref();
let currencyOptionsEsyaBedeli = ref();
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
const getDovizOnSelectBinabedeli = (data: object) => {
    // @ts-ignore
    if (data === 'TL' && data !== null) {
        // @ts-ignore
        currencyOptionsBinabedeli.value = tlCurrencyOptions;
        // @ts-ignore
    }else  {
        console.log(data)
        // @ts-ignore
        currencyOptionsBinabedeli.value = usdCurrencyOptions;
    }
}
const getDovizOnSelectCamBedeli = (data: object) => {
    // @ts-ignore
    if (data === 'TL' && data !== null) {
        // @ts-ignore
        currencyOptionsCamBedeli.value = tlCurrencyOptions;
        // @ts-ignore
    }else {
        console.log(data)
        // @ts-ignore
        currencyOptionsCamBedeli.value = usdCurrencyOptions;
    }
}
const getDovizOnSelectEsyaBedeli = (data: object) => {
    // @ts-ignore
    if (data === 'TL' && data !== null) {
        // @ts-ignore
        currencyOptionsEsyaBedeli.value = tlCurrencyOptions;
        // @ts-ignore
    }else{
        console.log(data)
        // @ts-ignore
        currencyOptionsEsyaBedeli.value = usdCurrencyOptions;
    }
}
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
     sokakSelectOptions.value = sokakSelect.value.filter(
        // @ts-ignore
        (item) => +item.mahallenin_Kodu === +data
    );
};
const onNextStep = () => {
    step.value++;
};

// ************* Form Submit *************** /
const onSubmitKonut = async () => {
    let formData = new FormData();
    for (const [key, val] of Object.entries(formFields.value)) {
        if(key === "contact_email" || key === "contact_phone" || key === 'contact_sms' ) {
            // @ts-ignore
            formData.append(key, val === true ? 1 : 0);
            continue;
        }
        // @ts-ignore
        formData.append(key, val);
    }
    // @ts-ignore
    // for (const pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }

    await konutStore.konutFormSubmit(formData).then((res) => {
        if (res === true) {
            router.push({ name: "konutSuccess" });
        }
    });
};


// ************* Form Field states *************** /

const step = ref(1);
const formFields = ref({
    KullaniciAdi: user.value?.name,
    KullaniciSoyAdi: user.value?.surname,
    MusteriTcKimlikNo: user.value?.id_card,
    MusteriDogumYeri: user.value?.birthplace,
    MusteriCinsiyet: user.value?.gender,
    MusteriUyruk: 601,
    MusteriEPosta: user.value?.email, // input
    AcenteNo: 1, // input
    MusteriCepTelefonNo: user.value?.phone, // input
    MusteriDogumTarihi: date.formatDate(user.value.birth_date,'DD/MM/YYYY'),
    SigortalanacakKonutunAdresi: "",
    SigortalSifati: "Mal Sahibi",
    Rehinli: "",
    KonutKullanim: "Daimi İkametgah",
    BinaYapi: "Betonarme",
    KonutTipi: "Apartman",
    KatBilgisi: "Ara",
    YasayanKisiSayisi: "",
    HasarDurumu: "Hasarsız", // select box
    insaYili: "",
    M2: "",
    BinaBedeli: "",
    BinaBedeliDovic: "",
    EsyaBedeli: "",
    EsyaBedeliDovic: "",
    CamBedeli: "",
    CamBedeliDovic: "",
    KonuttaHasarYasandi: "",
    MusteriIlceKodu: "", // select box
    MusteriBucakKodu: "", // select box
    MusteriBelediyeKodu: "", // select box
    MusteriMahalleKodu: "", // select box
    MusteriCSBMKodu: 999999, // select box
    sokakIsme: "", // text box
    MusteriApartmanAdi: "", //
    MusteriApartmanNo: "", // input
    uyar: false, // 'accepted'
    TCVat: user.value?.id_type === 1 ? true : false,
    TeminatLimitiDovic:"TL",
    email_fav: false,
    phone_fav: false,
    sms_fav: false,
});
const checkIdCardNumber = ref(true);
const onIdCardChange = (val:string) => {
    formFields.value.id_card = val;
    if (val.length === 11) {
        formFields.value.TCVat = true;
    } else {
        formFields.value.TCVat = false;
    }
};
</script>

<style>
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

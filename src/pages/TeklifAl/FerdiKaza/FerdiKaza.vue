<!--suppress ALL -->
<template>
    <transition-group
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeIn"
    >
        <q-layout key="ferdiKazaTeklif" view="lHh Lpr lFf">
            <HeaderComponent>
                {{$t('personel_accident')}}
            </HeaderComponent>

            <q-page-container>
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
                                v-model="formFields.MusteriDogumTarihi"
                                outlined
                                dense
                                mask="##/##/####"
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
                                            No results
                                        </q-item-section>
                                    </q-item>
                                </template>
                            </q-select>
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
                        :header-nav="step > 2"
                        style="min-height: 200px"
                    >
                        <q-form @submit="onSubmitFerdiKaza" class="q-gutter-md">

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
                                        @update:model-value="getDovizOnSelect"
                                    />

                                    <q-select
                                        outlined
                                        v-model="formFields.TeminatLimiti"
                                        :options="currencyOptionsValue"
                                        :option-label="(option) => option.label"
                                        option-value="value"
                                        emit-value
                                        map-options
                                        :label="$t('death_and_permanent_disability')"
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
                                v-model="formFields.Lehtar"
                                type="text"
                                :label="$t('lehtar')"
                                hide-bottom-space
                            />
                            <q-select
                                outlined
                                v-model="formFields.Meslegi"
                                :options="jobOptions"
                                :option-label="(option) => option.MeslekSinifi"
                                option-value="id"
                                emit-value
                                map-options
                                :label="$t('job_select')"
                                dense
                                clearable
                                use-input
                                hide-bottom-space
                                behavior="menu"
                                lazy-rules
                                :rules="[val => val !== null && val !== ''
                                || $t('required'),]"
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
                                    <b>{{$t('warning')}}:</b>  {{$t('warning_text')}}
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

            </q-page-container>
        </q-layout>
    </transition-group>

</template>

<script setup lang="ts">
import {onMounted, reactive, ref, watch} from "vue";
import { storeToRefs } from "pinia";
import { useMainStore } from "../../../stores/main-store";
import { useAuthStore} from "stores/auth-store";
import { api } from "boot/axios";
import { Loading, Notify } from "quasar";
import { useRouter } from "vue-router";
import {useFerdiKazaStore} from "stores/ferdi-kaza-store";
import HeaderComponent from "components/HeaderComponent.vue";

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
const authStore = useAuthStore();
const ferdiKazaStore = useFerdiKazaStore();
const {
    countries: countries,
    il: il,
    ilce,
    belediyeSelect,
    mahalleSelect,
    sokakSelect,
    agent,
    jobs: jobs,
} = storeToRefs(store);
const {user,authToken} = storeToRefs(authStore)
const {
    countriesGet: countriesGet,
    ilGet: ilGet,
    ilceSelectGet: ilceSelectGet,
    belediyeSelectGet: belediyeSelectGet,
    mahalleSelectGet: mahalleSelectGet,
    sokakSelectGet: sokakSelectGet,
    agentGet: agentGet,
    getJobs: getJobs
} = store;

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
const genderOptions = [
    { value: "Erkek", label: "Erkek" },
    { value: "Kadın", label: "Kadın" },
];
const currencyOptions = [
    { value: "TL", label: "TL" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    {value: "GBP", label: "GBP" }
];
const tlCurrencyOptions = [
    { value: "200000", label: "200.000 TL" },
    { value: "400000", label: "400.000 TL" },
    { value: "750000", label: "750.000 TL" },
    { value: "1000000", label: "1.000.000 TL" },
    { value: "1500000", label: "1.500.000 TL" },
]
const usdCurrencyOptions = [
    { value: "10", label: "10.000" },
    { value: "25", label: "25.000" },
    { value: "40", label: "40.000 " },
    { value: "70", label: "70.000" },
    { value: "100", label: "100.000" },
]
// ************* Options for the form *************** /
let jobOptions =  ref(jobs.value);
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
const filterOfArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const agentOptions = ref(agent.value);
let currencyOptionsValue = ref();
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
            agentOptions.value = agent.value.filter((item: any) => filterOfArray.includes(item.id));
        });
        return;
    }
    update(() => {
        const needle = val.toLowerCase();
        agentOptions.value = agent.value.filter((item: any) => filterOfArray.includes(item.id)).filter(
            // @ts-ignore
            (v) => v.Acente_Adi.toLowerCase().indexOf(needle) > -1
        );
    });
};

// ************* Select box on update for the form *************** /

const getIlOnSelect = (id: number) => {
    if (id !== null) {
        ilceSelectGetOptions.value = ilce.value.filter(
            // @ts-ignore
            (item) => item.il_Kodu === +id
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
const getDovizOnSelect = (data: object) => {
    // @ts-ignore
    if (data === 'TL' && data !== null) {
        // @ts-ignore
     currencyOptionsValue.value = tlCurrencyOptions;
     // @ts-ignore
    }else if (data === 'USD' || data === 'EUR' || data === 'GBP') {
        console.log(data)
        // @ts-ignore
        currencyOptionsValue.value = usdCurrencyOptions;
    }
}
const onNextStep = () => {
    step.value++;
};

// ************* Form Submit *************** /
const onSubmitFerdiKaza = async () => {
    let formData = new FormData();
    for (const [key, val] of Object.entries(formFields.value)) {
        if(key === "email_fav" || key === "phone_fav" || key === 'sms_fav' ) {
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

    await ferdiKazaStore.ferdiKazaFormSubmit(formData).then((res) => {
        if (res === true) {
            router.push({ name: "trafikSuccess" });
        }
    });
};
// ************* Form Field states *************** /
const step = ref(1);
const formFields = ref({
    KullaniciAdi: "",
    KullaniciSoyAdi: "",
    MusteriTcKimlikNo: "",
    MusteriDogumYeri: "",
    MusteriCinsiyet: "",
    MusteriUyruk: '',
    MusteriDogumTarihi: "",
    MusteriIlceKodu: "", // select box
    MusteriBucakKodu: "", // select box
    MusteriBelediyeKodu: "", // select box
    MusteriMahalleKodu: "", // select box
    MusteriCSBMKodu: "", // select box
    MusteriCepTelefonNo: "", // input
    MusteriEPosta: "", // input
    AcenteId: "", // input
    uyar: false, // 'accepted'
    TeminatLimiti: "", // select box
    Lehtar: "", // select box
    Meslegi: "", // select box
    TeminatLimitiDovic:"",
    TCVat: false,
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

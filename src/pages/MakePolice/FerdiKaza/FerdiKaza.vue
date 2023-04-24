<!--suppress ALL -->
<template>
    <transition-group
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeIn"
    >
        <q-layout key="ferdiKazaOlustur" view="lHh Lpr lFf">
            <q-header   elevated>
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
                    >{{$t('personel_accident')}}</q-toolbar-title
                    >
                </q-toolbar>
            </q-header>
            <q-page-container>
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
                                lazy-rules
                                readonly
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
                                v-model="formFields.MusteriDogumTarihi"
                                outlined
                                dense
                                hide-bottom-space
                                readonly
                                label="Doğum Tarihi"
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
                                readonly
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
                                            {{ $t('no_results')}}
                                        </q-item-section>
                                    </q-item>
                                </template>
                            </q-select>
                            <q-input
                                dense
                                outlined
                                v-model="formFields.MusteriCepTelefonNo"
                                type="text"
                                readonly
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
                                readonly
                                :label="$t('email_address')"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                    (val) =>
                                        (val && val.length > 7) ||
                                        $t('required'),
                                ]"
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
                        :prefix="2"
                        :done="step > 2"
                        title=""
                        :header-nav="step > 2"
                        style="min-height: 200px"
                    >
                        <q-form @submit="onSubmitFerdiKaza" class="q-gutter-md">

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
                            <q-select
                                outlined
                                v-model="formFields.TeminatLimiti"
                                :options="tlCurrencyOptions"
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
                                option-value="MeslekSinifi"
                                emit-value
                                map-options
                                :label="$t('job_select')"
                                dense
                                clearable
                                use-input
                                hide-bottom-space
                                behavior="menu"
                                @filter="filterJob"
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

                            <q-stepper-navigation>
                                <q-btn
                                    type="submit"
                                    color="primary"
                                    :label="$t('calculate')"
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
                                    <b>{{$t('warning')}}:</b> {{$t('warning_text')}}
                                </div>
                                <div class="col-12">
                                    <q-separator spaced />
                                </div>
                                <div class="col-12">
                                    {{$t('warning_text_lehtar')}}
                                </div>
                            </div>
                        </q-form>
                    </q-step>
                    <q-step
                        :name="3"
                        :title="$t('calculated_premium')"
                        :done="step > 3"
                        :header-nav="step > 3"
                        style="min-height: 200px"
                    >
                         <HesaplananPirim />
                        <q-stepper-navigation>
                            <q-btn
                                type="submit"
                                color="primary"
                                :label="$t('forward')"
                                no-caps
                                class="full-width"
                                @click="onNextStep"
                            />
                        </q-stepper-navigation>
                    </q-step>

                    <q-step
                        :name="4"
                        :title="$t('payment_submit')"
                        :done="step > 4"
                        :header-nav="step >4"
                        style="min-height: 200px"
                    >
                         <PaymentPirim />
<!--                        <q-stepper-navigation>-->
<!--                            <q-btn-->
<!--                                type="submit"-->
<!--                                color="primary"-->
<!--                                :label="$t('forward')"-->
<!--                                no-caps-->
<!--                                class="full-width"-->
<!--                                @click="onNextStep"-->
<!--                            />-->
<!--                        </q-stepper-navigation>-->
                    </q-step>
                </q-stepper>

            </q-page-container>
        </q-layout>
    </transition-group>

</template>

<script  lang="ts" setup>
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { Loading, Notify, date } from "quasar";
import { useRouter } from "vue-router";
import {useFerdiKazaStore} from "stores/ferdi-kaza-store";
import { useFerdiKazaCreateStore } from "stores/ferdi-kaza-create";
import {useAuthStore} from "stores/auth-store";
import {useMainStore} from "stores/main-store";
import HesaplananPirim from "pages/MakePolice/FerdiKaza/HesaplananPirim.vue";
import PaymentPirim from "pages/MakePolice/FerdiKaza/PaymentPirim.vue";


const router = useRouter();
const store = useMainStore();
const authStore = useAuthStore();
const ferdiKazaStore = useFerdiKazaStore();
const ferdiKazaCreate  = useFerdiKazaCreateStore();
const {ferdiKaza} = storeToRefs(ferdiKazaCreate);
const {user} = storeToRefs(authStore);
const {
    countries: countries,
    il: il,
    ilce,
    belediyeSelect,
    mahalleSelect,
    sokakSelect,
    agent,
    jobs,
} = storeToRefs(useMainStore());
const {
    countriesGet: countriesGet,
    ilGet: ilGet,
    ilceSelectGet: ilceSelectGet,
    belediyeSelectGet: belediyeSelectGet,
    mahalleSelectGet: mahalleSelectGet,
    sokakSelectGet: sokakSelectGet,
    agentGet: agentGet,
    getJobs: getJobs,
} = useMainStore();
getJobs();
countriesGet();
ilGet();
ilceSelectGet();
belediyeSelectGet();
mahalleSelectGet();
sokakSelectGet();
agentGet();
const genderOptions = [
    { value: "E", label: "Erkek" },
    { value: "K", label: "Kadın" },
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
const jobOptions = ref(jobs.value);
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
const filterJob = (val: string, update: any) => {
    update(() => {
        const needle = val.toLowerCase();
        jobOptions.value = jobs.value.filter(
            // @ts-ignore
            (v) => v.MeslekSinifi?.toLowerCase().indexOf(needle) > -1
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
const onNextStep = () => {
    step.value++;
};

// ************* Form Submit *************** /
const onSubmitFerdiKaza = async () => {
    let formData = new FormData();
    for (const [key, val] of Object.entries(formFields.value)) {
        if(key === 'uyar'){
            formData.append(key, val ? '1' : '0');
        }else {
            // @ts-ignore
            formData.append(key, val);
        }
    }
    // for (const pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }

    await ferdiKazaCreate.hesaplaFerdiKaza(formData).then((res) => {
        if (res){
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

    MusteriCinsiyet: "E", // ok
    MusteriUyruk: '', // ok
    MusteriDogumTarihi: date.formatDate(user.value.birth_date,'DD/MM/YYYY'), //ok

    MusteriIlceKodu: '', // select box // ok
    MusteriBucakKodu: '', // select box // ok
    MusteriBelediyeKodu: '', // select box // ok
    MusteriMahalleKodu: '', // select box // ok
    MusteriCSBMKodu: '', // select box  // ok
    MusteriCepTelefonNo: user.value.phone, // input // ok
    MusteriEPosta: user.value.email, // input // ok
    AcenteId: "", // input // ok
    uyar: false, // 'accepted' // ok
    TeminatLimiti: "", // select box // ok
    Lehtar: "", // select box // ok
    Meslegi: "", // select box // ok
    TCVat: false,
});

</script>

<style scoped>
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

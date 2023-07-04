
<style>
.hide_header {
    height: 20px;
    visibility: hidden !important;
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
.q-field__messages div {
    font-size: 13px !important;
    color: black;
}

</style>
<template>
    <transition-group
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeIn"
    >
   <q-page  key="ferdiKazaCreate" >
       <q-page-container>
           <q-header >
               <q-toolbar>
                   <q-avatar size="sm">
                       <q-icon
                           name="chevron_left"
                           @click="authToken && authToken !== undefined ? $router.push({ name: 'homeLogin'}) : $router.push({ name: 'home'})"
                           size="md"
                           class="cursor-pointer"
                       />
                   </q-avatar>
                   <q-toolbar-title class="text-subtitle2 text-bold text-center"
                   >{{$t('personel_accident')}}</q-toolbar-title
                   >
               </q-toolbar>
           </q-header>
           <div class=" ">
               <q-stepper
                   v-model="step"
                   header-nav
                   ref="stepper"
                   color="primary"
                   active-icon="none"
                   animated
                   class="no-shadow"
                   header-class="no-border hide_header"
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
                               clearable
                               :readonly="checkForReadonly()"
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
                               :readonly="checkForReadonly()"
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
                               mask="###########"
                               unmasked-value
                                 clearable
                               :readonly="checkForReadonly()"
                               @update:model-value="onIdCardChange"
                               lazy-rules
                               :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        $t('required'),
                                ]"
                           />
                           <q-checkbox
                               v-if="!checkForReadonly()"
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
                               clearable
                               :readonly="checkForReadonly()"
                               label="Doğum Tarihi"
                               :label="$t('birth_date')"
                                 lazy-rules
                                 :rules="[
                                        (val) =>
                                         (val && val.length > 0) ||
                                         $t('required')]"

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
                               clearable
                               :readonly="checkForReadonly()"
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
                               :readonly="checkForReadonly()"
                               emit-value
                               map-options
                               hide-bottom-space
                               clearable
                               behavior="menu"
                               lazy-rules
                               :rules="[val => val !== null && val !== ''
                                || $t('required')]"
                           />

                           <!--                            <q-select-->
                           <!--                                outlined-->
                           <!--                                v-model="formFields.MusteriUyruk"-->
                           <!--                                :options="countriesOptions"-->
                           <!--                                :option-label="(item) => item.Aciklama"-->
                           <!--                                option-value="id"-->
                           <!--                                emit-value-->
                           <!--                                map-options-->
                           <!--                                use-input-->
                           <!--                                input-debounce="0"-->
                           <!--                                options-dense-->
                           <!--                                :label="$t('country')"-->
                           <!--                                dense-->
                           <!--                                hide-bottom-space-->
                           <!--                                clearable-->
                           <!--                                @filter="filterCountries"-->
                           <!--                                behavior="menu"-->
                           <!--                                lazy-rules-->
                           <!--                                :rules="[val => val !== null && val !== ''-->
                           <!--                                || $t('required'),]"-->
                           <!--                            >-->
                           <!--                                <template v-slot:no-option>-->
                           <!--                                    <q-item>-->
                           <!--                                        <q-item-section class="text-grey">-->
                           <!--                                            {{ $t('no_results')}}-->
                           <!--                                        </q-item-section>-->
                           <!--                                    </q-item>-->
                           <!--                                </template>-->
                           <!--                            </q-select>-->
                           <q-input
                               dense
                               outlined
                               v-model="formFields.MusteriCepTelefonNo"
                               prefix="+90"
                               mask="### ### ## ##"
                               unmasked-value
                               :readonly="checkForReadonly()"
                               :label="$t('phone_no')"
                               hide-bottom-space
                               lazy-rules
                               :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        $t('required')
                                ]"
                           />
                           <q-input
                               dense
                               outlined
                               v-model="formFields.MusteriEPosta"
                               type="text"
                               :readonly="checkForReadonly()"
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
                       :prefix="2"
                       :done="step > 2"
                       title=""
                       :header-nav="step > 2"
                       style="min-height: 200px"
                   >
                       <q-space />
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
                               hint="* Sokak adını bulamazsınız isimsiz olarak seçiniz"
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
                               clearable
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
                                           :label="$t('calculate')"
                                           no-caps
                                           class="full-width"
                                       />

                                   </div>
                               </div>

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
                       :name="4"
                       :title="$t('payment_submit')"
                       :done="step > 4"
                       :header-nav="step >4"
                       style="min-height: 200px"
                   >
                       <PaymentPirim @go-to-payment="onNextStep" />

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
                   <q-step
                       :name="5"
                       :title="$t('payment_submit')"
                       :done="step > 5"
                       :header-nav="step >5"
                       style="min-height: 200px"
                   >
                       <PaymentFerdiKaza />

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
           </div>
       </q-page-container>
   </q-page>

    </transition-group>

</template>

<script  lang="ts" setup>
import {reactive, ref, watch} from "vue";
import { storeToRefs } from "pinia";
import { Loading, Notify, date } from "quasar";
import { useRouter } from "vue-router";
import {useFerdiKazaStore} from "stores/ferdi-kaza-store";
import { useFerdiKazaCreateStore } from "stores/ferdi-kaza-create";
import {useAuthStore} from "stores/auth-store";
import {useMainStore} from "stores/main-store";
import HesaplananPirim from "pages/MakePolice/FerdiKaza/HesaplananPirim.vue";
import PaymentPirim from "pages/MakePolice/FerdiKaza/PaymentPirim.vue";
import {useI18n} from "vue-i18n";
import PaymentFerdiKaza from "pages/MakePolice/FerdiKaza/PaymentFerdiKaza.vue";
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
const ferdiKazaCreate  = useFerdiKazaCreateStore();
const {ferdiKaza} = storeToRefs(ferdiKazaCreate);
const {user,authToken,logedInUser} = storeToRefs(authStore);
const {
    countries: countries,
    il: il,
    ilce,
    belediyeSelect,
    mahalleSelect,
    sokakSelect,
    agent,
    jobs,
} = storeToRefs(store);
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
const filterOfArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
const onPrevStep = () => {
    step.value--;
};
// ************* Form Submit *************** /
const onSubmitFerdiKaza = async () => {
    // set to satate for the form
    user.value = formFields.value
     let formData = new FormData();
    for (const [key, val] of Object.entries(formFields.value)) {
        if(key === 'uyar'){
            formData.append(key, val ? '1' : '0');
        }else if(key==='TCVat'){
            formData.append(key, val ? '1' : '0');
        }
    else {
            // @ts-ignore
            formData.append(key, val);
        }
    }

    await ferdiKazaCreate.hesaplaFerdiKaza(formData).then((res) => {
        if (res){
           onNextStep();
        }
    });
};
 // ************* Form Field states *************** /
const step = ref(1);
const formFields = ref({
    //@ts-ignore
    KullaniciAdi: logedInUser.value?.name, //ok
    //@ts-ignore
    KullaniciSoyAdi: logedInUser.value?.surname, //ok
    //@ts-ignore
    MusteriTcKimlikNo: logedInUser.value?.id_card, //ok
    //@ts-ignore
    MusteriDogumYeri: logedInUser.value?.birthplace, //ok

    MusteriCinsiyet: logedInUser.value?.gender, // ok
    MusteriUyruk: '', // ok
    //@ts-ignore
    MusteriDogumTarihi: date.formatDate(logedInUser.value?.birth_date,'DD/MM/YYYY'), //ok

    MusteriIlceKodu: '', // select box // ok
    MusteriBucakKodu: '', // select box // ok
    MusteriBelediyeKodu: '', // select box // ok
    MusteriMahalleKodu: '', // select box // ok
    MusteriCSBMKodu: '', // select box  // ok
    //@ts-ignore
    MusteriCepTelefonNo: logedInUser.value?.phone, // input // ok
    //@ts-ignore
    MusteriEPosta: logedInUser.value?.email, // input // ok
    AcenteId: '', // input // ok
    uyar: false, // 'accepted' // ok
    TeminatLimiti: "", // select box // ok
    Lehtar: "", // select box // ok
    Meslegi: "", // select box // ok
    //@ts-ignore
    TCVat: logedInUser.value?.id_card?.length === 11 ? true : false, // input // ok
});
const checkForReadonly = () => {
    if(authToken.value && authToken.value !== null && authToken.value !== undefined && authToken.value !== ''){
        return true
    }
    return false

};

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


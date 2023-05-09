<template>
    <div class=" full-width flex flex-center no-padding">
        <q-card
            class="no-shadow transparent"
            style="  min-width: 370px; margin-top: 0px"
        >
            <q-card-section class="q-pb-xs">
                <div class="text-primary text-uppercase text-left cep-sigortam">
                    {{ $t("register_title") }}
                </div>
            </q-card-section>
            <q-card-section class="q-pt-xs">
                <q-form @submit="onSubmit">
                    <q-input
                        v-model="formFields.id_card"
                        outlined
                        color="#EBEBEB"
                        :label="$t('identity_no')"
                        clearable
                        dense
                        mask="#### #### ###"
                        unmasked-value
                        @update:model-value="onIdCardChange"
                        class="q-pt-sm q-pb-sm"
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
                        class="q-pt-md q-pb-sm text-subtitle2"
                        :disable="checkIdCardNumber"
                    />
                    <q-input
                        outlined
                        v-model="formFields.phone"
                        type="text"
                        :label="$t('phone_no')"
                        class="q-pt-sm q-pb-sm"
                        hide-bottom-space
                        dense
                        mask="### ### ## ##"
                        unmasked-value
                        lazy-rules
                        prefix="+90"
                        :rules="[
                                    (val) =>
                                        (val && val.length === 10) ||
                                        $t('required'),
                                ]"
                    />

                    <q-input
                        outlined
                        v-model="formFields.name"
                        type="text"
                        :label="$t('name')"
                        hide-bottom-space
                        class="q-pt-sm q-pb-sm"
                        dense
                        lazy-rules
                        :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        $t('required'),
                                ]"
                    />

                    <q-input
                        outlined
                        v-model="formFields.surname"
                        type="text"
                        :label="$t('surname')"
                        hide-bottom-space
                        class="q-pt-sm q-pb-sm"
                        dense
                        lazy-rules
                        :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        $t('required'),
                                ]"
                    />

                    <q-input
                        v-model="formFields.password"
                        type="password"
                        outlined
                        color="#EBEBEB"
                        :label="$t('password')"
                        clearable
                        class="q-pt-sm q-pb-sm"
                        hide-bottom-space
                        dense
                        lazy-rules
                        :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        $t('required'),
                                ]"
                    />
                    <q-input
                        v-model="formFields.password_confirmation"
                        type="password"
                        outlined
                        color="#EBEBEB"
                        :label="$t('password_confirmation')"
                        clearable
                        class="q-pt-sm q-pb-sm"
                        hide-bottom-space
                        dense
                        lazy-rules
                        :rules="[
                                    (val) =>
                                          formFields.password === formFields.password_confirmation   ||
                                           $t('required'),
                                ]"
                    />

                    <q-input
                        outlined
                        v-model="formFields.email"
                        type="email"
                        :label="$t('email')"
                        hide-bottom-space
                        class="q-pt-sm q-pb-sm"
                        dense
                        lazy-rules
                        :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        $t('required'),
                                ]"
                    />

                    <q-input
                        outlined
                        v-model="formFields.birthplace"
                        type="text"
                        :label="$t('birthplace')"
                        hide-bottom-space
                        class="q-pt-sm q-pb-sm"
                        dense
                        lazy-rules
                        :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        $t('required'),
                                ]"
                    />

                    <q-select
                        outlined
                        v-model="formFields.gender"
                        :options="genderOptions"
                        :option-label="(option) => option.label"
                        option-value="value"
                        :label="$t('gender')"
                        dense
                        class="q-pt-sm q-pb-sm"
                        emit-value
                        map-options
                        hide-bottom-space
                        behavior="menu"
                        lazy-rules
                        :rules="[val => val !== null && val !== ''
                                || $t('required'),]"
                    />

                    <q-input
                        v-model="formFields.birth_date"
                        outlined
                        dense
                        hide-bottom-space
                        class="q-pt-sm q-pb-sm"
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
                                        v-model="formFields.birth_date"
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
                        outlined
                        v-model="formFields.address"
                        type="text"
                        :label="$t('address')"
                        hide-bottom-space
                        class="q-pt-sm q-pb-sm"
                        dense
                        lazy-rules
                        :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        $t('required'),
                                ]"
                    />

                    <q-checkbox
                        v-model="formFields.email_fav"
                        dense
                        :label="$t('email')"
                        class="q-pt-sm q-pb-sm q-pr-sm text-subtitle2"
                    />

                    <q-checkbox
                        v-model="formFields.phone_fav"
                        dense
                        :label="$t('phone')"
                        class="q-pt-sm q-pb-sm text-subtitle2"
                    />


                    <q-checkbox
                        v-model="formFields.sms_fav"
                        dense
                        :label="$t('sms')"
                        class="q-pt-sm q-pb-sm q-pl-sm  text-subtitle2"
                    />
                    <q-btn
                        color="primary"
                        text-color="white"
                        :label="$t('register')"
                        no-caps
                        dense
                        class="full-width q-mt-md"
                        style="border-radius: 8px"
                        size="20px"
                        type="submit"
                    />
                    <div class="flex justify-between q-pt-md">
                        <div
                            class="custom-text text-subtitle1 text-bold cursor-pointer"
                            @click="$router.push({ name: 'loginPage' })"
                        >
                            {{ $t('login') }}
                        </div>
                    </div>
                </q-form>
            </q-card-section>
            <q-card-section class="q-pt-xl"> </q-card-section>
        </q-card>
    </div>
 </template>

<script lang="ts" setup>
import {onMounted, ref,watch} from "vue";
import  { storeToRefs } from "pinia";
import {useAuthStore} from "stores/auth-store";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { date } from "quasar";
const {locale} = useI18n();
 const {
    user,
    authToken
} = storeToRefs(useAuthStore());
const {
    register,
} = useAuthStore();
const router = useRouter();
const store = useAuthStore();
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
const genderOptions = [
    { value: "E", label: "Erkek" },
    { value: "K", label: "Kadın" },
];
const test = ref(false)

const  formFields = ref({
    id_card: "",
    TCVat: false,
    phone: "",
    surname: "",
    name: "",
    password: "",
    password_confirmation: "",
    email: "",
    birthplace: "",
    gender: "",
    birth_date: "",
    address: "",
    email_fav: false,
    phone_fav: false,
    sms_fav: false,

})
const checkIdCardNumber = ref(true);
 const onIdCardChange = (val:string) => {
    formFields.value.id_card = val;
    if (val.length === 11) {
        formFields.value.TCVat = true;
     } else {
        formFields.value.TCVat = false;
     }
};
const onSubmit =  async () =>  {

    let formData = new FormData();

     for (let [key, value] of Object.entries(formFields.value)) {

         if (key === 'TCVat' || key === 'email_fav' || key === 'phone_fav' || key === 'sms_fav' ) {
               formData.append(key, !value ? 0 : 1);
        }   else {
             if (key === 'birth_date') {
                 let v = value.split('/');
                    let date = v[2] + '-' + v[1] + '-' + v[0];
                     formData.append(key, date);
             }else {
                 formData.append(key, value);
             }

        }

    }

      register(formData).then((res) => {
          if (res  !== undefined){
              router.push({ name: "optVerificationSuccessPage" });
          }

    })

}

onMounted(() => {
    if (authToken.value) {
        router.push({ name: 'homeLogin' });
    }
})
</script>

<style scoped>
.cep-sigortam {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
}
.custom-text {
    font-size: 14px;
    color: #5e5e5e;
    line-height: 16px;
}
.q-field--outlined .q-field__control {
    border-radius: 8px !important;
}
</style>

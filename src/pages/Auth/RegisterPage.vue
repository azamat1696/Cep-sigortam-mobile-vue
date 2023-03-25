<template>
    <div class="fullscreen flex flex-center no-padding">
        <q-card
            class="no-shadow transparent"
            style="  min-width: 370px; margin-top: 0px"
        >
            <q-card-section class="q-pb-xs">
                <div class="text-primary text-uppercase text-left cep-sigortam">
                    Hesap Oluştur
                </div>
            </q-card-section>
            <q-card-section class="q-pt-xs">
                <q-form @submit="onSubmit">
                    <q-input
                        v-model="formFields.id_card"
                        outlined
                        color="#EBEBEB"
                        label="Kimlik No"
                        clearable
                        dense
                        class="q-pt-sm q-pb-sm"
                        lazy-rules
                        :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        'Lutfen id_card giriniz',

                                ]"

                    />

                    <q-checkbox
                        v-model="formFields.TCVat"
                        dense
                        label="TC Vatandasiyim"
                        class="q-pt-sm q-pb-sm text-subtitle2"
                    />
                    <q-input
                        outlined
                        v-model="formFields.phone"
                        type="text"
                        label="Cep No"
                        class="q-pt-sm q-pb-sm"
                        hide-bottom-space
                        dense
                        lazy-rules
                        prefix="+90"
                        :rules="[
                                    (val) =>
                                        (val && val.length === 10) ||
                                        'Lutfen phone giriniz',
                                ]"
                    />

                    <q-input
                        outlined
                        v-model="formFields.name"
                        type="text"
                        label="Adı"
                        hide-bottom-space
                        class="q-pt-sm q-pb-sm"
                        dense
                        lazy-rules
                        :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        'Lutfen name giriniz',
                                ]"
                    />

                    <q-input
                        outlined
                        v-model="formFields.surname"
                        type="text"
                        label="Soyadı"
                        hide-bottom-space
                        class="q-pt-sm q-pb-sm"
                        dense
                        lazy-rules
                        :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        'Lutfen name giriniz',
                                ]"
                    />

                    <q-input
                        v-model="formFields.password"
                        type="password"
                        outlined
                        color="#EBEBEB"
                        label="Şifre"
                        clearable
                        class="q-pt-sm q-pb-sm"
                        hide-bottom-space
                        dense
                        lazy-rules
                        :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        'Lutfen password giriniz',
                                ]"
                    />
                    <q-input
                        v-model="formFields.password_confirmation"
                        type="password"
                        outlined
                        color="#EBEBEB"
                        label="Şifre Tekrar Giriniz"
                        clearable
                        class="q-pt-sm q-pb-sm"
                        hide-bottom-space
                        dense
                         lazy-rules
                        :rules="[
                                    (val) =>
                                          formFields.password === formFields.password_confirmation   ||
                                           'Lütfen şifre doğru giriniz giriniz',
                                ]"
                    />

                    <q-input
                        outlined
                        v-model="formFields.email"
                        type="email"
                        label="E-posta Adresi"
                        hide-bottom-space
                        class="q-pt-sm q-pb-sm"
                        dense
                        lazy-rules
                        :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        'Lutfen name giriniz',
                                ]"
                    />

                    <q-input
                        outlined
                        v-model="formFields.birthplace"
                        type="text"
                        label="Doğum Yeri"
                        hide-bottom-space
                        class="q-pt-sm q-pb-sm"
                        dense
                        lazy-rules
                        :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        'Lutfen name giriniz',
                                ]"
                    />

                    <q-select
                        outlined
                        v-model="formFields.gender"
                        :options="genderOptions"
                        :option-label="(option) => option.label"
                        option-value="value"
                        label="Cinsiyet"
                        dense
                        class="q-pt-sm q-pb-sm"
                        emit-value
                        map-options
                        hide-bottom-space
                        behavior="menu"
                        lazy-rules
                        :rules="[val => val !== null && val !== ''
                                || 'Lütfen cinsiyet seçiniz!',]"
                    />

                    <q-input
                        v-model="formFields.birth_date"
                        outlined
                        dense
                        hide-bottom-space
                        class="q-pt-sm q-pb-sm"
                        label="Doğum Tarihi"
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
                                                    formFields.birth_date
                                                "
                                        mask="YYYY-MM-DD"

                                    >
                                        <div
                                            class="row items-center justify-end"
                                        >
                                            <q-btn
                                                v-close-popup
                                                label="Kapat"
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
                        label="Adres"
                        hide-bottom-space
                        class="q-pt-sm q-pb-sm"
                        dense
                        lazy-rules
                        :rules="[
                                    (val) =>
                                        (val && val.length > 0) ||
                                        'Lutfen name giriniz',
                                ]"
                    />

                    <q-checkbox
                        v-model="formFields.email_fav"
                        dense
                        label="E-Posta"
                        class="q-pt-sm q-pb-sm q-pr-sm text-subtitle2"
                    />

                    <q-checkbox
                        v-model="formFields.phone_fav"
                        dense
                        label="Telefon"
                        class="q-pt-sm q-pb-sm text-subtitle2"
                    />


                    <q-checkbox
                        v-model="formFields.sms_fav"
                        dense
                        label="SMS"
                        class="q-pt-sm q-pb-sm q-pl-sm  text-subtitle2"
                    />
                    <q-btn
                        color="primary"
                        text-color="white"
                        label="Üye ol"
                        no-caps
                        dense
                        class="full-width q-mt-md"
                        style="border-radius: 8px"
                        size="20px"
                        type="submit"
                    />
                    <div class="flex justify-between q-pt-md">
                        <div
                            class="custom-text cursor-pointer"
                            @click="$router.push({ name: 'loginPage' })"
                        >
                            Üye Girişi
                        </div>
                    </div>
                </q-form>
            </q-card-section>
            <q-card-section class="q-pt-xl"> </q-card-section>
        </q-card>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import  { storeToRefs } from "pinia";
import {useAuthStore} from "stores/auth-store";
import { useRouter } from "vue-router";
 const {
    user
} = storeToRefs(useAuthStore());
const {
    register,
} = useAuthStore();
const router = useRouter();
const store = useAuthStore();

const genderOptions = [
    { value: "Erkek", label: "Erkek" },
    { value: "Kadın", label: "Kadın" },
];
const test = ref(false)

const  formFields = ref({
    id_card: "23232323121",
    TCVat: true,
    phone: "2434234234",
    surname: "yadygerov",
    name: "azamat",
    password: "121212",
    password_confirmation: "121212",
    email: "ssdsd@gm.com",
    birthplace: "dsds",
    gender: "",
    birth_date: "",
    address: "dsdsdsdsd",
    email_fav: false,
    phone_fav: false,
    sms_fav: false,

})
const onSubmit =  async () =>  {

    let formData = new FormData();
    for (let [key, value] of Object.entries(formFields.value)) {
        formData.append(key, value);
    }
      register(formData).then((res) => {

          if (res  !== undefined){
              router.push({ name: "optVerificationSuccessPage" });
          }

    })


}
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

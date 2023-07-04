<template>
    <div class="full-width flex flex-center no-padding ">
        <q-card
            class="no-shadow transparent q-pt-xl"
            style="height: auto; min-width: 370px"
        >
            <q-card-section class="q-pb-xs q-pt-xl">
                <div class="text-primary text-uppercase text-center cep-sigortam">
                    <img src="/logo.svg" height="60" width="250" />
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
                        mask="###########"
                        unmasked-value
                        class="q-pt-sm q-pb-sm"
                        @update:model-value="onIdCardChange"
                         lazy-rules
                        :rules="[val => val.length > 0]"
                    />
                    <q-checkbox
                        v-model="formFields.TCVat"
                        dense
                        :disable="checkIdCardNumber"
                        :label="$t('tc_citizen')"
                        class="q-pt-sm q-pb-sm text-subtitle2"
                    />
                    <q-input
                        v-model="formFields.phone"
                        outlined
                        color="#EBEBEB"
                        :label="$t('phone_no')"
                        clearable
                        class="q-pt-sm q-pb-sm"
                        prefix="+90"
                        mask="### ### ## ##"
                        unmasked-value
                        lazy-rules
                        :rules="[val => val.length > 0]"
                    />
                    <q-input
                        v-model="formFields.password"
                        type="password"
                        outlined
                        color="#EBEBEB"
                        :label="$t('password')"
                        clearable
                        class="q-pt-sm q-pb-sm"
                    />
                    <q-btn
                        color="primary"
                        text-color="white"
                        :label="$t('login')"
                        no-caps
                        type="submit"
                        class="full-width q-mt-md"
                        style="border-radius: 8px"
                        size="20px"
                    />


                    <div class="flex justify-between q-pt-md">
                        <div
                            class="h6 text-weight-bolder cursor-pointer text-grey-9"
                            @click="$router.push({ name: 'forgotPasswordPage' })"
                        >
                            {{ $t('forgot_password')}}
                        </div>

                        <q-checkbox
                            v-model="formFields.rememberMe"
                            dense
                            :label="$t('remember_me')"
                            class=" h6 text-weight-bolder text-grey-9 cursor-pointer"
                        />
                    </div>
                </q-form>
            </q-card-section>
            <q-card-section class="q-pt-xl">
                <q-btn
                    color="primary"
                    text-color="white"
                    :label="$t('register')"
                    no-caps
                    type="submit"
                    class="full-width q-mt-md"
                    style="border-radius: 8px"
                    size="20px"
                    @click="$router.push({ name: 'registerPage' })"
                />
                <q-btn
                    color="primary"
                    text-color="white"
                    :label="$t('continue_without_login')"
                    no-caps
                    class="full-width q-mt-md"
                    style="border-radius: 8px"
                    size="20px"
                    :to="{ name: 'home' }"
                />
            </q-card-section>
        </q-card>
    </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import { storeToRefs} from "pinia";
import { useAuthStore } from "stores/auth-store";
import { useRouter } from "vue-router";
const router = useRouter();
const authStore = useAuthStore();
const { authToken,permenantUser } = storeToRefs(authStore);
const { login } = useAuthStore();
const userInfo = JSON.parse(localStorage.getItem('rememberMe') || '{}');
const formFields = ref({
    // id_card: "14918431832",
    // TCVat: true,
    // phone: "5338510513"
    // password: "123456",
    // rememberMe: false,
    id_card: userInfo.id_card || "",
    TCVat: userInfo.TCVat || false,
    phone: userInfo.phone || "",
    password: userInfo.password || "",
    rememberMe: userInfo.rememberMe || false,
 })

const onSubmit = () => {
    let formData = new FormData();
    for(let [key,val] of Object.entries(formFields.value)) {
        if (key === 'TCVat' && val === true)
        {
            formData.append(key,1);
        }else if (key === 'TCVat' && val === false)
        {
            formData.append(key,0);
        }
        else if (key === 'rememberMe' && val === true) {
            formData.append(key, 1);
        }
        else{
            formData.append(key,val);
        }
    }
    login(formData).then(() => {
            permenantUser.value = formFields.value;
            if (formFields.value.rememberMe) {
                localStorage.setItem('rememberMe', JSON.stringify(formFields.value));
            } else {
                localStorage.removeItem('rememberMe');
            }

    }).catch((err) => {
        console.log('err',err);
    });
}
onMounted(() => {
    if (authToken.value) {
        router.push({ name: 'homeLogin' });
    }
})
const checkIdCardNumber = ref(true);
const onIdCardChange = (val:string) => {
    formFields.value.id_card = val;
    if (val?.length === 11) {
        formFields.value.TCVat = true;
    } else {
        formFields.value.TCVat = false;
    }
};
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

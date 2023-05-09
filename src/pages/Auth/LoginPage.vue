<template>
    <div class="full-width flex flex-center no-padding">
        <q-card
            class="no-shadow transparent"
            style="height: auto; min-width: 370px"
        >
            <q-card-section class="q-pb-xs">
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
                        class="q-pt-sm q-pb-sm"
                        lazy-rules
                        :rules="[val => val.length > 0]"
                    />
                    <q-checkbox
                        v-model="formFields.TCVat"
                        dense
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


                    <div class="flex justify-between q-pt-sm">
                        <div
                            class="custom-text cursor-pointer"
                            @click="$router.push({ name: 'forgotPasswordPage' })"
                        >
                            {{ $t('forgot_password')}}
                        </div>

                        <q-checkbox
                            v-model="formFields.rememberMe"
                            dense
                            :label="$t('remember_me')"
                            class=" text-subtitle2"
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
const { authToken,user,permenantUser } = storeToRefs(useAuthStore());
const { login } = useAuthStore();
const formFields = ref({
    // id_card: "14918431832",
    // TCVat: true,
    // phone: "5338510513",
    // password: "123456",
    // rememberMe: false,
    id_card: "",
    TCVat: false,
    phone: "",
    password: '',
    rememberMe: false,
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
    }).catch((err) => {
        console.log('err',err);
    });
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

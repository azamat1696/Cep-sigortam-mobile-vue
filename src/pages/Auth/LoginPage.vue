<template>
    <div class="fullscreen flex flex-center no-padding">
        <q-card
            class="no-shadow transparent"
            style="height: auto; min-width: 370px"
        >
            <q-card-section class="q-pb-xs">
                <div class="text-primary text-uppercase text-left cep-sigortam">
                    Cep Sigortam
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
                        class="q-pt-sm q-pb-sm"
                        lazy-rules
                        :rules="[val => val.length === 11 || 'Kimlik No 11 haneli olmalıdır']"
                    />
                    <q-checkbox
                        v-model="formFields.TCVat"
                        dense
                        label="TC Vatandasiyim"
                        class="q-pt-sm q-pb-sm text-subtitle2"
                    />
                    <q-input
                        v-model="formFields.phone"
                        outlined
                        color="#EBEBEB"
                        label="Cep No"
                        clearable
                        class="q-pt-sm q-pb-sm"
                    />
                    <q-input
                        v-model="formFields.password"
                        type="password"
                        outlined
                        color="#EBEBEB"
                        label="Şifre"
                        clearable
                        class="q-pt-sm q-pb-sm"
                    />
                    <q-btn
                        color="primary"
                        text-color="white"
                        label="Giriş"
                        no-caps
                        type="submit"
                        class="full-width q-mt-md"
                        style="border-radius: 8px"
                        size="20px"
                    />
                    <q-checkbox
                        v-model="formFields.rememberMe"
                        dense
                        label="Beni Hatirla"
                        class="q-pt-md q-pb-sm text-subtitle2"
                    />
                    <div class="flex justify-between q-pt-sm">
                        <div
                            class="custom-text cursor-pointer"
                            @click="$router.push({ name: 'renewPasswordPage' })"
                        >
                            Sifremi Unuttum
                        </div>

                        <div
                            class="custom-text cursor-pointer"
                            @click="$router.push({ name: 'registerPage' })"
                        >
                            Üye Ol
                        </div>
                    </div>
                </q-form>
            </q-card-section>
            <q-card-section class="q-pt-xl">
                <q-btn
                    color="primary"
                    text-color="white"
                    label="Teklif Al"
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
import {  ref } from "vue";
import { storeToRefs} from "pinia";
import { useAuthStore } from "stores/auth-store";
import { useRouter } from "vue-router";
const router = useRouter();
const { authToken,user } = storeToRefs(useAuthStore());
const { login } = useAuthStore();
const formFields = ref({
    id_card: "23232323191",
    TCVat: false,
    phone: "5488321431",
    password: "121212",
    rememberMe: false,
})

const onSubmit = () => {
    let formData = new FormData();
    for(let [key,val] of Object.entries(formFields.value)) {
        formData.append(key,val);
    }
    login(formData).then((res) => {
        if (res !== undefined){
            user.value = formFields.value
            router.push({ name: 'optVerificationPage' });
        }
        console.log('user',user.value);
    }).catch((err) => {
        console.log('err',err);
    });
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

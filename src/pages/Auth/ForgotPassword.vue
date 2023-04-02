<template>
    <div class="fullscreen flex flex-center no-padding">
        <q-card
            class="no-shadow transparent"
            style="height: auto; min-width: 370px; margin-top: 130px"
        >
            <q-card-section class="q-pb-xs">
                <div class="text-primary text-uppercase text-left cep-sigortam">
                    Bilgilerinizi Giriniz
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
                        class="q-pt-sm q-pb-md"
                        lazy-rules
                        :rules="[val => val.length > 0 || 'Lütfen bilgilerinizi giriniz']"
                    />
                    <q-input
                        v-model="formFields.phone"
                        outlined
                        color="#EBEBEB"
                        label="Cep No"
                        clearable
                        class="q-pt-sm q-pb-sm"
                        lazy-rules
                        :rules="[val => val.length > 0 || 'Lütfen bilgilerinizi giriniz']"
                    />
                    <q-btn
                        type="submit"
                        color="primary"
                        text-color="white"
                        label="Onay Kodu"
                        no-caps
                        class="full-width q-mt-md"
                        style="border-radius: 8px"
                        size="20px"

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

<script lang="js">
import { defineComponent, reactive, ref } from "vue";
import {useAuthStore} from "stores/auth-store";
import {storeToRefs} from "pinia";


export default defineComponent({
    name: "ForgotPassword",
    setup() {
        const authStore = useAuthStore();
        const {user,permenantUser} = storeToRefs(authStore);
        const {updatePassword} = authStore
        return {
            test: ref(false),
            formFields: reactive({
                id_card: "2830404084",
                phone: "5428872827",
            }),
            updatePassword,
            permenantUser
        };
    },
    methods: {
        onSubmit: function () {
            let formData = new FormData();
            for (const [key, value] of Object.entries(this.formFields)) {
                formData.append(key, value)
            }
            this.permenantUser = this.formFields
            this.updatePassword(formData)

        },
    },
});
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
</style>

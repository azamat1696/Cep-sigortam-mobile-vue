<template>
    <div class="fullscreen flex flex-center no-padding">
        <q-card
            class="no-shadow transparent"
            style="height: auto; min-width: 370px; margin-top: 130px"
        >
            <q-card-section class="q-pb-xs">
                <div class="text-primary text-uppercase text-left cep-sigortam">
                    Hesap Oluştur
                </div>
            </q-card-section>
            <q-card-section class="q-pt-xs">
                <q-form>
                    <q-input
                        v-model="formFields.identificationNumber"
                        outlined
                        color="#EBEBEB"
                        label="KKTC Kimlik No"
                        clearable
                        class="q-pt-sm q-pb-sm"
                    />
                    <q-checkbox
                        v-model="formFields.citizenOfTC"
                        dense
                        label="TC Vatandasiyim"
                        class="q-pt-sm q-pb-sm text-subtitle2"
                    />
                    <q-input
                        v-model="formFields.phoneNo"
                        outlined
                        color="#EBEBEB"
                        label="Cep No"
                        clearable
                        class="q-pt-sm q-pb-sm"
                    />
                    <q-input
                        v-model="formFields.password"
                        outlined
                        color="#EBEBEB"
                        label="Şifre"
                        clearable
                        class="q-pt-sm q-pb-sm"
                    />
                    <q-btn
                        color="primary"
                        text-color="white"
                        label="Üye ol"
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

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
    name: "Register",
    setup() {
        return {
            test: ref(false),
            formFields: reactive({
                identificationNumber: "",
                citizenOfTC: false,
                phoneNo: "",
                password: "",
            }),
        };
    },
    methods: {
        onSubmit() {
            console.log("on submit");
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

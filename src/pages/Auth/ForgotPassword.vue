<template>
    <div class="full-width flex flex-center no-padding">
        <q-card
            class="no-shadow transparent"
            style="height: auto; min-width: 370px; margin-top: 130px"
        >
            <q-card-section class="q-pb-xs">
                <div class="text-primary  text-left cep-sigortam">
                   {{ $t("enter_your_info") }}
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
                        class="q-pt-sm q-pb-md"
                        lazy-rules
                        :rules="[val => val.length > 0 || 'Lütfen bilgilerinizi giriniz']"
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
                        :rules="[val => val.length > 0 || 'Lütfen bilgilerinizi giriniz']"
                    />
                    <q-btn
                        type="submit"
                        color="primary"
                        text-color="white"
                        :label="$t('change_password')"
                        no-caps
                        class="full-width q-mt-md"
                        style="border-radius: 8px"
                        size="20px"

                    />
                    <div class="flex justify-between q-pt-md">
                        <div
                            class="custom-text text-subtitle2 text-bold cursor-pointer"
                            @click="$router.push({ name: 'loginPage' })"
                        >
                            {{$t('subscriber_login')}}
                        </div>
                    </div>
                </q-form>
            </q-card-section>
            <q-card-section class="q-pt-xl"> </q-card-section>
        </q-card>
    </div>
</template>

<script lang="js">
import {defineComponent, onMounted, reactive, ref} from "vue";
import {useAuthStore} from "stores/auth-store";
import {storeToRefs} from "pinia";
import { useRouter } from "vue-router";



export default defineComponent({
    name: "ForgotPassword",
    setup() {
        const authStore = useAuthStore();
        const {user,permenantUser,authToken} = storeToRefs(authStore);
        const {updatePassword} = authStore
        const router = useRouter();
        onMounted(() => {
            if (authToken.value) {
                router.push({ name: 'homeLogin' });
            }
        })
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

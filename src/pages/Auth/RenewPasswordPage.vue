<template>
    <div class="full-width flex flex-center no-padding">
        <q-card
            class="no-shadow transparent"
            style="height: auto; min-width: 370px; margin-top: 130px"
        >
            <q-card-section class="q-pb-xs">
                <div class="text-primary  text-left cep-sigortam">
                   {{$t('renew_password')}}
                </div>
            </q-card-section>
            <q-card-section class="q-pt-xs">
                <q-form @submit="onSubmit">
                    <q-input
                        v-model="formFields.password"
                        outlined
                        color="#EBEBEB"
                        :label="$t('new_password')"
                        clearable
                        class="q-pt-sm q-pb-sm"
                        lazy-rules
                        type="password"
                        :rules="[val => val.length > 0 || 'Şifre 6 haneli olmalıdır']"
                    />
                    <q-input
                        type="password"
                        v-model="formFields.password_again"
                        outlined
                        color="#EBEBEB"
                        :label="$t('confirm_new_password')"
                        clearable
                        class="q-pt-sm q-pb-sm"
                        lazy-rules
                        :rules="[
                            val => val.length > 0 || $t('password_rules1'),
                            val => val === formFields.password || $t('password_rules2'),
                            ]"
                    />
                    <q-btn
                        color="primary"
                        text-color="white"
                        :label="$t('renew_my_password')"
                        no-caps
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
                            {{$t('subscriber_login')}}
                        </div>
                    </div>
                </q-form>
            </q-card-section>
            <q-card-section class="q-pt-xl"> </q-card-section>
        </q-card>
    </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, ref} from "vue";
import {useAuthStore} from "stores/auth-store";
import {storeToRefs} from "pinia";
import {useRouter} from "vue-router";

export default defineComponent({
    name: "RenewPassword",
    setup() {
        const authStore = useAuthStore();
        const { permenantUser,authToken } = storeToRefs(authStore);
        const { passwordReset } = authStore
        const router = useRouter();
        onMounted(() => {
            if (authToken.value) {
                router.push({ name: 'homeLogin' });
            }
        })
        return {
            test: ref(false),
            formFields: reactive({
                password_again: "",
                password: "",
                errorMessage: "",
            }),
            permanentUser: permenantUser,
            passwordReset,

        };
    },
    methods: {
        onSubmit() {
              let formData = new FormData();
                  formData.append("password", this.formFields.password);
                  formData.append("phone", this.permanentUser.phone);
                  formData.append("id_card", this.permanentUser.id_card);
                  formData.append("smsCode", this.permanentUser.smsCode);
              this.passwordReset(formData);

        },
        validateForm() {

            if (this.formFields.password !== this.formFields.password_again) {
                this.formFields.password_again = "";
                return false;
            }
            this.formFields.errorMessage = "";
            return true;
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

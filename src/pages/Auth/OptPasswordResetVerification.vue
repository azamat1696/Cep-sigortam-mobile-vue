<template>
    <div class="fullscreen flex flex-center no-padding">
        <q-card
            class="no-shadow transparent"
            style="height: auto; min-width: 370px; margin-top: 130px"
        >
            <q-card-section class="q-pb-xs">
                <div class="text-center">
                    <q-icon
                        name="lock"
                        class="bg-primary q-pa-lg"
                        color="white"
                        size="lg"
                        style="border-radius: 50%"
                    />
                </div>
            </q-card-section>
            <q-card-section class="q-pt-xs">
                <q-form class="q-pt-md q-pb-md" @submit="onSubmit">
                    <div
                        class="text-subtitle1 q-pb-lg q-pl-md q-pr-md text-center"
                        style="color: #5e5e5e"
                    >
                        Lütfen telefonunuza gelen 4 haneli şifreyi giriniz.
                    </div>
                    <div class="flex flex-center q-pb-xl q-pt-lg q-pa-lg">
                        <div v-for="item in length" class="q-pa-sm">
                            <q-input
                                v-model="fieldValues[item - 1]"
                                outlined
                                color="#EBEBEB"
                                type="password"
                                @keyup="onKeyUp($event, item - 1)"
                                @update:model-value="onUpdate($event, item - 1)"
                                :key="item"
                                :ref="(el) => updateFieldRef(el, item - 1)"
                                input-class="text-center text-primary text-h4 q-pa-none "
                                style="width: 6ch;"
                                maxlength="1"
                                dense
                            />
                        </div>
                    </div>
                    <div class="q-pt-md">
                        <q-btn
                            color="primary"
                            text-color="white"
                            label="Onay Kodu Al"
                            no-caps
                            class="full-width"
                            style="border-radius: 8px"
                            size="20px"
                            type="submit"
                        />
                    </div>
                    <div class="row q-pt-md">
                        <div class="col-6"></div>
                        <div class="col-6">
                            <q-btn
                                color="primary"
                                text-color="grey-8"
                                label="Giriş"
                                no-caps
                                dense
                                flat
                                class="full-width"
                                padding="none"
                                align="right"
                                size="18px"
                                :to="{ name: 'loginPage' }"
                            />
                        </div>
                    </div>
                </q-form>
            </q-card-section>
            <q-card-section class="q-pt-xl"> </q-card-section>
        </q-card>
    </div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    ref,
    onBeforeUpdate,
    computed,
    watch,

} from "vue";
import {storeToRefs} from "pinia";
import {useRouter} from "vue-router";
import {useAuthStore} from "stores/auth-store";
import {Loading, Notify} from "quasar";



export default defineComponent({
    name: "RenewPassword",
    emits: ["update:modelValue"],
    setup() {
        const length = ref(4);
        const fields = ref([]);
        const fieldValues = ref([]);
        const composite = computed(() => {
            const nonNullField = fieldValues.value.filter((value) => value);
            if (length.value !== nonNullField.length) {
                return "";
            }
            return nonNullField.join("");
        });
        const authStore = useAuthStore();
        const {user,permenantUser} = storeToRefs(authStore);
        const router = useRouter();
        const { passwordResetSms,getUserInfo,resendSmsCode } = authStore;
        watch(composite, () => {
            if (composite.value) {
                //emit('update:modelValue',composite.value)
            }
        });
        const updateFieldRef = (element, index) => {
            if (element) {
                fields.value[index] = element;
            }
        };
        const focus = (index:number) => {
            console.log(index)
            if (index >= 0) {
                if (index < length.value) {
                    fields?.value[index].select();

                } else {
                    if (composite.value) {
                        fields.value[index - 1].blur();
                    }
                }
            }
        };
        const onUpdate = (value:number, index:number) => {

            if (value) {
                focus(+index + 1);
            }
        };

        // make sure to reset the refs before each update
        onBeforeUpdate(() => {
            fields.value = [];
        });
        const onKeyUp = (evnt, index) => {
            const key = evnt.key;

            if (["Tab", "Shift", "Meta", "Control", "Alt"].includes(key)) {
                return;
            }

            if (["Delete"].includes(key)) {
                return;
            }

            if (key === "ArrowLeft" || key === "Backspace") {
                focus(index - 1);
            } else if (key === "ArrowRight") {
                focus(index + 1);
            }
        };

        return {
            test: ref(false),
            formFields: reactive({}),
            fieldValues,
            length,
            onKeyUp,
            onUpdate,
            updateFieldRef,
            router,
            passwordResetSms,
            resendSmsCode,
            getUserInfo,
            user,
            permenantUser
        };
    },
    methods: {
        onSubmit() {

            let formData = new FormData();

            formData.append("smsCode", this.fieldValues.join(''));
            this.permenantUser.smsCode = this.fieldValues.join('');
             formData.append("id_card", this.permenantUser?.id_card);
            formData.append("phone", this.permenantUser.phone);

            this.passwordResetSms(formData)

        },
        onForgotPassword() {
            let formData = new FormData();
            formData.append("phone", this.permenantUser?.phone);

             this.resendSmsCode(formData).then((res) => {

                 if (res === true) {
                      Notify.create({
                         message: "Şifre yenileme kodu gönderildi",
                         color: "positive",
                         position: "top",
                         timeout: 2000,
                        });
                      return
                 }
                    Notify.create({
                        message: "Şifre yenileme kodu gönderilemedi kod süresi geçmemiştir",
                        color: "negative",
                        position: "top",
                        timeout: 2000,
                    });
             }).catch((err) => {
                 Loading.hide();
                 Notify.create({
                     message: "Şifre süresi daha geçmedi.",
                     color: "negative",
                     type: "negative",
                     position: "top",
                     timeout: 2000,
                 });
                 console.log(err)
             });
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

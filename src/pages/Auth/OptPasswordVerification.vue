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
                        class="text-subtitle1 q-pb-lg q-pl-md q-pr-md"
                        style="color: #5e5e5e"
                    >
                        Üyeliğinizi başarılı bir şekilde tamamladınız Artık
                        uygulamaya giriş yapıp kullanabilirsiniz.
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
                                input-class="text-center text-primary text-h3 q-pt-md"
                                style="width: 6ch"
                                maxlength="1"
                                dense
                            />
                        </div>
                    </div>
                    <div class="q-pt-md">
                        <q-btn
                            color="primary"
                            text-color="white"
                            label="Giriş"
                            no-caps
                            class="full-width"
                            style="border-radius: 8px"
                            size="20px"
                            :to="{ name: 'optVerificationSuccessPage' }"
                        />
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
    watchEffect,
} from "vue";
import { emit } from "cluster";
import { Notify } from "quasar";

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
        const focus = (index) => {
            if (index >= 0) {
                if (index < length.value) {
                    fields.value[index].select();
                } else {
                    if (composite.value) {
                        fields.value[index - 1].blur();
                    }
                }
            }
        };
        const onUpdate = (value, index) => {
            if (value) {
                focus(index + 1);
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
        };
    },
    methods: {
        onSubmit() {
            console.log("on submit", this.fieldValues);
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

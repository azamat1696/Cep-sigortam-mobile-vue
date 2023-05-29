<template>
    <div class="fullscreen flex flex-center no-padding">
        <q-card
            class="no-shadow transparent"
            style="height: auto; min-width: 370px; margin-top: 130px"
        >
            <q-card-section class="q-pb-lg">
                <div class="text-center">
                    <q-icon
                        name="done"
                        class="bg-primary q-pa-lg"
                        color="white"
                        size="lg"
                        style="border-radius: 50%"
                    />
                </div>
            </q-card-section>
            <q-card-section class="q-pt-xs">
                <q-form class="q-pt-xs q-pb-md" >
                    <div
                        class="text-subtitle1 q-pb-xl q-pl-md q-pr-md no-wrap text-center"
                        style="color: #5e5e5e"
                    >
                        {{$t('register_success')}}
                    </div>
                    <div class="q-pt-xl q-mt-xl">
                        <q-btn
                            color="primary"
                            text-color="white"
                            :label="$t('login')"
                            no-caps
                            class="full-width"
                            style="border-radius: 8px"
                            size="20px"
                            :to="{ name: 'loginPage' }"
                        />
                    </div>
                </q-form>
            </q-card-section>

        </q-card>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();


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

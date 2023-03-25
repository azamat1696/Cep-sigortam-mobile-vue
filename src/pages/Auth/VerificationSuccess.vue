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
                        class="text-subtitle1 q-pb-xl q-pl-md q-pr-md"
                        style="color: #5e5e5e"
                    >
                        Üyeliğinizi başarılı bir şekilde tamamladınız Artık
                        uygulamaya giriş yapıp kullanabilirsiniz.
                    </div>
                    <div class="q-pt-xl q-mt-xl">
                        <q-btn
                            color="primary"
                            text-color="white"
                            label="Giriş"
                            no-caps
                            class="full-width"
                            style="border-radius: 8px"
                            size="20px"
                            :to="{ name: 'loginPage' }"
                        />
                    </div>
                </q-form>
            </q-card-section>
            <q-card-section class="text-center" v-show="show">
                <q-btn color="primary" no-caps :to="{ name: 'loginPage' }"
                >Giriş</q-btn
                >
            </q-card-section>
        </q-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
setTimeout(() => {
    router.push({ name: "loginPage" });
}, 5000);

let show = ref(false);
setTimeout(() => {
    show.value = true;
}, 3000);
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

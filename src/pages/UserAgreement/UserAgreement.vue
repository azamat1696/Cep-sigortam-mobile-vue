<template>
    <transition-group
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeIn"
    >
<q-layout key="userAgreement" view="hHh lpR fFf">

    <HeaderComponent>
        {{ $t("userAgreement_title") }}
    </HeaderComponent>
    <q-page-container>
        <q-card class="no-shadow">
            <q-card-section>
                 <div class="text-subtitle1 text-weight-bold text-center">
                     {{ $t("userAgreement_title2") }}
                 </div>
            </q-card-section>
            <q-card-section>
                <p class="text-subtitle2 text-weight-normal">
                    {{ $t("userAgreement_body1") }}
                 </p>
                <p>
                    {{ $t("userAgreement_body2") }}
                 </p>
                <p>
                    {{ $t("userAgreement_body3") }}
                </p>
                <div class="text-subtitle1 text-weight-bold text-center">
                    {{ $t("userAgreement_title3") }}
                </div>
            </q-card-section>
            <q-card-section>
                <div class="text-subtitle2 text-weight-normal ">
                    {{ $t("userAgreement_body4") }}
                </div>
                <br>
                <div  class="text-subtitle2 text-weight-normal ">
                    {{ $t("userAgreement_body5") }}
                </div>
            </q-card-section>
        </q-card>
    </q-page-container>
</q-layout>
</transition-group>
</template>

<script>
import HeaderComponent from "components/HeaderComponent.vue";

export default {
    name: "UserAgreement",
    components: {HeaderComponent}
}
</script>

<style scoped>

</style>

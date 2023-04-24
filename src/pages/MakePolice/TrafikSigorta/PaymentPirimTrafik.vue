<!--suppress ALL -->
<template>

                <div  >
                    <div class="text-subtitle1 text-weight-bold text-grey-8  q-pt-md q-pb-sm">
                        {{$t('for_policy_payment')}}
                    </div>
                    <q-list bordered dense style="border-radius: 8px" >
                        <q-expansion-item
                            class="text-grey-8"
                            expand-separator
                            label=" Ferdi Kaza Sigortası "
                            default-opened
                        >
                            <q-card>
                                <q-card-section
                                    class="flex justify-between items-start"
                                >

                                <span style="font-size: 11px"
                                >{{$t('identity_no')}}: {{user.id_card}}</span
                                >
                                </q-card-section>
                                <q-card-section
                                    class="flex justify-between items-start"
                                >
                             <span style="font-size: 11px"
                             >{{$t('name_surname')}}: {{ trafikSigorta.info.KullaniciAdi+'  '+trafikSigorta.info.KullaniciSoyAdi }}</span
                             >
                                </q-card-section>
                                <q-card-section
                                    class="flex justify-between items-start"
                                >
                                <span style="font-size: 12px">
                                    {{$t('start')}} - {{$t('end_date')}}:<br />
                                    {{date.formatDate(trafikSigorta.info.startdate,'DD-MM-YYYY')}} -  {{date.formatDate(trafikSigorta.info.endtdate,'DD-MM-YYYY')}} </span
                                ><span style="font-size: 12px"
                                >{{$t('total_preminum')}}: {{trafikSigorta.BrutPrim}} TL</span
                                >
                                </q-card-section>
<!--                                <q-card-section>-->
<!--&lt;!&ndash;                                    <q-btn&ndash;&gt;-->
<!--&lt;!&ndash;                                        no-caps&ndash;&gt;-->
<!--&lt;!&ndash;                                        outline&ndash;&gt;-->
<!--&lt;!&ndash;                                        style="border-radius: 8px"&ndash;&gt;-->
<!--&lt;!&ndash;                                    >&ndash;&gt;-->
<!--&lt;!&ndash;                                        PDF Olarak Görüntüle&ndash;&gt;-->
<!--&lt;!&ndash;                                    </q-btn>&ndash;&gt;-->
<!--                                </q-card-section>-->
                            </q-card>
                        </q-expansion-item>
                    </q-list>

                    <div class="row q-pt-md">
                        <div class="col-1">
                            <q-checkbox
                                v-model="formField.uyar2"
                                color="primary"
                                dense
                            />
                        </div>
                        <div
                            class="col-11 text-grey-8"
                            style="font-size: 12px"
                        >
                       {{$t('warning_text3')}}
                        </div>
                    </div>
                    <div class="q-pt-md">
                        <q-btn
                            type="submit"
                            color="primary"
                            :label="$t('go_to_payment')"
                            no-caps
                            class="full-width"
                            @click="$emit('goToPayment')"
                            :disable="!formField.uyar2"
                        />
                    </div>
                </div>
</template>

<script setup lang="ts">
import {useTrafikSigortaCreateStore} from "stores/trafik-sigorta-create";
import {useAuthStore} from "stores/auth-store";
import {storeToRefs} from "pinia";
import {reactive} from "vue";
import {date} from "quasar";
const trafikCreateStore = useTrafikSigortaCreateStore();
const authStore = useAuthStore();
const { trafikSigorta } = storeToRefs(trafikCreateStore);
const { user } = storeToRefs(authStore);
const formField = reactive({
  uyar2: false,
})

</script>

<style>
.q-field--outlined .q-field__control {
    border-radius: 8px !important;
}
.q-select__dialog {
    max-height: calc(100vh - 500px) !important;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
}
.q-stepper--horizontal .q-stepper__step-inner {
    padding-top: 0px !important;
}
</style>

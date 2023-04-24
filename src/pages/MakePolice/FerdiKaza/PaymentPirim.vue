<!--suppress ALL -->
<template>
                <div  class="q-pa-xs">
                    <div class="text-subtitle1 text-weight-bold text-grey-8  q-pt-md q-pb-sm">
                        {{$t('for_policy_payment')}}
                    </div>
                    <q-list bordered dense style="border-radius: 8px" >
                        <q-expansion-item
                            class="text-grey-8"
                            expand-separator
                            :label="$t('personel_accident_insurance')"
                            default-opened
                        >
                            <q-card>
                                <q-card-section
                                    class="flex justify-between items-start"
                                >

                                <span style="font-size: 12px"
                                >{{$t('identity_no')}}: {{user.id_card}}</span
                                >
                                </q-card-section>
                                <q-card-section
                                    class="flex justify-between items-start"
                                >
                                    <span style="font-size: 12px"
                                    >{{$t('name_surname')}}: {{ ferdiKaza.info.KullaniciAdi+'  '+ferdiKaza.info.KullaniciSoyAdi }}</span
                                    >
<!--                                <span style="font-size: 12px"-->
<!--                                >{{$t('commercial_paper_no')}}: *******</span-->
<!--                                ><span style="font-size: 12px"-->
<!--                                >{{$t('renew_count')}} :0</span-->
<!--                                >-->
                                </q-card-section>
                                <q-card-section
                                    class="flex justify-between items-start"
                                >
                                <span style="font-size: 12px">
                                    {{$t('start')}} - {{$t('end_date')}}:<br />
                                    {{date.formatDate(ferdiKaza.info.startdate,'DD-MM-YYYY')}} -  {{date.formatDate(ferdiKaza.info.endtdate,'DD-MM-YYYY')}} </span
                                ><span style="font-size: 12px"
                                >Toplam Prim: {{ferdiKaza.BrutPrim}} TL</span
                                >
                                </q-card-section>
                                <q-card-section>
<!--                                    <q-btn-->
<!--                                        no-caps-->
<!--                                        outline-->
<!--                                        style="border-radius: 8px"-->
<!--                                    >-->
<!--                                        PDF Olarak Görüntüle-->
<!--                                    </q-btn>-->
                                </q-card-section>
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
                            :to="{ name: 'FerdiKazaPayment' }"
                            :disable="!formField.uyar2"
                        />
                    </div>
                </div>
</template>

<script setup lang="ts">
import {useFerdiKazaCreateStore} from "stores/ferdi-kaza-create";
import {useAuthStore} from "stores/auth-store";
import {storeToRefs} from "pinia";
import {reactive} from "vue";
import {date} from "quasar";
const ferdiKazaCreateStore = useFerdiKazaCreateStore();
const authStore = useAuthStore();
const { ferdiKaza } = storeToRefs(ferdiKazaCreateStore);
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

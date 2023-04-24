<!--suppress ALL -->
<template>
       <q-card class="no-shadow ">
           <q-card-section class="q-pt-md">
                <div class="text-subtitle1 text-center text-weight-bold q-pt-md text-grey-7">{{$t('calculated_premium')}}</div>
           </q-card-section>
           <q-card-section class="no-padding">
               <div class="row">
                   <div class="col-12 row q-pb-md">
                        <div class="col-12 custom-border text-grey-7 text-subtitle1">
                            {{trafikSigorta?.BrutPrim}} TL
                        </div>
                   </div>
<!--                   <div class="col-12 row text-grey-7 q-pl-xs q-pr-xs">-->
<!--                      <div class="col-6">Sigota Teminati</div>-->
<!--                      <div class="col-6 text-right">Teminat bedeli</div>-->
<!--                   </div>-->
<!--                   <div class="col-12 row q-pt-xs">-->
<!--                       <div class="col-12 custom-border row text-grey-7 text-subtitle1">-->
<!--                           <div class="col-6">Ölüm</div>-->
<!--                           <div class="col-6 text-right">{{trafikSigorta.info?.TeminatLimiti}} TL</div>-->
<!--                       </div>-->
<!--                   </div>-->
<!--                   <div class="col-12 row q-pt-md">-->
<!--                       <div class="col-12 custom-border row text-grey-7 text-subtitle1">-->
<!--                           <div class="col-8 ">Sürekli Sakatlık Teminatı</div>-->
<!--                           <div class="col-4 text-right">{{trafikSigorta.info?.TeminatLimiti}} TL</div>-->
<!--                       </div>-->
<!--                   </div>-->
               </div>
<!--               <div class="row">-->
<!--                   <div class="col-12 q-pb-sm">-->
<!--                       <q-input-->
<!--                           outlined-->
<!--                           readonly-->
<!--                           v-model="formField.sigortaTeminati"-->
<!--                           prefix="TL"-->
<!--                       />-->

<!--                   </div>-->
<!--                   <div class="col-12">-->
<!--                       <div class="row col-12 q-pb-sm">-->
<!--                           <div class="col-6">-->
<!--                               <div class="text-subtitle1 text-grey-7">-->
<!--                                   Sigota Teminati-->
<!--                               </div>-->
<!--                           </div>-->
<!--                           <div class="col-6">-->
<!--                              <div class="text-subtitle1 text-grey-7 text-right">-->
<!--                                  Teminat bedeli-->
<!--                              </div>-->
<!--                           </div>-->
<!--                       </div>-->
<!--                       <div class="col-12 q-pb-sm">-->
<!--                           <q-input-->
<!--                               outlined-->
<!--                               readonly-->
<!--                               label="Ölüm"-->
<!--                                 v-model="formField.olum"-->
<!--                               prefix="TL"-->
<!--                           />-->
<!--                       </div>-->
<!--                       <div class="col-12">-->
<!--                           <q-input-->
<!--                               outlined-->
<!--                               readonly-->
<!--                               label="Sürekli Sakatlık Teminatı"-->
<!--                               v-model="formField.surekliSakatlik"-->
<!--                               prefix="TL"-->
<!--                           >-->
<!--                           </q-input>-->
<!--                       </div>-->
<!--                   </div>-->
<!--               </div>-->
           </q-card-section>
<!--           <q-card-section>-->
<!--               <q-btn-->
<!--                   color="primary"-->
<!--                   :label="$t('forward')"-->
<!--                   no-caps-->
<!--                   class="full-width"-->
<!--                   :to="{name:'TrafikSigortaPaymentPirim'}"-->
<!--               />-->
<!--           </q-card-section>-->
       </q-card>

</template>

<script setup lang="ts">
import {reactive,ref} from "vue";
import { storeToRefs } from "pinia";
import {useTrafikSigortaCreateStore} from "stores/trafik-sigorta-create";
const cresteTrafikSigorta = useTrafikSigortaCreateStore()
const {trafikSigorta} = storeToRefs(cresteTrafikSigorta)


</script>

<style>
.custom-border{
    border: 1px solid #e0e0e0;
    border-radius:8px;
    padding: 15px;
}
</style>

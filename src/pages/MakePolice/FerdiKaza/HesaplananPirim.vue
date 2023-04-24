<!--suppress ALL -->
<template>

       <q-card class="no-shadow q-pt-lg">

           <q-card-section  class="no-padding">
               <div class="row">
                   <div class="col-12 row q-pb-md">
                        <div class="col-12 custom-border text-grey-7 text-subtitle1">
                            {{ferdiKaza.BrutPrim}} TL
                        </div>
                   </div>
                   <div class="col-12 row text-grey-7 q-pl-xs q-pr-xs">
                      <div class="col-6">{{$t('insurance_teminati')}}</div>
                      <div class="col-6 text-right">{{$t('teminat_bedeli')}}</div>
                   </div>
                   <div class="col-12 row q-pt-xs">
                       <div class="col-12 custom-border row text-grey-7 text-subtitle1">
                           <div class="col-6">{{$t('death')}}</div>
                           <div class="col-6 text-right">{{ferdiKaza.info.TeminatLimiti}} TL</div>
                       </div>
                   </div>
                   <div class="col-12 row q-pt-md">
                       <div class="col-12 custom-border row text-grey-7 text-subtitle1">
                           <div class="col-8 ">{{$t('permenant_disability_teminati')}}</div>
                           <div class="col-4 text-right">{{ferdiKaza.info.TeminatLimiti}} TL</div>
                       </div>
                   </div>
                   <div class="col-12 row q-pt-md">
                       <div class="col-12 custom-border row text-grey-7 text-subtitle1">
                           <div class="col-8 ">{{$t('earthquake_teminati')}}</div>
                           <div class="col-4 text-right">{{ferdiKaza.info.TeminatLimiti}} TL</div>
                       </div>
                   </div>
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
<!--                   :to="{name:'FerdiKazaPaymentPirim'}"-->
<!--               />-->
<!--           </q-card-section>-->
       </q-card>


</template>

<script setup lang="ts">
import {reactive,ref} from "vue";
import {useFerdiKazaCreateStore} from "stores/ferdi-kaza-create";
import { storeToRefs } from "pinia";
const ferdiKazaCreate  = useFerdiKazaCreateStore();
const { ferdiKaza } = storeToRefs(ferdiKazaCreate);

</script>

<style>
.custom-border{
    border: 1px solid #e0e0e0;
    border-radius:8px;
    padding: 15px;
}
</style>

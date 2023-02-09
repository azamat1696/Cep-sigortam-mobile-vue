<template>
  <q-layout view="lHh Lpr lFf"  >
    <q-header reveal elevated  >
      <q-toolbar>
        <q-avatar size="sm">
          <q-icon name="chevron_left" @click="$router.push({name:'home'})"  size="md" class="cursor-pointer"/>
        </q-avatar>
        <q-toolbar-title class="text-subtitle2 text-bold text-center">Kasko</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
  <div class="q-pt-sm">

    <q-stepper
      v-model="step"
      header-nav
      ref="stepper"
      color="primary"
      active-icon="none"
      done-icon="none"
      animated
      class="no-shadow"
      header-class="no-border"

    >
      <q-step
         :name="1"
         :prefix="1"
         title=""
         :done="step > 1"
        :header-nav="step > 1"
         style="min-height: 200px;"
        >
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
        >
          <q-input
            dense
            outlined
            v-model="formFields.KullaniciAdi"
            label="Adi "
            hide-bottom-space
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Lutfen adinizi giriniz']"
          />
          <q-input
            dense
            outlined
            v-model="formFields.KullaniciSoyAdi"
            label="SoyAdi"
            hide-bottom-space
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Lutfen soyadinizi giriniz']"
          />
          <q-input
            dense
            outlined
            v-model="formFields.MusteriTcKimlikNo"
            label="Kimlik No"
            hide-bottom-space
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Lutfen Kimlik No giriniz']"
          />

          <q-input
            v-model="formFields.MusteriDogumTarihi"
            outlined
            dense
            hide-bottom-space
            label="Doğum Tarihi">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer"  >
                 <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-date v-model="formFields.MusteriDogumTarihi" mask="DD / MM /YYYY">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Kapat" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <div class="row no-wrap justify-between">
           <div class="col-3 q-my-auto">
             <label class="text-no-wrap  text-center ">Plaka No</label>
           </div>
            <div class=" col-9 row">
              <div  class="col-4">
                <q-input
                  dense
                  outlined
                  v-model="formFields.AracPlaka1"
                  hide-bottom-space
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || ' ']"
                  class="q-mr-xs q-ml-xs"

                />
              </div>
              <div class="col-4">
                <q-input
                  dense
                  outlined
                  v-model="formFields.AracPlaka2"
                  hide-bottom-space
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || ' ']"
                  class="q-ml-xs q-mr-xs"
                  autogrow
                 />
              </div>
              <div class="col-4">
                <q-select
                  outlined
                  v-model="formFields.AracPlakaIlKodu"
                  :options="aracPlakaIlKoduOptions"
                  :option-label="option => option.label"
                  option-value="value"
                  dense
                  options-dense
                  hide-bottom-space
                  class="q-ml-xs"
                  behavior="menu"
                />
              </div>
            </div>
          </div>

          <q-input
            dense
            outlined
            v-model="formFields.MusteriDogumYeri"
            label="Doğum Yeri"
            hide-bottom-space
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Lutfen doğum yeri giriniz']"
          />
          <q-select
            outlined
            v-model="formFields.MusteriCinsiyet"
            :options="genderOptions"
            :option-label="option => option.label"
            option-value="value"
            label="Cinsiyet"
            dense
            hide-bottom-space
            behavior="menu"
          />
          <q-select
            outlined
            v-model="formFields.MusteriUyruk"
            :options="countriesOptions"
            :option-label="(item) => item.Aciklama"
            option-value="id"
            emit-value
            map-options
            use-input
            input-debounce="0"
            options-dense
            label="Ulke"
            dense
            hide-bottom-space
            clearable
            @filter="filterCountries"
            behavior="menu"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  No results
                </q-item-section>
              </q-item>
            </template>
          </q-select>

          <q-select
            outlined
            v-model="formFields.AracMarka"
            :options="aracMarkaOptions"
            :option-label="(item) => item.Marka_Adi"
            option-value="id"
            emit-value
            map-options
            use-input
            input-debounce="0"
            options-dense
            label="Aracin Markasi"
            dense
            hide-bottom-space
            clearable
            @filter="filterAracMarka"
            @update:model-value="onAracMarkaUpdated"
            behavior="menu"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  No results
                </q-item-section>
              </q-item>
            </template>
          </q-select>
          <q-select
            outlined
            v-model="formFields.AracTipi"
            :options="aracTipiOptions"
            :option-label="(item) => item.Tip_Adi"
            option-value="id"
            emit-value
            map-options
            use-input
            input-debounce="0"
            options-dense
            label="Aracin Modeli"
            dense
            hide-bottom-space
            clearable
            @filter="filterAracMarka"
            behavior="menu"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  No results
                </q-item-section>
              </q-item>
            </template>
          </q-select>

          <q-input
            dense
            outlined
            v-model.number="formFields.AracModelYili"
            type="number"
            label="Model Yili"
            hide-bottom-space
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Lutfen Model Yili giriniz']"
          />

        </q-form>


        <q-stepper-navigation>
          <q-btn @click="() => { done1 = true; step = 2 }" color="primary" label="Ilerle" no-caps class="full-width" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        prefix="2"
        title=""
        :done="step > 2"
        :header-nav="step > 2"
        style="min-height: 200px;"
      >
        An ad group contains one or more ads which target a shared set of keywords.

        <q-stepper-navigation>
          <q-btn @click="() => { done2 = true; step = 3 }" color="primary"  label="İlerle" no-caps class="full-width" />
<!--          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />-->
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        prefix="3"
        title=""
        :header-nav="step > 3"
        style="min-height: 200px;"
      >
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.

        <q-stepper-navigation>
          <q-btn color="primary" @click="done3 = true" label="Teklif Al"  no-caps class="full-width"/>
<!--          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />-->
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">

import {ref} from 'vue'
import {useMainStore} from "../../stores/main-store";
import { storeToRefs } from "pinia"

const {countries: countries, aracMarka :aracMarka, aracTipi:aracTipi } = storeToRefs(useMainStore())
const { countriesGet, aracMarkaGet,aracTipiGet } = useMainStore()
countriesGet()
aracMarkaGet()

const genderOptions = [
  {value: 'Erkek', label:'Erkek'},
  {value: 'Kadın', label:'Kadın'}
]
const aracPlakaIlKoduOptions = [
  {value:'KKTC',label:'KKTC'},
  {value:'TC',label:'TC'},
  {value:'DİĞER',label:'DİĞER'}
]

 let countriesOptions =ref(countries.value)
 let aracMarkaOptions = ref(aracMarka.value)
 let aracTipiOptions = ref(aracTipi.value)

 const filterCountries = (val : any, update: any) => {

  if (val === '')
  {
    update(() => {
      countriesOptions.value =  countries.value
    })
    return
  }
  update(() => {
    const needle = val.toLowerCase()
    countriesOptions.value = countries.value.filter(v => v.Aciklama.toLowerCase().indexOf(needle) > -1)
  })

}
 const filterAracMarka = (val: any, update: any) => {

  if (val  === ''){
    update(() => {
      aracMarkaOptions.value = aracMarka.value
    })
    return
  }
   update(() => {
     const needle = val.toLowerCase()
     aracMarkaOptions.value = aracMarka.value.filter(v => v.Marka_Adi.toLowerCase().indexOf(needle) > -1)
   })
 }
 const onAracMarkaUpdated = (id: number ) => {
  if (!id){
    aracTipiOptions = ref([])
    return
  }
   aracTipiGet(id)
   aracTipiOptions = ref(aracTipi.value)
 }
const  step = ref(1)
 const formFields = ref({
   KullaniciAdi: '',
   KullaniciSoyAdi: '',
   MusteriTcKimlikNo: '',
   MusteriDogumYeri: '',
   MusteriCinsiyet: '',
   MusteriUyruk: '',
   MusteriDogumTarihi: '',
   AracPlaka1: '',
   AracPlaka2: '',
   AracPlakaIlKodu: '', // select box
   AracMarka: '', // select box
   AracTipi: '', // select box
   AracModelYili: '', // select box
   AracTarz: '', // select box
   _YakitTipi: '', // select box
   Motor_cc: '',
   AracBedeli: '',
   ipotekli: '',
   AracMotorNo: '',
   AracSasiNo: '',
   AracDireksiyonTarafi: '',// select box
   _AracVitesBilgisi: '',// select box
   MusteriIlceKodu: '',// select box
   MusteriBucakKodu: '',// select box
   MusteriBelediyeKodu: '',// select box
   MusteriMahalleKodu: '',// select box
   MusteriCSBMKodu: '',// select box
   MusteriApartmanAdi: '',//
   MusteriApartmanNo: '',// input
   MusteriCepTelefonNo: '',// input
   MusteriEPosta: '',// input
   AcenteNo: '',// input
   uyar: '',// 'accepted'
   right: true,
   date: '',
   Aciklama: ''
})

const onSubmit = () => {

}
const onReset = () => {

}

</script>

<style>
.q-field--outlined .q-field__control {
  border-radius: 8px !important;

}
.q-select__dialog {
  max-height: calc(100vh - 500px) !important;
}

input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>

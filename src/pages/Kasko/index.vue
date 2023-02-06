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
            v-model="formFields.name"
            label="Kimlik No"
            hide-bottom-space
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Lutfen Kimlik No giriniz']"
          />

          <q-input  v-model="formFields.date" outlined dense hide-bottom-space label="Doğum Tarihi">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer"  >
                 <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-date v-model="formFields.date" mask="DD-MM-YYYY">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Kapat" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input
            dense
            outlined
            v-model="formFields.name"
            label="Doğum Yeri"
            hide-bottom-space
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Lutfen doğum yeri giriniz']"
          />
          <q-select outlined v-model="formFields.MusteriCinsiyet" :options="genderOptions" label="Cinsiyet" dense hide-bottom-space />
<!--          <q-checkbox v-model="formFields.right" label="TC Vatandasiyim" dense/>-->
          <q-select
            outlined
            v-model="formFields.id"
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
            behavior="dialog"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  No results
                </q-item-section>
              </q-item>
            </template>
          </q-select>

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
          <q-btn @click="() => { done2 = true; step = 3 }" color="primary" label="Ilerle" no-caps class="full-width" />
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

<script setup>

import {ref} from 'vue'
import {useMainStore} from "../../stores/main-store";
import { storeToRefs } from "pinia"

const { countries } = storeToRefs(useMainStore())
const { countriesGet } = useMainStore()
countriesGet()

const genderOptions =['Erkek', 'Kadın']
 let countriesOptions =ref(countries.value)
const loading = ref(false)
const filterCountries = (val, update) => {

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


  // update(() => {
  //   const needle = val.toLowerCase()
  //   if (needle) {
  //       countriesOptions.value = countries.value.filter(v => v.Aciklama.toLowerCase().indexOf(needle) > -1)
  //   } else {
  //       countriesOptions.value = []
  //   }
  // })
}


const  step = ref(1)
 const formFields = ref({
   KullaniciAdi: '',
   KullaniciSoyAdi: '',
   MusteriTcKimlikNo: '',
   MusteriDogumTarihi: '',
   MusteriDogumYeri: '',
   MusteriCinsiyet: '',
   MusteriUyruk: '',
    right: true,
  date: '',
   Aciklama: ''
})

</script>

<style>
.q-field--outlined .q-field__control {
  border-radius: 8px !important;

}
.q-select__dialog {
  max-height: calc(100vh - 500px) !important;
}
</style>

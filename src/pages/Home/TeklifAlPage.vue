<template>
  <q-layout view="lHh Lpr lFf"  >
  <q-header reveal elevated  >
    <q-toolbar>
      <q-avatar size="sm">
        <q-icon name="chevron_left" @click="$router.push({name:'homeLogin'})"  size="md" class="cursor-pointer"/>
      </q-avatar>
      <q-toolbar-title class="text-subtitle2 text-bold text-center">Teklif Al</q-toolbar-title>
    </q-toolbar>
  </q-header>
    <q-page-container>
    <q-list>

      <q-item clickable class="q-pa-lg">
        <q-item-section avatar>
          <img src="~assets/car.png" style="width: 24px;height: 24px;object-fit: contain" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Trafik Sigortası</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator inset />
      <q-item clickable class="q-pa-lg">
        <q-item-section avatar>
          <q-img src="~assets/umbrella.png" style="width: 24px;height: 24px;object-fit: contain" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Kasko Sigortası</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator inset />
      <q-item clickable class="q-pa-lg">
        <q-item-section avatar>
          <q-img src="~assets/cottage.png" style="width: 24px;height: 24px;object-fit: contain" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Konut Sigortası</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator inset />
      <q-item clickable class="q-pa-lg">
        <q-item-section avatar>
          <img src="~assets/car_crash.png" style="width: 26px;height: 26px;object-fit: contain" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Ferdi Kaza Sigortası</q-item-label>
        </q-item-section>
      </q-item>
     </q-list>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "TeklifAlPage"
}
</script>

<style scoped>

</style>

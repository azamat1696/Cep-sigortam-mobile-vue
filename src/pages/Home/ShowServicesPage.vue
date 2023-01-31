<template>
  <q-layout view="lHh Lpr lFf"  >
  <q-header reveal elevated  >
    <q-toolbar>
      <q-avatar size="sm">
        <q-icon name="chevron_left" @click="$router.push({name:'homeLogin'})"  size="md" class="cursor-pointer"/>
      </q-avatar>
      <q-toolbar-title class="text-subtitle2 text-bold text-center">Servisler</q-toolbar-title>
    </q-toolbar>
  </q-header>
    <q-page-container>
      <div class="q-pa-md">
        <div class="q-gutter-y-md" style="max-width: 600px">
          <q-card class="no-shadow">
            <q-tabs
              v-model="tab"
              dense
              class="text-grey-9 no-shadow"
              active-color="white"
              active-bg-color="primary"
              indicator-color="transparent"
              align="justify"
              no-caps
              style="border: 1px solid #D6D6D6;border-radius: 8px;font-size: 8px"
              swipeable
            >
              <q-tab name="allTab" label="Hepsi" class="q-pa-xs"/>
              <q-separator vertical/>
              <q-tab name="nicosiaTab" label="Lefkoşa" class="q-pa-xs"/>
              <q-separator vertical/>
              <q-tab name="girneTab" label="Girne" class="q-pa-xs"/>
              <q-separator vertical/>
              <q-tab name="guzelyurtTab" label="Güzelyurt" class="q-pa-xs"/>
              <q-separator vertical/>
              <q-tab name="magusaTab" label="Mağusa" class="q-pa-xs"/>
            </q-tabs>

            <q-tab-panels v-model="tab" animated class="no-padding">
              <q-tab-panel name="allTab" class="q-pl-none q-pr-none">

                  <q-expansion-item
                    expand-separator
                    label="Account settings"
                    expand-icon="add"
                    expanded-icon="remove"
                    expand-icon-class="transition"
                    class="q-pl-none q-pr-none q-mr-lg"
                    >
                    <q-card class="no-padding">
                      <q-card-section>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>

              </q-tab-panel>

              <q-tab-panel name="nicosiaTab">
                <div class="text-h6">Lefkosa</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="girneTab">
                <div class="text-h6">Girne</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="guzelyurtTab">
                <div class="text-h6">Guzelyurt</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>
              <q-tab-panel name="magusaTab">
                <div class="text-h6">Magusa</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>
            </q-tab-panels>
          </q-card>

        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "ShowServicesPage",
  setup(){
    return{
      tab: ref('allTab')
    }
  }
}
</script>

<style scoped>
.q-tab__label{
  font-size: 10px;
}

</style>

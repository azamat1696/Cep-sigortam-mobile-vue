<template>
    <q-layout view="lHh Lpr lFf">
        <q-header reveal elevated>
            <q-toolbar>
                <q-avatar size="sm">
                    <q-icon
                        name="chevron_left"
                        @click="$router.push({ name: 'homeLogin' })"
                        size="md"
                        class="cursor-pointer"
                    />
                </q-avatar>
                <q-toolbar-title class="text-subtitle2 text-bold text-center"
                    >{{$t('services')}}</q-toolbar-title
                >
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
                            style="
                                border: 1px solid #d6d6d6;
                                border-radius: 8px;
                                font-size: 8px;
                            "
                            swipeable
                        >
                            <q-tab
                                name="allTab"
                                :label="$t('all')"
                                class="q-pa-xs"
                            />
                            <q-separator vertical />
                            <q-tab
                                name="nicosiaTab"
                                label="Lefkoşa"
                                class="q-pa-xs"
                            />
                            <q-separator vertical />
                            <q-tab
                                name="girneTab"
                                label="Girne"
                                class="q-pa-xs"
                            />
                            <q-separator vertical />
                            <q-tab
                                name="guzelyurtTab"
                                label="Güzelyurt"
                                class="q-pa-xs"
                            />
                            <q-separator vertical />
                            <q-tab
                                name="magusaTab"
                                label="Mağusa"
                                class="q-pa-xs"
                            />
                        </q-tabs>

                        <q-tab-panels v-model="tab" animated class="no-padding">
                            <q-tab-panel
                                name="allTab"
                                class="q-pl-none q-pr-none"
                            >
                               <div v-for="item in allServices">
                                   <q-expansion-item
                                       group="cities"
                                       expand-separator
                                       :label="item.name"
                                       expand-icon="add"
                                       expanded-icon="remove"
                                       expand-icon-class="transition"
                                       header-class="q-pl-xs q-pr-xs no-border text-subtitle2 text-bold text-grey-9"
                                   >
                                       <q-card class="no-padding no-shadow">
                                           <q-card-section class="q-pl-xs q-pr-xs">
                                               <div
                                                   class="text-caption text-grey-9"
                                                   style="font-size: 12px"
                                               >
                                                   {{ item.address }}
                                               </div>
                                               <div
                                                   class="text-caption text-grey-9"
                                                   style="font-size: 12px"
                                                   v-show="item?.email"
                                               >
                                                   {{ item?.email }}
                                               </div>
                                               <div
                                                   class="text-caption text-grey-9"
                                                   style="font-size: 12px"
                                               >
                                                    {{ item.phone }}
                                               </div>
                                           </q-card-section>
                                       </q-card>
                                   </q-expansion-item>
                                   <q-separator />
                               </div>

                            </q-tab-panel>

                            <q-tab-panel
                                name="nicosiaTab"
                                class="q-pl-none q-pr-none"
                            >
                         <div v-for="item in allServices.filter(i => i.city === 'Lefkoşa')">
                             <q-expansion-item
                                 group="cities"
                                 expand-separator
                                 :label="item.name"
                                 expand-icon="add"
                                 expanded-icon="remove"
                                 expand-icon-class="transition"
                                 header-class="q-pl-xs q-pr-xs no-border text-subtitle2 text-bold text-grey-9"
                             >
                                 <q-card class="no-padding no-shadow">
                                     <q-card-section class="q-pl-xs q-pr-xs">
                                         <div
                                             class="text-caption text-grey-9"
                                             style="font-size: 12px"
                                         >
                                                {{ item.address }}
                                         </div>
                                         <div
                                             class="text-caption text-grey-9"
                                             style="font-size: 12px"
                                             v-show="item?.email"
                                         >
                                                {{ item?.email }}
                                         </div>
                                         <div
                                             class="text-caption text-grey-9"
                                             style="font-size: 12px"
                                         >
                                                {{ item.phone }}
                                         </div>
                                     </q-card-section>
                                 </q-card>
                             </q-expansion-item>
                             <q-separator />
                         </div>
                            </q-tab-panel>

                            <q-tab-panel
                                name="girneTab"
                                class="q-pl-none q-pr-none"
                            >
                               <div v-for="item in allServices.filter(item =>( item.city === 'Girne'))">
                                   <q-expansion-item
                                       group="cities"
                                       expand-separator
                                       :label="item.name"
                                       expand-icon="add"
                                       expanded-icon="remove"
                                       expand-icon-class="transition"
                                       header-class="q-pl-xs q-pr-xs no-border text-subtitle2 text-bold text-grey-9"
                                   >
                                       <q-card class="no-padding no-shadow">
                                           <q-card-section class="q-pl-xs q-pr-xs">
                                               <div
                                                   class="text-caption text-grey-9"
                                                   style="font-size: 12px"
                                               >
                                                  {{ item.address }}
                                               </div>
                                               <div
                                                   class="text-caption text-grey-9"
                                                   style="font-size: 12px"
                                                   v-show="item?.email"
                                               >
                                                   {{ item?.email }}
                                               </div>
                                               <div
                                                   class="text-caption text-grey-9"
                                                   style="font-size: 12px"

                                               >
                                                   {{ item.phone }}
                                               </div>
                                           </q-card-section>
                                       </q-card>
                                   </q-expansion-item>
                                   <q-separator />
                               </div>
                            </q-tab-panel>

                            <q-tab-panel
                                name="guzelyurtTab"
                                class="q-pl-none q-pr-none"
                            >
                                <div v-for="item in allServices.filter(item =>( item.city === 'Güzelyurt'))">
                                <q-expansion-item
                                    group="cities"
                                    expand-separator
                                    :label="item.name"
                                    expand-icon="add"
                                    expanded-icon="remove"
                                    expand-icon-class="transition"
                                    header-class="q-pl-xs q-pr-xs no-border text-subtitle2 text-bold text-grey-9"
                                >
                                    <q-card class="no-padding no-shadow">
                                        <q-card-section class="q-pl-xs q-pr-xs">
                                            <div
                                                class="text-caption text-grey-9"
                                                style="font-size: 12px"
                                            >
                                                 {{ item.address }}
                                            </div>
                                            <div
                                                class="text-caption text-grey-9"
                                                style="font-size: 12px"
                                                v-show="item?.email"
                                            >
                                                {{ item?.email }}
                                            </div>
                                            <div
                                                class="text-caption text-grey-9"
                                                style="font-size: 12px"
                                            >
                                                {{ item?.phone }}
                                            </div>
                                        </q-card-section>
                                    </q-card>
                                </q-expansion-item>
                                <q-separator />
                                </div>
                            </q-tab-panel>
                            <q-tab-panel
                                name="magusaTab"
                                class="q-pl-none q-pr-none"
                            >
                                <div v-for="item in allServices.filter(item =>( item.city === 'Mağusa'))">
                                <q-expansion-item
                                    group="cities"
                                    expand-separator
                                    :label="item.name"
                                    expand-icon="add"
                                    expanded-icon="remove"
                                    expand-icon-class="transition"
                                    header-class="q-pl-xs q-pr-xs no-border text-subtitle2 text-bold text-grey-9"
                                >
                                    <q-card class="no-padding no-shadow">
                                        <q-card-section class="q-pl-xs q-pr-xs">
                                            <div
                                                class="text-caption text-grey-9"
                                                style="font-size: 12px"
                                            >
                                                {{ item.address }}
                                            </div>
                                            <div
                                                class="text-caption text-grey-9"
                                                style="font-size: 12px"
                                                v-show="item?.email"
                                            >
                                                {{ item?.email }}
                                            </div>
                                            <div
                                                class="text-caption text-grey-9"
                                                style="font-size: 12px"
                                            >
                                                {{ item?.phone }}
                                            </div>
                                        </q-card-section>
                                    </q-card>
                                </q-expansion-item>
                                <q-separator />
                                </div>
                            </q-tab-panel>
                        </q-tab-panels>
                    </q-card>
                </div>
            </div>
        </q-page-container>
    </q-layout>
</template>

<script>
import { ref } from "vue";
export default {
    name: "ShowServicesPage",
    setup() {
        const allServices = [
            {
                city: "Lefkoşa",
                name: "Almel Ticaret Ltd.",
                address: "Organize Sanayi Bölgesi, 29. Sokak, Lefkoşa",
                phone: "+90 533 887 25 73",
            },
            {
                city: "Girne",
                name: "Aventura Rent A Car Ltd.",
                address: "Karaoğlanoğlu Sanayi Bölgesi, No:5, Girne",
                phone: "+90 533 872 42 42",
            },
            {
                city: "Mağusa",
                name: "Barış Yuca Motors Ltd.",
                address: "Büyük Sanayi Bölgesi, 4. Sokak, Mağusa",
                phone: "+90 542 875 42 42",
            },
            {
                city: "Girne",
                name: "Berkay Otomotiv Şti. Ltd.",
                address: "Hazreti Ömer Caddesi, Gilanlı Center, No:3, Ozanköy",
                phone: "+90 533 872 42 42",
            },
            {
                city: "Mağusa",
                name: "Carline Otomotiv Ltd.",
                address: "Şehit İbrahim Hasan Sokak, Küçük Sanayi Bölgesi, Mağu",
                phone: "+90 533 884 10 00",
            },
            {
                city: "Lefkoşa",
                name: "Cinno Ticaret Şti. Ltd.",
                address: "Organize Sanayi Bölgesi, 23. Sokak, No:1, Lefkoşa",
                phone: "+90 533 861 96 36",
            },
            {
                city: "Girne",
                name: "Erdoğuş İşletmeleri Ltd.",
                address: "Karaoğlanoğlu Küçük Sanayi Bölgesi, 7/A, Girne",
                phone: "+90 533 862 41 97",
            },
            {
                city: "Lefkoşa",
                name: "Halpent Ltd.(Otoform)",
                address: "Lefkoşa Organize Sanayi Bölgesi Lefkoşa, Kıbrıs",
                email: "otoformservisltd@gmail.com",
                phone: "+90533 828 06 66",
            },
            {
                city: "Lefkoşa",
                name: "İntercity Trading Ltd.",
                address: "Dr. Fazıl Küçük Caddesi (Toyota Ercantan plaza) Lefkoşa, Kıbrıs",
                email: "hasar@ercantangroup.com",
                phone: "+90 0392 225 45 02",
            },
            {
                city: "Güzelyurt",
                name: "Osman Armut Oto Kaporta",
                address: "Sanayi Sitesi, Güzelyurt/Kıbrıs",
                email: "",
                phone: "+90542 886 22 71",
            },
            {
                city: "Lefkoşa",
                name: "Özmerhan Otomotiv Ltd.",
                address: "Dr. Fazıl Küçük Bulvarı Opel Plaza Lefkoşa, Kıbrıs",
                email: "hasar@opelcyprus.com",
                phone: "+90 0392 444 06 35",
            },
            {
                city: "Lefkoşa",
                name: "Percinci's Auto Repair Center Ltd.",
                address: "3.Cadde 6.Sokak Alayköy, Kıbrıs",
                email: "hasar@ercantangroup.com",
                phone: "+90 542 851 14 42",
            },
            {
                city: "Lefkoşa",
                name: "Rese Repair Systems Ltd.",
                address: "Organize Sanayi Bölgesi, 1. Cadde, No:17, Lefkoşa",
                email: "",
                phone: "+90 392 444 11 77",
            },
            {
                city: "Lefkoşa",
                name: "Şanko Ltd.",
                address: "Lefkoşa-Mağusa Anayolu üzeri, No:99, Minareliköy, Lefkoşa",
                email: "",
                phone: "+90 542 851 35 96",
            },
            {
                city: "Lefkoşa",
                name: "Tabur Garaj Ltd.",
                address: "Fazıl Küçük Bulvarı Ektam Yanı, No:1 Taşkınköy, Lefkoşa",
                email: "",
                phone: "+90 533 869 88 04",
            }


        ]
        return {
            tab: ref("allTab"),
            allServices,
        };
    },
};
</script>

<style scoped>
.q-tab__label {
    font-size: 10px;
}
</style>

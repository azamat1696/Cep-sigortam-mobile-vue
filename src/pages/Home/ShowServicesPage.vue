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
                    >Servisler</q-toolbar-title
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
                                label="Hepsi"
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
                                <q-expansion-item
                                    group="cities"
                                    expand-separator
                                    label="Almel Ticaret Ltd."
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
                                                Organize Sanayi Bölgesi, 29.
                                                Sokak, Lefkoşa
                                            </div>
                                            <div
                                                class="text-caption text-grey-9"
                                                style="font-size: 12px"
                                            >
                                                +90 533 887 25 73
                                            </div>
                                        </q-card-section>
                                    </q-card>
                                </q-expansion-item>
                                <q-separator />
                                <q-expansion-item
                                    group="cities"
                                    expand-separator
                                    label="Rese Repair Systems Ltd."
                                    expand-icon="add"
                                    expanded-icon="remove"
                                    expand-icon-class="transition"
                                    header-class="q-pl-xs q-pr-xs no-border text-subtitle2  text-bold text-grey-9"
                                >
                                    <q-card class="no-padding no-shadow">
                                        <q-card-section
                                            class="q-pl-xs q-pr-xs"
                                            style="font-size: 12px"
                                        >
                                            <div
                                                class="text-caption text-grey-9"
                                            >
                                                Organize Sanayi Bölgesi, 29.
                                                Sokak, Lefkoşa
                                            </div>
                                            <div
                                                class="text-caption text-grey-9"
                                            >
                                                +90 533 887 25 73
                                            </div>
                                        </q-card-section>
                                    </q-card>
                                </q-expansion-item>
                                <q-separator />
                                <q-expansion-item
                                    group="cities"
                                    expand-separator
                                    label="Şanko Ltd."
                                    expand-icon="add"
                                    expanded-icon="remove"
                                    expand-icon-class="transition"
                                    header-class="q-pl-xs q-pr-xs no-border text-subtitle2  text-bold text-grey-9"
                                >
                                    <q-card class="no-padding no-shadow">
                                        <q-card-section
                                            class="q-pl-xs q-pr-xs"
                                            style="font-size: 12px"
                                        >
                                            <div
                                                class="text-caption text-grey-9"
                                            >
                                                Organize Sanayi Bölgesi, 29.
                                                Sokak, Lefkoşa
                                            </div>
                                            <div
                                                class="text-caption text-grey-9"
                                            >
                                                +90 533 887 25 73
                                            </div>
                                        </q-card-section>
                                    </q-card>
                                </q-expansion-item>
                                <q-separator />
                                <q-expansion-item
                                    group="cities"
                                    expand-separator
                                    label="Tabur Garaj Ltd."
                                    expand-icon="add"
                                    expanded-icon="remove"
                                    expand-icon-class="transition"
                                    header-class="q-pl-xs q-pr-xs no-border text-subtitle2  text-bold text-grey-9"
                                >
                                    <q-card class="no-padding no-shadow">
                                        <q-card-section
                                            class="q-pl-xs q-pr-xs"
                                            style="font-size: 12px"
                                        >
                                            <div
                                                class="text-caption text-grey-9"
                                            >
                                                Organize Sanayi Bölgesi, 29.
                                                Sokak, Lefkoşa
                                            </div>
                                            <div
                                                class="text-caption text-grey-9"
                                            >
                                                +90 533 887 25 73
                                            </div>
                                        </q-card-section>
                                    </q-card>
                                </q-expansion-item>
                                <q-separator />
                                <q-expansion-item
                                    group="cities"
                                    expand-separator
                                    label="Cinno Ticaret Şti. Ltd."
                                    expand-icon="add"
                                    expanded-icon="remove"
                                    expand-icon-class="transition"
                                    header-class="q-pl-xs q-pr-xs no-border text-subtitle2 text-bold text-grey-9"
                                >
                                    <q-card class="no-padding no-shadow">
                                        <q-card-section
                                            class="q-pl-xs q-pr-xs"
                                            style="font-size: 12px"
                                        >
                                            <div
                                                class="text-caption text-grey-9"
                                            >
                                                Organize Sanayi Bölgesi, 29.
                                                Sokak, Lefkoşa
                                            </div>
                                            <div
                                                class="text-caption text-grey-9"
                                            >
                                                +90 533 887 25 73
                                            </div>
                                        </q-card-section>
                                    </q-card>
                                </q-expansion-item>
                                <q-separator />
                            </q-tab-panel>

                            <q-tab-panel
                                name="nicosiaTab"
                                class="q-pl-none q-pr-none"
                            >
                                <q-expansion-item
                                    group="cities"
                                    expand-separator
                                    label="Almel Ticaret Ltd."
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
                                                Organize Sanayi Bölgesi, 29.
                                                Sokak, Lefkoşa
                                            </div>
                                            <div
                                                class="text-caption text-grey-9"
                                                style="font-size: 12px"
                                            >
                                                +90 533 887 25 73
                                            </div>
                                        </q-card-section>
                                    </q-card>
                                </q-expansion-item>
                                <q-separator />
                                <q-expansion-item
                                    group="cities"
                                    expand-separator
                                    label="Almel Ticaret Ltd."
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
                                                Organize Sanayi Bölgesi, 29.
                                                Sokak, Lefkoşa
                                            </div>
                                            <div
                                                class="text-caption text-grey-9"
                                                style="font-size: 12px"
                                            >
                                                +90 533 887 25 73
                                            </div>
                                        </q-card-section>
                                    </q-card>
                                </q-expansion-item>
                                <q-separator />
                            </q-tab-panel>

                            <q-tab-panel
                                name="girneTab"
                                class="q-pl-none q-pr-none"
                            >
                                <q-expansion-item
                                    group="cities"
                                    expand-separator
                                    label="Almel Ticaret Ltd."
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
                                                Organize Sanayi Bölgesi, 29.
                                                Sokak, Lefkoşa
                                            </div>
                                            <div
                                                class="text-caption text-grey-9"
                                                style="font-size: 12px"
                                            >
                                                +90 533 887 25 73
                                            </div>
                                        </q-card-section>
                                    </q-card>
                                </q-expansion-item>
                                <q-separator />
                            </q-tab-panel>

                            <q-tab-panel
                                name="guzelyurtTab"
                                class="q-pl-none q-pr-none"
                            >
                                <q-expansion-item
                                    group="cities"
                                    expand-separator
                                    label="Almel Ticaret Ltd."
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
                                                Organize Sanayi Bölgesi, 29.
                                                Sokak, Lefkoşa
                                            </div>
                                            <div
                                                class="text-caption text-grey-9"
                                                style="font-size: 12px"
                                            >
                                                +90 533 887 25 73
                                            </div>
                                        </q-card-section>
                                    </q-card>
                                </q-expansion-item>
                                <q-separator />
                            </q-tab-panel>
                            <q-tab-panel
                                name="magusaTab"
                                class="q-pl-none q-pr-none"
                            >
                                <q-expansion-item
                                    group="cities"
                                    expand-separator
                                    label="Almel Ticaret Ltd."
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
                                                Organize Sanayi Bölgesi, 29.
                                                Sokak, Lefkoşa
                                            </div>
                                            <div
                                                class="text-caption text-grey-9"
                                                style="font-size: 12px"
                                            >
                                                +90 533 887 25 73
                                            </div>
                                        </q-card-section>
                                    </q-card>
                                </q-expansion-item>
                                <q-separator />
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
        return {
            tab: ref("allTab"),
        };
    },
};
</script>

<style scoped>
.q-tab__label {
    font-size: 10px;
}
</style>

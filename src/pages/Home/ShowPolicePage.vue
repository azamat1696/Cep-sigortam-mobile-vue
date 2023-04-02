<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated reveal>
            <q-toolbar>
                <q-avatar size="sm">
                    <q-icon
                        class="cursor-pointer"
                        name="chevron_left"
                        size="md"
                        @click="$router.push({ name: 'homeLogin' })"
                    />
                </q-avatar>
                <q-toolbar-title class="text-subtitle2 text-bold text-center"
                    >Poliçelerim</q-toolbar-title
                >
            </q-toolbar>
        </q-header>
        <q-page-container>

            <div v-for="(item,i) in policy" class="q-pa-md" :key="i">
                <div class="text-subtitle2 q-pb-md">
                    {{ i+1 }}. Adet Aktif Poliçeniz Bulunmaktadır
                </div>
                <q-list bordered dense style="border-radius: 8px">
                    <q-expansion-item
                        class="text-grey-8"
                        expand-separator
                        :label=" item.Brans+'- 0000000 / 05.05.2022'"
                    >
                        <q-card>
                            <q-card-section
                                class="flex justify-between items-start"
                            >

                                <span style="font-size: 11px"
                                    >Sigortalı Numarası: 00000000</span
                                ><span style="font-size: 11px"
                                    >Adı Soyadı: Hakan Yılmaz</span
                                >
                            </q-card-section>
                            <q-card-section
                                class="flex justify-between items-start"
                            >
                                <span style="font-size: 11px"
                                    >Poliçe Numarası: 00000000</span
                                ><span style="font-size: 11px"
                                    >Yenileme Sayısı :2</span
                                >
                            </q-card-section>
                            <q-card-section
                                class="flex justify-between items-start"
                            >
                                <span style="font-size: 11px">
                                    Başlangıç - Bitiş Tarihi:<br />
                                    01.01.2022 - 01.01.2023 </span
                                ><span style="font-size: 11px"
                                    >Toplam Prim: 830 TL</span
                                >
                            </q-card-section>
                            <q-card-section>
                                <q-btn
                                    no-caps
                                    outline
                                    style="border-radius: 8px"
                                >
                                    PDF Olarak Görüntüle
                                </q-btn>
                            </q-card-section>
                        </q-card>
                    </q-expansion-item>
                </q-list>
            </div>
        </q-page-container>
    </q-layout>
</template>

<script lang="ts" setup>
 import {useAuthStore} from "stores/auth-store";
 import {storeToRefs} from "pinia";
 const authStore = useAuthStore();
 const {policy,user} = storeToRefs(authStore);
 const {getAllPolicy} = authStore
    getAllPolicy();
</script>

<style scoped>
.rounded {
    border-radius: 10px 10px 10px 10px;
}
</style>

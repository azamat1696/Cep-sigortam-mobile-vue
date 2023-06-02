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
                    >{{$t('my_policies')}}</q-toolbar-title
                >
            </q-toolbar>
        </q-header>
        <q-page-container>

            <div v-for="(item,i) in policy" class="q-pa-md" :key="i">
                <div class="text-subtitle2 q-pb-md">
                    {{ i+1 }}. {{$t('active_commercial_papers')}}
                </div>
                <q-list bordered dense style="border-radius: 8px">
                    <q-expansion-item
                        class="text-grey-8"
                        expand-separator
                        :label=" item.Brans+'- '+ item.PoliceNo + ' / '+item.VadeBaslangic.split(' ')[0]"
                    >
                        <q-card>
                            <q-card-section
                                class="flex justify-between items-start"
                            >
                               <span style="font-size: 12px"
                               >{{$t('identity_no')}}: {{logedInUser.id_card}}</span
                               >
                            </q-card-section>
                            <q-card-section
                                class="flex justify-between items-start"
                            >
                                <span style="font-size: 12px"
                                    >{{$t('name_surname')}}: {{logedInUser.name+' '+logedInUser.surname}}</span
                                >
                            </q-card-section>
                            <q-card-section
                                class="flex justify-between items-start"
                            >
                                <span style="font-size: 12px"
                                    >{{$t('commercial_paper_no')}}: {{item.PoliceNo}}</span
                                >
<!--                                <span style="font-size: 12px"-->
<!--                                    >{{$t('renew_count')}} :0</span-->
<!--                                >-->
                            </q-card-section>
                            <q-card-section
                                class="flex justify-between items-start"
                            >
                                <span style="font-size: 12px">
                                    {{$t('start_end_date')}}:<br />
                                    {{item.VadeBaslangic.split(' ')[0]}} - {{item.VadeBitis.split(' ')[0]}}
                                     </span
                                ><span style="font-size: 12px"
                                    >{{$t('total_pirim')}}: {{item.BrutPrim }} TL</span
                                >
                            </q-card-section>
<!--                            <q-card-section>-->
<!--                                <q-btn-->
<!--                                    no-caps-->
<!--                                    outline-->
<!--                                    style="border-radius: 8px;"-->
<!--                                 >-->
<!--                                    PDF Olarak Görüntüle-->
<!--                                </q-btn>-->
<!--                            </q-card-section>-->
                        </q-card>
                    </q-expansion-item>
                </q-list>
            </div>

            <div class="row absolute-center" v-if="policy.length <= 0">
                <div class="text-subtitle2 text-primary col-12 text-center text-bold q-pt-lg">
                    {{$t('no_active_commercial_papers')}}
                </div>
                <div class="col-12 text-center">
                    <q-icon name="folder_off" size="xl" color="primary"></q-icon>
                </div>
            </div>
        </q-page-container>
    </q-layout>
</template>

<script lang="ts" setup>
 import {useAuthStore} from "stores/auth-store";
 import {storeToRefs} from "pinia";
  const authStore = useAuthStore();
 const {policy,logedInUser} = storeToRefs(authStore);
 const {getAllPolicy} = authStore
    getAllPolicy();
</script>

<style scoped>
.rounded {
    border-radius: 10px 10px 10px 10px;
}
</style>

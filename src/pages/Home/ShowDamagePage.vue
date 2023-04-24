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
                    >{{$t('show_damages')}}</q-toolbar-title
                >
            </q-toolbar>
        </q-header>
        <q-page-container>
            <div class="q-pa-md">
                <div class="text-subtitle2 q-pb-md" style="font-weight: 600">
                    {{$t("damage_file_status")}}
                </div>
                <div class="text-caption q-pb-md text-primary" style="font-weight: 600" v-if="hasarPolicy.length < 1">
                    {{$t("no_damage_to_show")}}
                </div>
                <q-table
                    :rows="hasarPolicy"
                    :columns="columns"
                    row-key="name"
                    :rows-per-page-options="[0]"
                     class="no-shadow rounded"
                    bordered
                    hide-bottom
                    :separator="'cell'"
                >
                    <template v-slot:body="props">
                        <q-tr :props="props" :key="props.row.index" >
                            <q-td  auto-width>
                                <div class="text-caption text-blue-grey-8 text-center" >{{JSON.parse(props.row.Dosya_No)}}</div>
                            </q-td>
                            <q-td  auto-width>
                                <div class="text-caption text-blue-grey-8  text-center" >{{JSON.parse(props.row.Durum)}}</div>
                            </q-td>
                            <q-td  auto-width>
                                <div class="text-caption text-blue-grey-8  text-center" >{{ props.row.Aceklama}}</div>
                            </q-td>
                        </q-tr>
                    </template>
                </q-table>
            </div>
        </q-page-container>
    </q-layout>
</template>

<script>
import { useAuthStore} from "stores/auth-store";
import { storeToRefs} from "pinia";
import { useI18n } from "vue-i18n";


export default {
    name: "ShowDamagePage",
    setup() {
        const authStore = useAuthStore();
        const { hasarPolicy } = storeToRefs(authStore);
        const { getHasarPolicy } = authStore;
        const { t } = useI18n();
        const columns = [
            {
                name: "DosyaAdi",
                align: "center",
                label: t('file_name'),
                field: "DosyaAdi",
                sortable: true,
            },
            {
                name: "Durumu",
                align: "center",
                label: t('status'),
                field: "Durumu",
                sortable: true,
            },
            {
                name: "Açıklama",
                align: "center",
                label: t('descriotion'),
                field: "Durumu",
                sortable: true,
            },
        ];
        const rows = [
            {
                DosyaAdi: "KM 614",
                Durumu: "İhbar",
            },
            {
                DosyaAdi: "SY 451",
                Durumu: "Muhasebe Servisinde",
            },
            {
                DosyaAdi: "ZL 306",
                Durumu: "Onaylandı",
            },

        ];

        return {
            pagination: {
                page: 1,
                rowsPerPage: 0, // 0 means all rows
            },
            columns,
            rows,
            hasarPolicy,
            getHasarPolicy
        };
    },
    mounted() {
        this.getHasarPolicy();
    },

};
</script>

<style scoped>
.rounded {
    border-radius: 10px 10px 10px 10px;
}
</style>

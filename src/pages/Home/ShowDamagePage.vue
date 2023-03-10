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
                    >Hasar Görüntüleme</q-toolbar-title
                >
            </q-toolbar>
        </q-header>
        <q-page-container>
            <div class="q-pa-md">
                <div class="text-subtitle2 q-pb-md" style="font-weight: 600">
                    Hasar Dosya Durumu
                </div>
                <q-table
                    :rows="rows"
                    :columns="columns"
                    row-key="name"
                    :rows-per-page-options="[0]"
                    :pagination.sync="pagination"
                    class="no-shadow rounded"
                    bordered
                    hide-bottom
                    :separator="'cell'"
                />
            </div>
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
    name: "ShowDamagePage",
    setup() {
        const columns = [
            {
                name: "DosyaAdi",
                align: "center",
                label: "Dosya Adi",
                field: "DosyaAdi",
                sortable: true,
            },
            {
                name: "Durumu",
                align: "center",
                label: "Durumu",
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
        };
    },
};
</script>

<style scoped>
.rounded {
    border-radius: 10px 10px 10px 10px;
}
</style>

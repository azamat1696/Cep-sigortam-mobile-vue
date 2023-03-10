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
                    >Profilim</q-toolbar-title
                >
            </q-toolbar>
        </q-header>
        <q-page-container>
            <div class="q-pt-xs">
                <q-card class="no-shadow q-pa-sm">
                    <q-card-section style="padding-bottom: 10px">
                        <div class="text-body2 text-grey-9">Hakan Yılmaz</div>
                    </q-card-section>
                    <q-card-section>
                        <div class="flex justify-between items-start">
                            <div>
                                <div class="text-caption text-grey-8">
                                    K.K.T.C. Kimlik No
                                </div>
                                <div class="text-caption text-grey-8 q-pt-xs">
                                    000********00
                                </div>
                            </div>
                            <div>
                                <div class="text-caption text-grey-8">
                                    Sigortalı Numarası
                                </div>
                                <div class="text-caption text-grey-8 q-pt-xs">
                                    00000000
                                </div>
                            </div>
                        </div>
                    </q-card-section>
                </q-card>
                <q-separator />
            </div>
            <div class="q-pt-xs">
                <q-card class="no-shadow q-pa-xs">
                    <q-card-section style="padding-bottom: 10px">
                        <div class="flex justify-between items-start">
                            <div class="text-body2 text-grey-10 q-mt-sm">
                                İletişim Bilgilerim
                            </div>
                            <div class="text-body2 text-grey-10">
                                <q-btn
                                    color="primary"
                                    dense
                                    label="Düzenle"
                                    no-caps
                                    rounded
                                    style="
                                        padding-left: 38px;
                                        padding-right: 38px;
                                    "
                                    unelevated
                                />
                            </div>
                        </div>
                    </q-card-section>
                    <q-card-section>
                        <div class="text-caption text-grey-8">
                            <q-img
                                src="~assets/phone_in_talk.png"
                                width="24px"
                            />
                            <span class="q-pl-sm">055500000000</span>
                        </div>
                    </q-card-section>
                    <q-card-section>
                        <div class="text-caption text-grey-8">
                            <q-img src="~assets/mail.png" width="24px" />
                            <span class="q-pl-sm">hakanyilmaz@gmail.com</span>
                        </div>
                    </q-card-section>
                    <q-card-section>
                        <div
                            class="text-caption text-grey-8"
                            style="display: flex"
                        >
                            <div>
                                <q-img
                                    src="~assets/location.png"
                                    width="24px"
                                />
                            </div>
                            <span class="q-pl-sm" style="font-size: 12px"
                                >Şehit Mehmet Kemal Sok. No: 114 D: 12
                                Küçükkaymaklı / Lefkoşa</span
                            >
                        </div>
                    </q-card-section>
                </q-card>
            </div>
            <q-card class="no-shadow q-pa-xs">
                <q-card-section style="padding-bottom: 10px">
                    <div class="flex justify-between items-start">
                        <div class="text-body2 text-grey-10 q-mt-sm">
                            İletişim Tercihlerim
                        </div>
                    </div>
                </q-card-section>
                <q-card-section
                    class="text-caption text-grey-8 flex justify-between q-pt-sm"
                >
                    <q-checkbox v-model="Email" label="E-Posta" dense />
                    <q-checkbox v-model="Phone" label="Telefon" dense />
                    <q-checkbox v-model="Message" label="SMS" dense />
                </q-card-section>
            </q-card>
            <div class="q-pt-xs">
                <q-card class="no-shadow q-pa-xs">
                    <q-card-section class="q-pb-sm q-pt-sm">
                        <div class="flex justify-between items-start">
                            <div class="text-body2 text-grey-10 q-mt-sm">
                                İzinlerim
                            </div>
                        </div>
                    </q-card-section>
                    <q-card-section
                        class="text-caption text-grey-8 flex justify-between q-pt-xs q-pb-sm"
                    >
                        <q-checkbox
                            v-model="RememberMe"
                            label="E-Posta"
                            dense
                        />
                    </q-card-section>
                </q-card>
            </div>
        </q-page-container>
    </q-layout>
</template>

<script>
import { ref } from "vue";
export default {
    name: "MyProfilePage",
    setup() {
        return {
            Email: ref(false),
            Phone: ref(false),
            Message: ref(false),
            RememberMe: ref(false),
        };
    },
};
</script>

<style scoped></style>

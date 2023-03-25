<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated reveal>
            <q-toolbar class="flex justify-between">
              <div>
                  <q-avatar size="xl">
                      <q-img src="/nesuygulamaikon.svg" height="50px" width="50px" />
                  </q-avatar>
              </div>
<!--                <q-toolbar-title-->
<!--                    class="text-subtitle1 text-bold cursor-pointer"-->
<!--                    @click="$router.push({ name: 'home' })"-->
<!--                    >CEP SIGORTAM</q-toolbar-title>-->
         <div>
             <q-avatar color="white" size="md" @click="handleUrgentDialog">
                 <q-img src="~assets/headphone.png" />
             </q-avatar>
             <q-btn
                 v-if="!isLogin"
                 flat
                 icon="menu"
                 round
                 size="lg"
                 @click="toggleLeftDrawer"
             />
             <q-btn
                 v-if="isLogin"
                 class="q-ml-md"
                 color="grey-11"
                 dense
                 round
                 size="md"
                 text-color="black"
                 unelevated
                 @click="toggleLeftDrawer"
             >
                 <span class="text-subtitle2">HY</span>
             </q-btn>
         </div>
            </q-toolbar>
        </q-header>

        <q-drawer
            v-model="leftDrawerOpen"
            behavior="mobile"
            bordered
            show-if-above
            side="right"
        >
            <q-scroll-area
                style="
                    height: calc(100% - 150px);
                    margin-top: 100px;
                    border-right: 1px solid #ddd;
                "
            >
                <q-list padding>
                    <!--   Profile section    -->
                    <q-item :to="{ name: 'showProfile' }" class="q-pa-none">
                        <q-item-section avatar class="items-end q-pr-sm">
                            <q-icon name="person" />
                        </q-item-section>
                        <q-item-section avatar>
                            <span class="text-subtitle2">Profilim</span>
                        </q-item-section>
                        <q-item-section avatar> </q-item-section>
                        <q-item-section avatar> </q-item-section>
                        <q-item-section avatar class="cursor-pointer">
                            <q-icon name="chevron_right" />
                        </q-item-section>
                    </q-item>
                    <q-item class="q-pa-none">
                        <q-item-section avatar class="items-end q-pr-sm">
                            <img alt="" src="~assets/globe.png" width="20" />
                        </q-item-section>
                        <q-item-section avatar>
                            <span class="text-subtitle2">Dil Seçimi</span>
                        </q-item-section>
                        <q-item-section avatar class="q-pl-sm" @click="changeLang('tr')">
                            <q-btn
                                class="text-subtitle2"
                                rounded
                                :color="locale === 'tr' ? 'primary' : ''"
                                :text-color="locale === 'tr' ? 'white' : '  '"
                                size="sm"
                                >TR</q-btn
                            >
                        </q-item-section>
                        <q-item-section avatar class="q-pr-none" @click="changeLang('en')">
                            <q-btn
                                class="text-subtitle2"
                                :color="locale === 'en' ? 'primary' : ''"
                                rounded
                                size="sm"
                                :text-color="locale === 'en' ? 'white' : '  '"
                                >EN</q-btn
                            >
                        </q-item-section>
                    </q-item>
                    <q-item :to="{ name: 'loginPage' }" class="q-pa-none">
                        <q-item-section avatar class="items-end q-pr-sm">
                            <q-icon name="highlight_off"></q-icon>
                        </q-item-section>
                        <q-item-section avatar @click="logout" v-if="authToken">
                            <span class="text-subtitle2"> Çıkış Yap</span>
                        </q-item-section>

                            <q-item-section avatar :to="{name: 'loginPage'}"   v-else>
                                <span class="text-subtitle2">Giriş yap</span>
                        </q-item-section>
                    </q-item>
                    <div class="absolute-bottom">
                        <q-item class="flex flex-center q-pb-none">
                            <q-item-section class="text-center q-pl-lg">
                                Sosyal Medya
                            </q-item-section>

                            <q-item-section class="text-end"> </q-item-section>
                        </q-item>
                        <q-item class="flex flex-center q-pt-none">
                            <q-item-section avatar class="items-end q-pr-sm">
                                <q-img
                                    src="~assets/twitter.png"
                                    style="width: 29px"
                                />
                            </q-item-section>
                            <q-item-section avatar class="items-end q-pr-sm">
                                <q-img
                                    src="~assets/linkdin.png"
                                    style="width: 29px"
                                />
                            </q-item-section>
                            <q-item-section avatar class="items-end q-pr-sm">
                                <q-img
                                    src="~assets/facebook.png"
                                    style="width: 29px"
                                />
                            </q-item-section>
                            <q-item-section avatar class="items-end q-pr-sm">
                                <q-img
                                    src="~assets/instagram.png"
                                    style="width: 29px"
                                />
                            </q-item-section>
                        </q-item>
                    </div>
                </q-list>
            </q-scroll-area>
        </q-drawer>

        <q-page-container>

                <router-view v-slot="{Component}">
                    <component key="component" :is="Component" />
                </router-view>

        </q-page-container>
    </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ContactUsDialog from "components/Dialog/ContactUsDialog.vue";
import {useI18n} from "vue-i18n";
import {useAuthStore} from "stores/auth-store";
import {storeToRefs} from "pinia";

export default defineComponent({
    name: "MainLayout",

    setup() {
        const {logout} = useAuthStore();
        const { user,authToken } = storeToRefs(useAuthStore())
        const { locale } = useI18n({ useScope: 'global' })

        const leftDrawerOpen = ref(false);
        const isLogin = ref(false);
        return {
            isLogin,
            leftDrawerOpen,
            user,
            authToken,
            logout,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value;
                isLogin.value = !isLogin.value;

            },
            locale
        };
    },
    methods: {
        handleUrgentDialog() {
            this.$q.dialog({
              component: ContactUsDialog,
            });
        },
        changeLang(lang: string) {
             this.locale = lang

        },


    },


});
</script>
<style>
body.cordova .my-selector {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;

}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

</style>

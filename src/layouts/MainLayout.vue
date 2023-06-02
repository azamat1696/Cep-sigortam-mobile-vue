<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated reveal>
            <q-toolbar class="flex justify-between">
              <div class="q-pt-sm">
                      <img src="/logo4(1).png" height="40" width="150" />
              </div>
<!--                <q-toolbar-title-->
<!--                    class="text-subtitle1 text-bold cursor-pointer"-->
<!--                    @click="$router.push({ name: 'home' })"-->
<!--                    >CEP SIGORTAM</q-toolbar-title>-->
         <div>
             <q-avatar color="white" size="md" @click="handleUrgentDialog">
                 <q-img src="~assets/headphone.png"/>
             </q-avatar>
             <q-btn
                 v-if="!authToken"
                 flat
                 icon="menu"
                 round
                 size="lg"
                 @click="toggleLeftDrawer"
             />
             <q-btn
                 v-else
                 class="q-ml-md"
                 color="grey-11"
                 dense
                 round
                 size="md"
                 text-color="black"
                 unelevated
                 @click="toggleLeftDrawer"
             >
                 <span class="text-subtitle2">{{logedInUser?.name?.charAt(0) +''+logedInUser?.surname?.charAt(0)}}</span>
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
                        <q-item-section avatar >
                            <div class="text-subtitle2 no-wrap">{{$t('my_profile')}}</div>
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
                            <span class="text-subtitle2">{{$t('select_language')}}</span>
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
                            <span class="text-subtitle2"> {{$t('logout')}}</span>
                        </q-item-section>

                            <q-item-section avatar :to="{name: 'loginPage'}"   v-else>
                                <span class="text-subtitle2">{{$t('login')}}</span>
                        </q-item-section>
                    </q-item>
                    <div class="absolute-bottom">
                        <q-item class="flex flex-center q-pb-none">
                            <q-item-section class="text-center q-pl-sm">
                                {{ $t('social_media') }}
                            </q-item-section>

                            <q-item-section class="text-end"> </q-item-section>
                        </q-item>
                        <q-item class="flex  q-pt-none ">
<!--                            <q-item-section avatar class="items-end q-pr-sm">
                                <q-img
                                    src="~assets/twitter.png"
                                    style="width: 29px"
                                />
                            </q-item-section>-->
<!--                            <q-item-section avatar class="items-end q-pr-sm">
                                <q-img
                                    src="~assets/linkdin.png"
                                    style="width: 29px"
                                />
                            </q-item-section>-->
                            <q-item-section avatar class="items-end q-pl-lg">
                                <a href="https://www.facebook.com/neareastsigorta/">
                                    <q-img
                                        src="~assets/facebook.png"
                                        style="width: 29px"
                                    />
                                </a>

                            </q-item-section>
                            <q-item-section avatar class="items-end q-pr-sm">
                                <a href="https://www.instagram.com/neareastsigorta/">
                                    <q-img
                                        src="~assets/instagram.png"
                                        style="width: 29px"
                                    />
                                </a>

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
         <q-page-sticky class="q-pa-lg">
            <q-btn color="primary"  class="shadow-15"  @click="urgentHandleBtn()"  round  icon="phone"  no-caps />
        </q-page-sticky>

        <q-dialog v-model="coockie" persistent  transition-show="scale" transition-hide="scale">
            <q-card>
                <q-card-section>
                    <div class="text-h6 text-center">{{$t('header_cookie')}}</div>
                    <div class="text-subtitle2 text-center">
                         {{$t('cookie_text1')}}  {{$t('cookie_text2')}}
                        <router-link :to="{name:'userAgreementPage'}">
                            {{$t('cookie_text3')}}
                    </router-link>  .
                    </div>
                </q-card-section>
                <q-card-section>

                 </q-card-section>
                <q-card-actions align="right" class="bg-white text-primary">
                    <q-btn flat :label="$t('close')" v-close-popup @click="cookieHandle" />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ContactUsDialog from "components/Dialog/ContactUsDialog.vue";
import {useI18n} from "vue-i18n";
import {useAuthStore} from "stores/auth-store";
import {storeToRefs} from "pinia";
import UrgentDialog from "components/Dialog/UrgentDialog.vue";
import { useQuasar } from 'quasar'

export default defineComponent({
    name: "MainLayout",

    setup() {
        const $q = useQuasar()
        const authStore = useAuthStore();
        const {logout} = authStore;
        const { authToken,coockie,logedInUser } = storeToRefs(authStore)
        const { locale } = useI18n({ useScope: 'global' })

        const leftDrawerOpen = ref(false);
        const isLogin = ref(false);
        const   urgentHandleBtn = () =>{
            $q.dialog({
                component: UrgentDialog,
                // @ts-ignore
                parent: this,
            });
        }
        return {
            isLogin,
            leftDrawerOpen,
            logedInUser,
            authToken,
            logout,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value;
                isLogin.value = !isLogin.value;

            },
            locale,
            urgentHandleBtn,
            policyPopup: ref(true),
            coockie
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
        cookieHandle(){
            this.coockie = false
            localStorage.setItem('coockie', 'false')
        }


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

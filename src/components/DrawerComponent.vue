<template>
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
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";
 import {useI18n} from "vue-i18n";
import {useAuthStore} from "stores/auth-store";
import {storeToRefs} from "pinia";


export default defineComponent({
    name: "DrawerComponent",
    setup() {
        const {logout} = useAuthStore();
        const {authToken } = storeToRefs(useAuthStore())
        const { locale } = useI18n({ useScope: 'global' })
        const leftDrawerOpen = ref(false);
         return {
            authToken,
            logout,
            locale,
             leftDrawerOpen
         };
    },
    methods: {
        changeLang(lang: string) {
            this.locale = lang

        },


    },


});
</script>


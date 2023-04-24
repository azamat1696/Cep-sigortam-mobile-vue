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
                    >{{$t('my_profile')}}</q-toolbar-title
                >
            </q-toolbar>
        </q-header>
        <q-page-container>
            <div class="q-pt-xs">
                <q-card class="no-shadow q-pa-sm">
                    <q-card-section style="padding-bottom: 10px">
                        <div class="text-body2 text-grey-9">{{user.name+' '+user.surname}}</div>
                    </q-card-section>
                    <q-card-section>
                        <div class="flex justify-between items-start">
                            <div>
                                <div class="text-caption text-grey-8">
                                     {{$t('identity_no')}}
                                </div>
                                <div class="text-caption text-grey-8 q-pt-xs">
                                    {{user.id_card}}
                                </div>
                            </div>
                            <div>
<!--                                <div class="text-caption text-grey-8">-->
<!--                                    {{ $t('insured_no') }}-->
<!--                                </div>-->
<!--                                <div class="text-caption text-grey-8 q-pt-xs">-->
<!--                                   *********-->
<!--                                </div>-->
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
                                {{$t('contact_info')}}
                            </div>
                            <div class="text-body2 text-grey-10">
                                <q-btn
                                    color="primary"
                                    dense
                                    :label="$t('update')"
                                    no-caps
                                    rounded
                                    style="
                                        padding-left: 38px;
                                        padding-right: 38px;
                                    "
                                    unelevated
                                    @click="showEditProfileDialog"
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
                            <span class="q-pl-sm">{{user.phone}}</span>
                            <q-tooltip v-model="formField.showingTooltip"  max-width="300px" anchor="center middle" self="center middle">

                                {{$t('contact_info_selection2')}}
                            </q-tooltip>
                        </div>
                    </q-card-section>
                    <q-card-section>
                        <div class="text-caption text-grey-8">
                            <q-img src="~assets/mail.png" width="24px" />
                            <span class="q-pl-sm">{{user.email}}</span>
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
                                >{{user?.address}}</span
                            >
                        </div>
                    </q-card-section>
                </q-card>
            </div>
            <q-separator />
            <q-card class="no-shadow q-pa-xs">
                <q-card-section style="padding-bottom: 10px">
                    <div class="flex justify-between items-start">
                        <div class="text-body2 text-grey-10 q-mt-sm">
                            {{$t('contact_preferences')}}
                        <q-icon size="xs" name="info"  @click="showEditProfileDialog2"/>

                        </div>
                        <q-tooltip v-model="formField.showingTooltip2" anchor="center middle" self="center middle">
                            {{$t('contact_info_selection')}}
                        </q-tooltip>
                    </div>
                </q-card-section>

                <q-card-section
                    class="text-caption text-grey-8 flex justify-between q-pt-sm"
                >
                    <q-checkbox v-model="email_fav" :label="$t('email')" dense @update:model-value="onCheckboxChange" />
                    <q-checkbox v-model="phone_fav" :label="$t('phone')" dense  @update:model-value="onCheckboxChange" />
                    <q-checkbox v-model="sms_fav" :label="$t('message')" dense @update:model-value="onCheckboxChange"  />
                </q-card-section>
            </q-card>
<!--            <div class="q-pt-xs">-->
<!--                <q-card class="no-shadow q-pa-xs">-->
<!--                    <q-card-section class="q-pb-sm q-pt-sm">-->
<!--                        <div class="flex justify-between items-start">-->
<!--                            <div class="text-body2 text-grey-10 q-mt-sm">-->
<!--                                İzinlerim-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </q-card-section>-->
<!--                    <q-card-section-->
<!--                        class="text-caption text-grey-8 flex justify-between q-pt-xs q-pb-sm"-->
<!--                    >-->
<!--                        <q-checkbox-->
<!--                            v-model="email_fav"-->
<!--                            label="E-Posta"-->
<!--                            dense-->
<!--                        />-->
<!--                    </q-card-section>-->
<!--                </q-card>-->
<!--            </div>-->
        </q-page-container>
    </q-layout>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from "vue";
 import {useAuthStore} from "stores/auth-store";
 import {storeToRefs} from "pinia";

 const authStore = useAuthStore();
 const {user} = storeToRefs(authStore);
 const {updateProfile} = authStore
 const formField = reactive({
     // @ts-ignore
     sms_fav: user.value?.sms_fav === 1,
     // @ts-ignore
     phone_fav: user.value?.phone_fav === 1,
     // @ts-ignore
     email_fav: user.value?.email_fav === 1,
     showingTooltip:  false,
     showingTooltip2:  false,
  });


const { sms_fav, phone_fav, email_fav } = toRefs(formField);
const showEditProfileDialog = () => {
    if (formField.showingTooltip) {
        formField.showingTooltip = false;
    } else {
        formField.showingTooltip = true;
    }
};
const showEditProfileDialog2 = () => {
    if (formField.showingTooltip2) {
        formField.showingTooltip2 = false;
    } else {
        formField.showingTooltip2 = true;
    }
};
const onCheckboxChange = (value:any) => {
    let formData = new FormData();
    for(const [key, value] of Object.entries(formField)){
        // @ts-ignore
        formData.append(key, value ? 1 : 0);
    }
      updateProfile(formData).then((res) => {
         if (res){
             // @ts-ignore
                user.value.sms_fav = formField.sms_fav ? 1 : 0;
             // @ts-ignore
                user.value.phone_fav = formField.phone_fav ? 1 : 0;
             // @ts-ignore
                user.value.email_fav = formField.email_fav ? 1 : 0;

             localStorage.setItem('user', JSON.stringify(user.value));
         }
    });
};

</script>

<style scoped></style>

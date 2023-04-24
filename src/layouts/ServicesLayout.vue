<template>
    <q-layout view="lHh Lpr lFf">
        <DrawerComponent />
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import DrawerComponent from "components/DrawerComponent.vue";
export default defineComponent({
    name: "ServicesLayout",
    components: {DrawerComponent},

    setup() {
        const isLogin = ref(false);
        return {
            isLogin,
        };
    },
});
</script>
<style>
body.cordova .my-selector {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
}
</style>

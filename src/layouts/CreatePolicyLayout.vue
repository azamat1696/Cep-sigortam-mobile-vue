<template>
    <q-layout view="lHh Lpr lFf">
    <DrawerComponent />
         <q-page-container>
             <router-view />
         </q-page-container>
    </q-layout>
</template>

<script>
import DrawerComponent from "components/DrawerComponent.vue";

export default {
    name: "CreatePolicyLayout",
    components: {DrawerComponent}
}
</script>

<style scoped>

</style>

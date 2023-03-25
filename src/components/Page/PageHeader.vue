<template>
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
</template>

<script>
export default {
    name: "Page"
}
</script>

<style scoped>

</style>

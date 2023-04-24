<template>
    <q-header   elevated>
        <q-toolbar>
            <q-avatar size="sm">
                <q-icon
                    name="chevron_left"
                    @click="authToken && authToken !== undefined ? $router.push({ name: 'homeLogin'}) : $router.push({ name: 'home'})"
                    size="md"
                    class="cursor-pointer"
                />
            </q-avatar>
            <q-toolbar-title class="text-subtitle2 text-bold text-center">
                <slot></slot>
            </q-toolbar-title>
        </q-toolbar>
    </q-header>
</template>

<script>
import {useAuthStore} from "stores/auth-store";
import {storeToRefs} from "pinia";

export default {
    name: 'HeaderComponent',
    setup() {
        const authStore = useAuthStore();
        const {authToken} = storeToRefs(authStore);
        return {
            authToken
        }
    }
}
</script>

<style scoped>

</style>

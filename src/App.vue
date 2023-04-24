<template>
    <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAuthStore } from "stores/auth-store";

export default defineComponent({
    name: "App",
    setup() {
         const { initAuth,getCurrentGreetings } = useAuthStore();
        return {
          initAuth,
          getCurrentGreetings
        };
    },
    mounted() {
        this.initAuth();
        this.getCurrentGreetings()
    }
});
</script>


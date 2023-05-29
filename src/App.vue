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


<style>
 padding-top: constant(safe-area-inset-top); /*// for iOS 11.0// for iOS 11.2 +*/
 padding-top: env(safe-area-inset-top);

padding-bottom: constant(safe-area-inset-bottom);
padding-bottom: env(safe-area-inset-bottom);
</style>

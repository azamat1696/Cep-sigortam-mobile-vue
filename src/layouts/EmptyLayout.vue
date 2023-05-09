<template>
    <q-layout view="lHh Lpr lFf">
        <DrawerComponent />
        <q-page-container>
             <router-view />
        </q-page-container>
    </q-layout>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import DrawerComponent from "components/DrawerComponent.vue";

export default defineComponent({
    components: {DrawerComponent}
})
</script>
<style>

/* Transitions */

.next-leave-to {
    animation: leaveToLeft 500ms both cubic-bezier(0.165, 0.84, 0.44, 1);
    z-index: 0;
}

.next-enter-to {
    animation: enterFromRight 500ms both cubic-bezier(0.165, 0.84, 0.44, 1);
    z-index: 1;
}

.prev-leave-to {
    animation: leaveToRight 500ms both cubic-bezier(0.165, 0.84, 0.44, 1);
    z-index: 1;
}

.prev-enter-to {
    animation: enterFromLeft 500ms both cubic-bezier(0.165, 0.84, 0.44, 1);
    z-index: 0;
}

@keyframes leaveToLeft {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-25%);
        filter: brightness(0.5);
    }
}

@keyframes enterFromLeft {
    from {
        transform: translateX(-25%);
        filter: brightness(0.5);
    }
    to {
        transform: translateX(0);
    }
}

@keyframes leaveToRight {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100%);
    }
}

@keyframes enterFromRight {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
}


body.cordova .my-selector {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
}
</style>

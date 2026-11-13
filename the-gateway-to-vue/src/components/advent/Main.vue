<script lang="ts" setup>
import { StateContext, StateKey, StateValue } from '../resources/state-context';
import Navbar from './Navbar.vue';
import Toaster from './toaster/Toaster.vue';
import ExportProject from './ExportProject.vue';
import ServiceSimple from './edr/ServiceSimple.vue';
import Configure from './Configure.vue';

let isWaiting = false;
</script>

<template>
    <div :class="isWaiting ? 'wait' : ''">
        <div :class="isWaiting ? 'disable-pointer' : ''">
            <Navbar/>
            <ExportProject v-if="StateContext.hasStateWithValue(StateKey.NAV_OPTION, StateValue.NAV_EXPORT_PROJECT)"/>
            <Configure/>
            <ServiceSimple/>
        </div>
    </div>
    <Toaster/>
</template>

<style scoped>
</style>

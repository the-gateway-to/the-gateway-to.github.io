<script lang="ts" setup>
import { ref } from 'vue';
import AdventCalendar from '../advent/AdventCalendar.vue';

export interface Context {
  show: 'calendar';
}

const context = ref<Context>({
  show: 'calendar',
});


</script>

<template>
    <div class="container-fluid m-0 p-0" style="height: 100vh; border: 1px solid red;">
        <AdventCalendar v-if="context.show == 'calendar'" />
    </div>
</template>
<script setup lang="ts">
import Carousel from '../carousel/Carousel.vue';
import { config } from './CalendarConfig';
import ModalEarly from './ModalEarly.vue';
import { ModalContext } from '../modal/modal-context.ts'
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const count = ref(0);
const route = useRoute();
const date = route.params.date;

function handler() {
    count.value += 1;
    ModalContext.toggle('early');
}

</script>

<template>
    <ModalEarly/>
    <div class="btn btn-success" @click="handler()">Click Me</div>
    {{ count }}
    [{{ date }}]
</template>
<script lang="ts" setup>

export interface Context {
    callback?: Function;
}

const context = defineProps({
    callback: {
        type: Function,
        required: false,
    }
});

</script>

<template>
    <div class="container">
        ALOOO!
    </div>
</template>
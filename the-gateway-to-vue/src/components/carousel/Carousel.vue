<script lang="ts" setup>
import type { PropType } from 'vue';
import { ref } from 'vue';

export interface IContext {
    index: number;
}

const context = ref<IContext>({
    index: 0,
});

const props = defineProps({
    imageRoot: {
        type: String,
        default: '',
    },
    images: {
        type: Array as PropType<string[]>,
        required: true,
        default: [],
    }
});

function scroll(step: number) {
    const resolved = context.value.index + step;
    if (resolved < 0) {
        context.value.index = props.images.length -1;
    } else if (resolved >= props.images.length) {
        context.value.index = 0;
    } else {
        context.value.index = resolved;
    }
}

</script>

<template>
    <div class="container">
        <table>
            <tbody>
                <tr>
                    <td>
                <span class="bi bi-arrow-left-circle p-2 fs-1 text-white" @click.stop="scroll(-1)" ></span>
                    </td>
                    <td>
                <img class="vh-row-4 float-center img-fluid" v-bind:src="props.imageRoot + props.images[context.index]"/>
                    </td>
                    <td>
                <span class="bi bi-arrow-right-circle p-2 fs-1 text-white" @click.stop="scroll(1)"></span>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td class="text-end">
                        {{ context.index + 1 }} / {{ props.images.length }}
                    </td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
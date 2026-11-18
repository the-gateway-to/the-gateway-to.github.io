<script lang="ts" setup>
import type { PropType } from 'vue';
import { ref } from 'vue';

export interface IContext {
    index: number;
    // imageUrl: string;
}

const context = ref<IContext>({
    index: 0,
    // imageUrl: '',
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
    },
    debug: {
        type: String,
        default: 'false',
    },
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

// function buildUrl(imageUrl: string) {
//     const host = [location.hostname, location.port].filter((h) => h).join(':');
//     const url = `http://${host}/${props.imageRoot + imageUrl}`;
//     debug('buildUrl', { imageUrl, url });
//     return url;
// }

function getImageUrl(imageUrl: string) {
    const imgPath = `${import.meta.env.BASE_URL + props.imageRoot + imageUrl}`;
    // const img = computed(() => new URL(imgPath, import.meta.url).href);
    
    
    debug('getImageUrl', { imgPath });
    return imgPath;
}

function debug(message: string, detail: any) {
    if (`${props.debug}`.toLocaleLowerCase() === 'true') {
        alert(JSON.stringify({ message, detail }, null, 2));
    }
}


debug('carousel', { props, context });

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
                <!-- <img class="vh-row-4 float-center img-fluid" v-bind:src="props.imageRoot + props.images[context.index]"/> -->
                <!-- <img class="vh-row-4 float-center img-fluid" :src="buildUrl(props.images[context.index])"/> -->
                <img class="vh-row-4 float-center img-fluid" :src="getImageUrl(props.images[context.index])"/>
                <!-- <img class="vh-row-4 float-center img-fluid" :src="props.imageRoot + props.images[context.index]"/> -->
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
        <div class="text-white">
            {{ props.imageRoot + props.images[context.index] }}
        </div>
    </div>
</template>
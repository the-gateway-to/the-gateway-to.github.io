<script lang="ts" setup>
import { watch, ref} from 'vue';
import { ModalContext } from './modal-context';
import type { idText } from 'typescript';

type SizeType = 'small' | 'medium' | 'large' | 'extra-large';

const modalClass: Record<SizeType,string> = {
    small: 'modal-sm',
    medium: '',
    large: 'modal-lg',
    'extra-large': 'modal-xl',
}

const emits = defineEmits(['close']);
const selected = ref<string>('');

export interface Context {
    id: string;
    size?: SizeType;
    display?: boolean;
}

const context: Context = defineProps({
    id: {
        required: true,
        type: String,
    },
    size: {
        required: false,
        type: String as () => SizeType,
        default: 'medium',
    },
    display: {
        required: false,
        type: Boolean,
        default: false,
    }
});

if (context.display) {
    ModalContext.set(context.id);
}

watch(() => context.display, (oldVal, newVal) => {
    if (newVal) {
        ModalContext.set(context.id);
    } else {
        ModalContext.unset(context.id);
        emits('close');
    }
});

watch(() => ModalContext, (oldVal, newVal) => {
    console.log({ modalContextUpdate: new Date(), id: newVal.id, ref: newVal.ref });
    selected.value = newVal.id || '';
}, { deep: true });

function modalSize(): string {
    return {
        'small': 'modal-sm',
        'medium': 'modal-md',
        'large': 'modal-lg',
        'extra-large': 'modal-xl'
    }[context.size || 'medium'] || 'modal-lg';
}

</script>

<template>

    <div v-if="ModalContext.display(context.id)" :class="modalClass[context.size ?? 'medium']" class="modal d-block bg-black bg-opacity-50" data-bs-backdrop="static" tabindex="-1" @click="ModalContext.unset(context.id)">
        <div class="modal-dialog modal-dialog-scrollable" style="width: 100vw;">
            <div class="modal-content">
                <div v-if="$slots.header">
                    <div class="modal-header text-white bg-secondary">
                        <slot name="header"></slot>
                        <span class="text-end, bi bi-x-circle" title="close" type="button" @click.stop="ModalContext.toggle(context.id)"></span>
                    </div>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div v-if="$slots.footer">
                    <div class="modal-footer text-white bg-secondary">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css">
.modal-content {
    background: none;
}

.xmodal-xl {
    max-width: 100vw !important;
    max-height: 100vh !important;
}

.xmodal-lg {
    max-width: 75vw !important;
    max-height: 100v !important;
}

.xmodal-md {
    max-width: 50pc !important;
    max-height: 50pc !important;
}

.xmodal-sm {
    max-width: 25vw !important;
    max-height: 100vh !important;
}
</style>

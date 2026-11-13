<script lang="ts" setup>
// import { ConfigureContext } from '../resources/configure-context';
import Modal from '../modal/Modal.vue'
</script>

<template>
    <Modal id="settings">
        <template v-slot:header>
            <div class="fw-bold">
                Settings
            </div>
        </template>
        <div class="row">
            <div class="col">
                <!-- Demo Mode: <span :class="ConfigureContext.isDemoMode() ? 'bi-check-square' : 'bi-square'" class="bi" type="button" @click.stop="ConfigureContext.toggleDemoMode()"></span> -->
            </div>
        </div>
    </Modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { config } from './CalendarConfig';
import { Utils } from '../../common/utils'
import { useStorage } from '@vueuse/core';
import Carousel from '../carousel/Carousel.vue';
import Modal from '../modal/Modal.vue';
import { ModalContext } from '../modal/modal-context.ts';

export interface Context {
    show: 'calendar' | 'password' | 'detail' | 'unavailable';
    currentDay: number,
    message: string,
    selectedDay?: number,
    enteredPasscode?: string,
}

const route = useRoute();
const routeDate = Utils.getFirst(route.params.date);

const unlocked = useStorage('unlocked', 0);

const context = ref<Context>({
    show: 'calendar',
    currentDay: Utils.daysDifference(Utils.toDateOrDefault(config.startDate, routeDate)),
    message: '',
});

const dateArr = Utils.getRandomNumberArray(49, 6);

function handleDayClick(day: number, msg: string = '') {
    console.log({ day, msg });
    context.value.message = msg;
    context.value.selectedDay = day;
    ModalContext.clear();

    if (day > 0 && (day < context.value.currentDay || day <= unlocked.value)) {
        // context.value.show = 'detail';
        ModalContext.toggle('modal-detail')
    } else if (day === context.value.currentDay) {
        ModalContext.toggle('modal-passcode')
        // context.value.show = 'password';
    } else {
        ModalContext.toggle('modal-early');
        // ModalContext.clear();
        // context.value.show = 'unavailable';
    }
}

function handlePasswordEntry(day?: number, pwd?: string) {
    console.log({ day, pwd });
    if (day != null && config.day[day].passcode.toLocaleLowerCase() === `${pwd}`.toLocaleLowerCase()) {
        console.log({ configPwd: config.day[day].passcode});
        unlocked.value = day;
        handleDayClick(day);
    } else {
        context.value.enteredPasscode = undefined;
        handleDayClick(-1, `Oi dummy, that's not the right passcode for the ${Utils.humanReadableDay(day)}`)
    }
}

function reset() {
    unlocked.value = undefined;
    context.value.enteredPasscode = undefined;
}

</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-1"></div>
            <div class="col-10">

                <h1 class="vh-row-1 font-cute-snow text-center">
                    {{ config.title }}
                </h1>
                <div class="vh-row-6" style="height: 100%;">


                    <Modal id="modal-passcode">
                        <div class="row">
                            <div class="col">
                                <img class="img-fluid" src="../../assets/images/elf-thinking.png"/>
                            </div>
                        </div>
                        <div class="col">
                            <div class="font-cute-snow text-white text-center fs-2 p-2 opacity-darker rounded-2">
                                <div class="row">
                                    <div class="col">
                                        I think you need to enter a passcode
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="input-group mb-3">
                                            <input type="text" class="form-control" placeholder="PASSCODE" v-model="context.enteredPasscode" @click.stop="">
                                            <button class="btn btn-outline-success" type="button" @click="handlePasswordEntry(context.selectedDay, context.enteredPasscode)">Submit</button>
                                        </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </Modal>

                    <Modal id="modal-early">
                        <div class="row">
                            <div class="col">
                                <img class="img-fluid" src="../../assets/images/elf-grumpy.png"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="font-cute-snow text-white text-center fs-2 p-2 opacity-darker rounded-2">
                                    I think you tried to open a window a bit too early!
                                </div>
                            </div>
                        </div>
                    </Modal>
                    
                    <Modal id="modal-detail" :size="'extra-large'"
                        <!-- <div class="vh-row-7 align-middle"> -->
                            <div class="container-fluid">
                        <div class="row align-middle">
                            <div class="col">
                                <Carousel :image-root="config.imageRoot + '/' + context.selectedDay + '/'" :images="config.day[context.selectedDay || 0].images"></Carousel>
                            </div>
                        </div>
                        </div>
                        <!-- </div> -->
                    </Modal>

                    <template v-if="context.show === 'calendar'">
                        <table class="vh-row-6" width="100%">
                            <tbody>
                                <template v-for="(row) in dateArr">
                                    <tr style="height: 1px;">
                                        <template v-for="(col) in row">
                                            <td class="align-middle text-center p-1 px-3" style="height: inherit;">
                                                <div @click="handleDayClick(col)" 
                                                        type="button" 
                                                        v-if="col <= 24" 
                                                        style="height: 100%;" 
                                                        class="font-cute-snow align-items-center text-center window"> 
                                                        <!-- border border-dark rounded-start-2 -->
                                                    <h5>{{ col }}</h5>
                                                </div>
                                            </td>
                                        </template>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                        <div>
                            <span class="font-christmas-icons float-end" @click="reset()">A</span>
                        </div>
                    </template>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="css">

body {
    background-image: url(../../assets/images/background.png);
    color: beige;
    min-height: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
}

.window {
    color: beige;
    border-color: darkgrey !important;
    border-top-style: solid !important;
    border-bottom-style: solid !important;
    border-left-style: solid !important;
    border-right-style: dashed !important;
    border-width: 1px !important;
    border-top-left-radius: 8px !important;
    border-bottom-left-radius: 8px !important;
    background-color: rgb(0, 0, 0, 0.03) !important;
    text-align: center !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
}

.window:hover {
    background-color: rgb(0, 0, 0, 0.1) !important;
}

.opacity-dark {
    background-color: rgb(0, 0, 0, 0.4) !important;
}

.opacity-darker {
    background-color: rgb(0, 0, 0, 0.6) !important;
}

.border-none {
    border: 0 !important;
}

@font-face {
  font-family: 'Snowballs';
  src: url(../../assets/fonts/Snowballs.ttf) format('woff2');
}

@font-face {
  font-family: 'CuteSnow-SnowFlake';
  src: url(../../assets/fonts/CuteSnow-SnowFlake.ttf) format('truetype');
}

@font-face {
  font-family: 'ChristmasEve';
  src: url(../../assets/fonts/christmaseve.ttf) format('truetype');
}

@font-face {
    font-family: 'LastChristmasSymbols';
    src: url(../../assets/fonts/LastChristmasSymbols_PERSONAL_USE_ONLY.otf);
}

@font-face {
    font-family: 'Christmas and Santona';
    src: url(../../assets/fonts/Christmas\ and\ Santona.ttf);
}

.font-snowballs {
  font-family: 'Snowballs', sans-serif;
}

.font-cute-snow {
  font-family: 'CuteSnow-SnowFlake', sans-serif;
}

.font-christmas-eve {
  font-family: 'ChristmasEve', sans-serif;
}

.font-christmas-icons {
    font-family: 'LastChristmasSymbols', sans-serif;
}

.font-christmas-bold {
    font-family: 'Christmas and Santona', sans-serif;
}
</style>
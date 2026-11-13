<script setup lang="ts">
import { ref } from 'vue';

export interface Context {
  showWindow: boolean;
}

const context = ref<Context>({
  showWindow: false,
});

const arr = [...Array(49).keys()].slice(1).sort(() => Math.random() - 0.5).reduce((agg: number[][], cur: number, idx: number) => {
  if (idx % 6 === 0) {
    agg = [...agg, []]
  }
  agg[agg.length -1].push(cur);
  return agg;
}, []);

const today = 6;



</script>

<template>
   <div class="container-fluid m-0 p-0" style="height: 100vh; border: 1px solid red;">
     <div class="row vh-row-1 px-4">
        <div class="col p-12 text-center">
          <h1 class="font-cute-snow">Advent Calendar 2026</h1>
          <!-- <h1 class="font-cute-snow vh-font-9">Advent Calendar 2026</h1> -->
        </div>
      </div>
      <template v-if="context.showWindow">
        <div class="vh-row-7 container align-items-center text-center">
          <div class="card text-bg-danger mb-3 vh-row-6 w-100 border-4">
            <div class="card-header">
              <div class="row">
                <div class="col-1"></div>
                <div class="col-10 font-christmas-eve font-weight-bold vh-font-5">
                  Day: 24
                </div>
                <div class="col-1 align-items-center float-end">
                  <div type="button" class="bi bi-dash-square vh-font-3 color-light" @click="context.showWindow = false"></div>
                </div>                
              </div>
            </div>

            <div class="card-body bg-white text-black">
              ALOOO
            </div>
          </div>
          
        </div>
      </template>
      <template v-if="!context.showWindow" v-for="(row) in arr">
        <div class="row vh-row-1 px-4">
          <template v-for="(col) in row">
            <div class="col p-2">
              <div @click="context.showWindow = true" v-if="col <= 24" class="btn btn-outline-dark w-100 h-100 align-items-center" :class="col < today? 'btn-dark text-white' : 'btn-outline-dark'">
                {{ col }}
              </div>
          </div>
          </template>
        </div>
      </template>
   </div>
</template>

<style lang="css">
@font-face {
  font-family: 'Snowballs';
  src: url(../assets/fonts/Snowballs.ttf) format('woff2');
}

@font-face {
  font-family: 'CuteSnow-SnowFlake';
  src: url(../assets/fonts/CuteSnow-SnowFlake.ttf) format('truetype');
}

@font-face {
  font-family: 'ChristmasEve';
  src: url(../assets/fonts/christmaseve.ttf) format('truetype');
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

</style>
<template>
    <div v-if='ciudades' class="container text-white">
        <p class="text-white text-md">Favourite Cities</p>
        <div v-for="(receivedData, index) of receivedList" :key="index">
            <CartaCiudad :results="receivedData" state="favourite"/>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useFavouriteStore } from '../stores/FavouriteStore'
import { useFindForecast } from '../composables/findForecast'
import CartaCiudad from './CartaCiudad.vue';

const store = useFavouriteStore();
const receivedList = ref([]);
const ciudades = store.getList;
console.log(ciudades);

watch(ciudades, actualizacion=>{
   console.log("Cambio ciudades");
   //updating
   receivedList.value=[];
   getForecast();
});

function getForecast() {
    ciudades.forEach((ciudad) => {
        console.log(ciudad)
        const { data, error, retry } = useFindForecast(`https://aerisweather1.p.rapidapi.com/forecasts/${ciudad},ar,ar`)
        //this watcher is the key to resolve async delay
        watch(data, dataOk=>{
            console.log(dataOk)
            receivedList.value.push(dataOk);
            console.log(receivedList.value);
        });
        /* receivedList.value.push(data); */
    });
};

ciudades ? getForecast() : console.log("nada en ciudades guardadas");

</script>

<template>
    <div class="container text-white">
        <p class="text-white text-md">Favourite Cities</p>
        <div v-if='receivedList' v-for="(receivedData, index) of receivedList" :key="index">
            <CartaCiudad :results="receivedData" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFavouriteStore } from '../stores/FavouriteStore'
import { useFindForecast } from '../composables/findForecast'
import CartaCiudad from './CartaCiudad.vue';

const store = useFavouriteStore();
const receivedList = ref([])
const ciudades = store.getList;
console.log(ciudades)

function getForecast(){
    ciudades.forEach((ciudad) => {
        console.log(ciudad)
        const {data,error,retry}= useFindForecast(`https://aerisweather1.p.rapidapi.com/forecasts/${ciudad},ar,ar`)
        console.log(data)
/*         receivedList.value.push(data);
        console.log(receivedList.value) */
    });
    
};

ciudades ? getForecast() : console.log("nada en ciudades guardadas");
</script>

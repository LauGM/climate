<template>
    <main class="container text-white">
        <div class="mb-8 pt-4 relative">
            <input v-model="searchInput" type="text" placeholder="Your city"
                class="p-2 px-1 w-5/6 bg-transparent border-b focus:border-secundario focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]">
            <button @click="findForecast()" class="px-3 w-1/6 text-right">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" color="white" size="2xl" />
            </button>
        </div>
        <Transition name="bounce">
            <CartaCiudad v-if='searchResults && noFavourite' :results="searchResults" state="new"
            @added="modifyNoFavourite" />
        </Transition>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import CartaCiudad from './CartaCiudad.vue';

const searchInput = ref("");
const searchResults = ref(null);
const noFavourite = ref(true);

const findForecast = () => {
    noFavourite.value = true;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'df5eac0bd2msh339a8446e79ab6ep12e415jsn930a726e354a',
            'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com'
        }
    };

    fetch(`https://aerisweather1.p.rapidapi.com/forecasts/${searchInput.value},ar,ar`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            if (response.success) {
                searchResults.value = response.response[0];
                console.log(searchResults.value.periods[0].weatherPrimary);
            }
        })
        .catch(err => console.error(err));
    searchInput.value = "";
}

const modifyNoFavourite = () => {
    noFavourite.value = false;
}

</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.10);
  }
  100% {
    transform: scale(1);
  }
}

</style>

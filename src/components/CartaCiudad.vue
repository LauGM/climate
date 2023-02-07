<template>
    <div class="mb-8 pt-4 relative">
        <div class="flex py-6 px-3 bg-weather-secondary rounded-md shadow-md">
            <div class="flex flex-col flex-1">
                <h2 class="text-3xl">{{ results.place.name }}</h2>
                <h3>{{ results.place.country }}</h3>
                <button v-if="state == 'new'" @click="addStorage()" class="text-left" data-bs-toggle="tooltip"
                    data-bs-placement="right" title="Add to favourites"><font-awesome-icon
                        icon="fa-solid fa-heart-circle-plus" color="white" size="xl" /></button>
                <button v-else @click="removeStorage()" class="text-left" data-bs-toggle="tooltip"
                    data-bs-placement="right" title="Add to favourites"><font-awesome-icon
                        icon="fa-solid fa-heart-circle-minus" color="white" size="xl" /></button>

            </div>
            <div v-if="icon" class="flex flex-col flex-1">
                <font-awesome-icon :icon="icon" color="white" size="2xl" />
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-3xl self-end">
                    {{ results.periods[0].avgTempC }}&deg;
                </p>
                <div class="flex gap-2">
                    <span class="text-xs">
                        H:
                        {{ results.periods[0].minTempC }}&deg;
                    </span>
                    <span class="text-xs">
                        L:
                        {{ results.periods[0].maxTempC }}&deg;
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onBeforeUpdate, onMounted, ref } from 'vue';

import { useFavouriteStore } from '../stores/FavouriteStore'
const store = useFavouriteStore();

const props = defineProps({
    results: Object,
    state: String
});

const emit = defineEmits(['added'])

const icons = [
    { weather: "Sunny", icon: "fa-solid fa-sun" },
    { weather: "Mostly Sunny", icon: "fa-cloud-sun" },
    { weather: "Mostly Cloudy", icon: "fa-cloud" },
    { weather: "Partly Cloudy", icon: "fa-cloud-sun" },
    { weather: "Rain Showers", icon: "fa-cloud-showers-heavy" },
    { weather: "Showers", icon: "fa-cloud-showers-heavy" },
];
const icon = ref("");
const found = ref(null);

onMounted(() => {
    console.log("mounted")
    console.log(props.results)
    found.value = icons.find(element => element.weather == props.results.periods[0].weatherPrimary);
    found.value ? icon.value = found.value.icon : "";
    console.log(found.value)
})

onBeforeUpdate(() => {
    console.log("before update")
    found.value = icons.find(element => element.weather == props.results.periods[0].weatherPrimary);
    found.value ? icon.value = found.value.icon : "";
    console.log(found.value)
})

const removeStorage = () => {
    store.updateList(props.results.place.name);
    console.log("removed");
}

const addStorage = () => {
    store.setList(props.results.place.name);
    console.log("agregado");
    emit('added');
}
</script>

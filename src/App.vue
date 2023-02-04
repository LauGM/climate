<script setup>
import EncabezadoComponente from './components/EncabezadoComponente.vue'
import FavoritosComponente from './components/FavoritosComponente.vue';
import PrincipalComponente from './components/PrincipalComponente.vue'
</script>

<template>
  <div class="flex flex-col bg-primario">
    <EncabezadoComponente />
    <PrincipalComponente />
    <FavoritosComponente />
  </div>
</template>

<style>
  body{
    background-color: #006684;
  }
</style>
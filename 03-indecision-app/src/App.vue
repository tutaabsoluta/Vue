<template>
  <h1>My First Vue App</h1>
  <hr />
  <MyCounter />
</template>

<script setup lang="ts">
import MyCounter from './components/MyCounter.vue';
</script>
<!-- 
<style scoped>
h1 {
  color: aqua;
}
</style> -->

<!-- Setup en el script es el metodo setup que usamos en un js file -->
<!-- Scoped solo aplica ese estilo a este componente -->
<!-- En el template Vue extrae el valor reactivo por eso se puede usar directamente en el template -->

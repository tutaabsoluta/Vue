<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button @click="increaseCounter">+1</button>
      <button @click="decreaseCounter">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

const counter = ref(2);

const squareCounter = computed(() => counter.value * counter.value);

const increaseCounter = () => {
  counter.value++;
};
const decreaseCounter = () => {
  counter.value--;
};
</script>

<!-- 
<style scoped>
h1 {
  color: aqua;
}
</style> -->

<!-- Setup en el script es el metodo setup que usamos  -->
<!-- Scoped solo aplica ese estilo a este componente -->
<!-- En el template Vue extrae el valor reactivo por eso se puede usar directamente en el template -->
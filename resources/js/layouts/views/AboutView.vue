<script setup>
  import { useCounterStore } from "@/store/counter.js";
  const useCounter = useCounterStore();
</script>
<template>
  <div class="container-xl mt-5 text-center">
    <div class="about">
      <h1 class="text-warning">This is an about page for test</h1>
    </div>
    <h1>Home counter: {{ useCounter.count }}</h1>
      <h2>Double: {{ useCounter.double }}</h2>
      <button class="btn btn-dark" @click="useCounter.increment">Increment</button>
    
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

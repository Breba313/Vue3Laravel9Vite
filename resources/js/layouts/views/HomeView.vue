<script setup>
  import { useCounterStore } from "@/store/counter.js";
  import { storeToRefs } from "pinia";

  const useCounter = useCounterStore();

  const { increment } = useCounter;
  const { count, double } = storeToRefs(useCounter);
</script>

<template>
  <div class="container-xl mt-5 text-center">
    <h1>Home counter: {{ count }}</h1>
    <h2>Double: {{ double }}</h2>
    <button  class="btn btn-dark" @click="increment">Increment</button>
  </div>
</template>

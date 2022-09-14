<script setup>
    import axios from 'axios';
    import { ref } from 'vue';

    const pokemons = ref([]);

    const getData = async () => {
      try {
        const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
        pokemons.value = data.results;
      } catch (error){
        console.log(error);
      }
    }
    getData();
</script>

<template>
  <div class="container col-8 mt-5">
    <h1>Pokemons</h1>
    <ul>
      <li v-for="poke in pokemons">
        <router-link :to="`/pokemon/${poke.name}`">
          {{ poke.name }}
        </router-link>
      </li>
    </ul>
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

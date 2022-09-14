<script setup>
  import axios from "axios";
  import { ref } from "vue"; 
  import { useRoute, useRouter } from "vue-router";
  import { useFavoritosStore } from "../../store/favoritos";
  
  

   const route = useRoute();
   const router = useRouter();
   const useFavoritos = useFavoritosStore();
   const poke = ref({});

   const { add, findPoke } = useFavoritos;

   const back = () => {
    router.push('/pokemons');
   }

   const getData = async () => {
    try {
      const { data } = await axios.get( `https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
      //console.log(data);
      poke.value = data;
    } catch (error) {
        console.log(error);
    }
   }

   getData();
</script>

<template>
  <div class="container mt-5 col-8">
    <h1>Pokemon: {{ $route.params.name}}</h1>
    <img :src="poke.sprites?.front_default" alt="" />
    <button class="btn btn-success mb-2 me-2" :disabled="findPoke(poke.name)" @click="add(poke)">Agregar Favorito</button>
    <button class="btn btn-primary mb-2 me-2" @click="back">Volver</button>
  </div>
</template>


<script setup>
    import { useFavoritosStore } from '../../store/favoritos';
    import { storeToRefs } from 'pinia';

    const useFavoritos = useFavoritosStore()

    const {favoritos} = storeToRefs(useFavoritos)
    const {remove} = useFavoritos;
</script>

<template>
    <div class="container mt-5">
        <h1>Pokemones Favoritos</h1>
        <div class="row justify-content-evenly">
            <p v-if="favoritos.length === 0">Sin Favoritos !!!</p>
            <ul class="list-group" v-else>
                <li 
                    class="list-group-item"
                    v-for="poke in favoritos"
                    :key="poke.id"
                >
                    <div class="">
                        <img :src="poke.sprites?.front_default" alt="" /> 
                        {{ poke.name }}
                        <button class="btn btn-sm btn-danger ms-3 me-2" @click="remove(poke.id)">Eliminar</button>
                        <router-link class="btn btn-sm btn-info" :to="`/pokemon/${ poke.name }`">Mas Info</router-link>
                    </div>

                </li> 
            </ul>
            
        </div>
    </div>
</template>
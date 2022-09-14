import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../layouts/views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../layouts/views/AboutView.vue')
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: () => import('../layouts/views/PokemonsView.vue')
    },
    {
      path: '/pokemon/:name',
      name: 'pokemon',
      component: () => import('../layouts/views/PokemonView.vue')
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: () => import('../layouts/views/FavoritosView.vue')
    },
  ]
})

export default router

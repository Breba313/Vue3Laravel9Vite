<script setup>
    import { onMounted, ref } from "vue";

    import PaginatePost from "./components/PaginatePost.vue";
    import BlogPost from "./components/BlogPost.vue";
    import LoadingSpinner from "./components/LoadingSpinner.vue";
    
    
    const posts = ref([]);
    const postXpage = 10;
    const inicio = ref(0);
    const fin = ref(postXpage);
    const loading = ref(false);

    const miFavorito = ref("");
    
    const fijarFavorito = (title) => {
        miFavorito.value = title;
    };

    const next = () => {
        inicio.value += postXpage;
        fin.value += postXpage;
    }

    const prev = () => {
        inicio.value += -postXpage;
        fin.value += -postXpage;
    }

    onMounted( async() => {
        loading.value = true;
       try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            posts.value = await res.json();
       } catch (error) {
            console.log(error);
       } finally {
            setTimeout( () => {
                loading.value = false;
            }, 2000)
       }
    });
    /*
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => posts.value = data)
        .finally( () => {
            setTimeout( () => {
                loading.value = false;
            }, 2000)
        });
        */
    
</script>
<template>
   <div class="container">
        <LoadingSpinner v-if="loading"/>

        <div class="container" v-else>
            <h1>{{ miFavorito || "App Vue" }}</h1>

            <div>
                <PaginatePost 
                    @next="next" 
                    @prev="prev" 
                    :inicio="inicio"
                    :fin="fin"
                    :total="posts.length"
                />

                <BlogPost
                    v-for="post in posts.slice(inicio, fin)"
                    :key="post.title"
                    :title="post.title"
                    :id="post.id"
                    :body="post.body"
                    class="mb-2"
                    @fijarFavorito="fijarFavorito"                
                />
            </div>
        </div>
    </div>
</template>
<style>
    h1 {
        color: blue;
    }
    .positive {
        color: green;
    }
    .negative {
        color: red;
    }
    .zero {
        color:blue;
    }

</style>
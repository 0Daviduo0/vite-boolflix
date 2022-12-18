<script>
import AppFilmCard from './AppFilmCard.vue'
import { store } from '../store.js';

export default {
    name: "AppFilmList",
    components: {
    AppFilmCard,
    },
    data() {
        return {
            store,
        }
    },
}

</script>


<template>

    <section class="filmContainer">
        <ul>
            <li class="filmCardContainer"  v-for="movie in store.moviesSearchResults" :key="movie.id">
                <AppFilmCard/>
            </li>
        </ul>
    </section>

</template>


<style lang="scss" scoped>

</style>
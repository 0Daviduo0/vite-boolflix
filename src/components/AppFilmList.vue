<script>
import { store } from '../store.js';

export default {
    name: "AppFilmList",
    components: {
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
                <div class="filmCard">
                    <div class="title">
                        {{ movie.title }}
                    </div>
                    <div class="original-title">
                        {{ movie.original_title }}
                    </div>
                    <div class="language">
                        {{ movie.original_language }}
                    </div>
                    <div class="rating">
                        {{ movie.vote_average }}
                    </div>
                </div>
            </li>
        </ul>
    </section>

</template>


<style lang="scss" scoped>

</style>
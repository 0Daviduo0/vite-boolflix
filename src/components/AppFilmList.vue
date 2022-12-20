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
    
    <section class="mediaContainer">

        <ul>
            <li class="mediaCardContainer" v-for="movie in store.moviesSearchResults" :key="movie.id">

                <div class="mediaImg">
                    <img class="mediaThumb" :src=" 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path " alt="">
                </div>

                <div class="mediaCard">
                    <div class="title">
                        {{ movie.title }}
                    </div>
                    <div class="original-title">
                        {{ movie.original_title }}
                    </div>
                    <div class="language_rating">
                        <img class="flag" v-if="store.availableLanguages.includes(movie.original_language)" :src="'../../src/imgs/flags/' + movie.original_language + '.svg'" alt="">
                        <span class="language" v-else> {{ movie.original_language }} </span>
                        <span class="star" v-for="n in 5" :key="n"> {{ n <= Math.ceil(movie.vote_average) / 2 ? '⭐' : '&#9734' }}</span>
                    </div>
                </div>


            </li>
        </ul>
    </section>

</template>


<style lang="scss" scoped>

@use '../style/partials/mainMediaStyle.scss';

</style>
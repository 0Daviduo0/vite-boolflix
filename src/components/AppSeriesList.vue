<script>
import { store } from '../store.js';

export default {
    name: "AppSeriesList",
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
            <li class="mediaCardContainer"  v-for="serie in store.seriesSearchResults" :key="serie.id">

                <div class="mediaImg">
                    <img class="mediaThumb" :src=" 'https://image.tmdb.org/t/p/w500' + serie.backdrop_path " alt="">
                </div>

                <div class="mediaCard">
                    <div class="title">
                        {{ serie.name }}
                    </div>
                    <div class="original-title">
                        {{ serie.original_name }}
                    </div>
                    <div class="language_rating">
                        <img class="flag" v-if="store.availableLanguages.includes(serie.original_language)" :src="'../../src/imgs/flags/' + serie.original_language + '.svg'" alt="">
                        <span class="language" v-else> {{ serie.original_language }} </span>
                        <span class="star" v-for="n in 5" :key="n"> {{ n <= Math.ceil(serie.vote_average) / 2 ? '⭐' : '&#9734' }}</span>
                    </div>
                </div>
            </li>
        </ul>
    </section>

</template>


<style lang="scss" scoped>

@use '../style/partials/mainMediaStyle.scss';

</style>
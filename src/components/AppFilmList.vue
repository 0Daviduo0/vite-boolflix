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
            <li class="mediaCardContainer"  v-for="movie in store.moviesSearchResults" :key="movie.id">

                <div class="mediaImg" :style="{ backgroundImage: 'url(' + 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path + ')' }">
                    
                </div>

                <div class="mediaCard">
                    <div class="title">
                            {{ movie.title }}
                    </div>
                    <div class="original-title">
                            {{ movie.original_title }}
                    </div>
                    <div class="language">
                            {{ movie.original_language }}
                    </div>
                    <div class="rating" id="rating" >
                            {{ movie.vote_average }}
                    </div>
                </div>

                
            </li>
        </ul>
    </section>

</template>


<style lang="scss" scoped>

@use '../style/partials/mainMediaStyle.scss';
    

</style>
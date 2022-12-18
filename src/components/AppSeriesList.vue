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

    <section class="seriesContainer">
        <ul>
            <li class="seriesCardContainer"  v-for="serie in store.seriesSearchResults" :key="serie.id">
                <div class="seriesCard">
                    <div class="title">
                        {{ serie.title }}
                    </div>
                    <div class="original-title">
                        {{ serie.original_title }}
                    </div>
                    <div class="language">
                        {{ serie.original_language }}
                    </div>
                    <div class="rating">
                        {{ serie.vote_average }}
                    </div>
                </div>
            </li>
        </ul>
    </section>

</template>


<style lang="scss" scoped>

.seriesContainer{
    color: aqua;
}

</style>
<script>
import { store } from '../store.js';

    export default {
        name: "AppFilmCard",
        data() {
            return {
                store,
            }
        },
    }

</script>


<template>

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

</template>


<style lang="scss" scoped>

</style>
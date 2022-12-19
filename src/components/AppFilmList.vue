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

                <div class="movieImg" :style="{ backgroundImage: 'url(' + 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path + ')' }">
                    
                </div>

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
                    <div class="rating" id="rating">
                            {{ movie.vote_average }}
                    </div>
                </div>

                
            </li>
        </ul>
    </section>

</template>


<style lang="scss" scoped>

.filmContainer{
    display: flex;
    justify-content: center;
    padding-top: 40px;
    ul{
        list-style: none;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(5, 1fr);
        grid-column-gap: 40px;
        grid-row-gap: 40px;
    }

    .filmCardContainer{
        position: relative;

        .movieImg{
            width: 300px;
            height: 400px;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: -200px;
            border-radius: 10px;
            overflow: hidden;
        }
        
        .filmCard{
            pointer-events: none;
            background-color: rgba(0, 0, 0, 0.562);
            color: #fff;
            width: 300px;
            height: 400px;
            display: none;
            position: absolute;
            top: 50%;  
            left: 50%; 
            transform: translate(-50%, -50%);
            border-radius: 10px;
            overflow: hidden;
        }

        .movieImg:hover{
            filter: blur(8px);
        }

        .movieImg:hover + .filmCard{
            display: flex;
            flex-direction: column;
            padding: 30px 30px;
            font-size: 15px;
        }
        
    }
        

}

    

</style>
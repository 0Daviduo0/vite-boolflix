<script>
import axios from 'axios';
import AppSearch from './AppSearch.vue';

import { store } from '../store.js';

export default{
    name: "AppHeader",
    components: {
    AppSearch,
    },
    data() {
        return {
            store,
        }
    },
    methods:{ getMovies(){

        console.log(store.MovieSearchAPI_URL);
        console.log(store.searchQuery);

        let movieSearchURL = store.MovieSearchAPI_URL;
        let seriesSearchURL = store.SeriesSearchAPI_URL;
        let searchElement = store.searchQuery;
        if(searchElement !== ""){
            searchElement = searchElement.replace(/ /g,"+");
            movieSearchURL += `?${searchElement}`;
            seriesSearchURL += `?${searchElement}`;
        }
        console.log("film:", movieSearchURL);
        console.log("serie:", seriesSearchURL)

        axios.get(movieSearchURL)
        .then(res => {
            // i dati vengono importati tramite store.*nome proprietà utilizzata da store e messi all'interno dell'array vuoto 
            store.moviesSearchResults = res.data.results;
        })
        .catch(err => {
        console.log("Errors", err)  //mostra eventuali errori nel log della console
        });

        axios.get(seriesSearchURL)
        .then(res => {
            // i dati vengono importati tramite store.*nome proprietà utilizzata da store e messi all'interno dell'array vuoto 
            store.seriesSearchResults = res.data.results;;
        })
        .catch(err => {
        console.log("Errors", err)  //mostra eventuali errori nel log della console
        });
        
        let MoviesearchResults = store.moviesSearchResults;
        console.log(MoviesearchResults);
        let SeriessearchResults = store.seriesSearchResults;
        console.log(SeriessearchResults);
    }
    },
}
</script>


<template>

    <header>

        <div class="logo">
            <img src="../imgs/boolflix.png" alt="">
        </div>

        <AppSearch  @search="getMovies"/>

    </header>
 
</template>


<style lang="scss" scoped>

header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    background-color: black;
    height: auto;
}

</style>

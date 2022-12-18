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

        let searchURL = store.MovieSearchAPI_URL;
        let searchElement = store.searchQuery;
        if(searchElement !== ""){
            searchElement = searchElement.replace(/ /g,"+");
            searchURL += `?${searchElement}`
        }
        console.log(searchURL);

        axios.get(searchURL)
        .then(res => {
        store.moviesSearchResults = res.data.results;   // i dati vengono importati tramite store.*nome proprietà utilizzata da store e messi all'interno dell'array vuoto 
        })
        .catch(err => {
        console.log("Errors", err)  //mostra eventuali errori nel log della console
        });
        
        let MoviesearchResults = store.moviesSearchResults;
        console.log(MoviesearchResults)
    }
    },
}
</script>


<template>

    <header>

        <div class="logo">
            BOOLFLIX
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
    height: 80px;

    .logo{
        color: red;
        font-size: 30px;
    }
}

</style>

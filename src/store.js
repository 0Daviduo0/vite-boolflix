// store.js serve a centralizzare i dati, evitando catene di dati tramite props
import { reactive } from 'vue'   //importa "reactive" già presente in vue

export const store = reactive({
    moviesSearchResults: [],
    MmovieSearchAPI_URL: "https://api.themoviedb.org/3/search/movie?api_key=6249fd8b52efe2c2a1a7d3ad7d5a652c&query=",
    searchQuery: "",
});

// i dati vengono centralizzati per poter essere importati nei vari componenti
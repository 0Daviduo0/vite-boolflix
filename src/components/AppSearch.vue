<script>
import { store } from '../store.js';

    export default {
        name: "AppSearch",
        data() {
            return {
                store,
            }
        },
    }

</script>


<template>

    <div class="searchContainer">
        <form>
            <input type="text" name="searchbar" id="searchbar" v-model="store.searchQuery">
            <button id="searchbarButton" type="submit" @click.prevent="$emit('search')">🔎</button>
        </form>
    </div>

</template>


<style lang="scss" scoped>

#searchbar{
    border: none;
    background-color: #000;
    color: #fff;
    border-bottom: #fff 1px solid;
    font-size: 25px;
}

#searchbarButton{
    padding-left: 10px;
    border: none;
    background-color: #000;
    color: #fff;
    font-size: 20px;
}

</style>
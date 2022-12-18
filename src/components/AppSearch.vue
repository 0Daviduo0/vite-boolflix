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
            <button type="submit" @click.prevent="$emit('search')">Search</button>
        </form>
    </div>

</template>


<style lang="scss" scoped>

    .filter-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 80px;
    }

    .counter{
        background-color: rgba(255, 255, 255, 0.342);
        padding: 3px 10px;
        margin-left: 10px;
        border-radius: 10px;
        overflow: hidden;
        color: #fff;
        font-weight: 700;
    }

    #status{
        background-color: rgba(255, 255, 255, 0.342);
        padding: 3px 10px;
        border: none;
        border-radius: 10px;
        overflow: hidden;
        font-weight: 700;
    }

</style>
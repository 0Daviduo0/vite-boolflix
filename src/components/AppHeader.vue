<script>
import AppSearch from './AppSearch.vue';

export default{
    name: "AppHeader",
    components: {
    AppSearch, 
    },
}
</script>


<template>

    <header>

        <div class="logo">
            BOOLFLIX
        </div>

        <AppSearch/>

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

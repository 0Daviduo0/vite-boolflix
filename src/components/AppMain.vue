<script>
import AppFilmList from './AppFilmList.vue'
import AppSeriesList from './AppSeriesList.vue'


export default{
    name: "AppMain",
    components: {
    AppFilmList,
    AppSeriesList,
    },
}
</script>


<template>

    <main>

        <AppFilmList/>

        <AppSeriesList/>

    </main>
 
</template>


<style lang="scss" scoped>

main{
    background-color: grey;
    min-height: 800px;
}

</style>

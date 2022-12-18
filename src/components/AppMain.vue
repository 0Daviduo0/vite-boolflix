<script>
import AppFilmList from './AppFilmList.vue'

export default{
    name: "AppMain",
    components: {
    AppFilmList,
    },
}
</script>


<template>

    <main>

        <AppFilmList/>

    </main>
 
</template>


<style lang="scss" scoped>

main{
    background-color: grey;
    min-height: 800px;
}

</style>

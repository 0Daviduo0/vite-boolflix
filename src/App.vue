<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
import AppSearch from './components/AppSearch.vue';

import { store } from './store.js';

export default {
  name: "App",
  components: {
    AppHeader,
    AppSearch,
    AppMain,
    AppFooter,
    
},
  data() {
    return {
      store,
    }
  },
}

</script>

<template>

  <AppHeader/>

  <AppMain/>
  
  <AppFooter/>
 
</template>

<style lang="scss">
@use './style/general.scss';
 
</style>

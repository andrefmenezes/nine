<template>
  <div id="app">
    <navbar/>
   <router-view/>
   <fofo/>

  </div>
</template>

<script>

import navbar from './components/Navbar';
import fofo from './components/Footer';
export default {
  name: 'App',
  components:{
    navbar,
    fofo
  }
}
</script>

<style>


</style>

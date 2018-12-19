<template>
  <div id="app">
    <nkn-header></nkn-header>
    <router-view/>
  </div>
</template>

<script>
import nknHeader from '@/components/header/nknHeader'
export default {
  name: 'App',
  components: {
    nknHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

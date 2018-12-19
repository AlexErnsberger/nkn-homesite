<template>
  <div id="app">
    <nkn-header></nkn-header>
    <router-view/>
    <nkn-footer></nkn-footer>
  </div>
</template>

<script>
import nknHeader from '@/components/header/nknHeader'
import nknFooter from '@/components/footer/nknFooter'
export default {
  name: 'App',
  components: {
    nknHeader, nknFooter
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

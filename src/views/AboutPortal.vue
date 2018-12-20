<template>
  <div class="about">
    <about-header></about-header>
    <about-team></about-team>
    <about-adviser></about-adviser>
  </div>
</template>

<script>
import AboutHeader from '@/components/about/Header'
import AboutTeam from '@/components/about/nknCoreTeam'
import AboutAdviser from '@/components/about/nknAdviser'
export default {
  components: {
    AboutHeader,
    AboutTeam,
    AboutAdviser
  }
}
</script>

<style>

</style>

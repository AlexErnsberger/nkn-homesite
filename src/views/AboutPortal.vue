<template>
  <div class="nkn-about">
    <about-header></about-header>
    <div class="container">
      <about-team></about-team>
      <about-adviser></about-adviser>
    </div>
    <about-roadmap></about-roadmap>
    <div class="container">
      <about-partner></about-partner>
    </div>
  </div>
</template>

<script>
import AboutHeader from '@/components/about/Header'
import AboutTeam from '@/components/about/nknCoreTeam'
import AboutAdviser from '@/components/about/nknAdviser'
import AboutRoadmap from '@/components/about/nknRoadmap'
import AboutPartner from '@/components/about/nknPartner&Exchanges'
export default {
  components: {
    AboutHeader,
    AboutTeam,
    AboutAdviser,
    AboutRoadmap,
    AboutPartner
  }
}
</script>

<style>

</style>

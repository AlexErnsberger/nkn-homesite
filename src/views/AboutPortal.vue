<template>
  <div class="about">
    <about-header></about-header>
    <about-team></about-team>
    <about-adviser></about-adviser>
    <about-roadmap></about-roadmap>
    <about-partner></about-partner>
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

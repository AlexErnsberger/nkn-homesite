<template>
  <div class="about">
    <about-header></about-header>
    <about-team></about-team>
    <about-adviser></about-adviser>
    <about-roadmap></about-roadmap>
  </div>
</template>

<script>
import AboutHeader from '@/components/about/Header'
import AboutTeam from '@/components/about/nknCoreTeam'
import AboutAdviser from '@/components/about/nknAdviser'
import AboutRoadmap from '@/components/about/nknRoadmap'
export default {
  components: {
    AboutHeader,
    AboutTeam,
    AboutAdviser,
    AboutRoadmap
  }
}
</script>

<style>

</style>

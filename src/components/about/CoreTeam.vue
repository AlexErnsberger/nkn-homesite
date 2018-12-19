<template>
  <div class="about-team">
    <div class="container">
      <div class="l2-title">Core Team</div>
      <div class="team-body">
        <team-module>
          <div slot="title">
            <i class="pic-team-yanbo" ></i>
            <span>Yanbo Li</span>
          </div>
          <div slot="position">
            Founder | Core Developer
          </div>
          <div slot="contribute">
            Former Co-founder of Onchain
          </div>
          <div slot="detail">
            Core designer and developer of the blockchain system “DNA”.Open-source advocate, Linux Kernel network subsystem code contributor.
          </div>
        </team-module>
      </div>
    </div>
  </div>
</template>

<script>
import TeamModule from './plugins/TeamModule'
export default {
  components: {
    TeamModule
  }
}
</script>

<style lang="scss" scoped>
.about-team{
  padding: 30px 0;
  .team-body{
    padding: 100px 0;
  }
}
</style>

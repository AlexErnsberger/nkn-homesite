<template>
  <div class="nkn-team">
    <div class="container">
      <div class="l2-title">Core Team</div>
      <div class="nkn-team-body clearfix">
        <team-module>
          <i slot="title-img" class="pic-team-yanbo" ></i>
          <span slot="title-text">Yanbo Li</span>
          <span slot="position">Founder | Core Developer</span>
          <span slot="contribute">Former Co-founder of Onchain</span>
          <span slot="detail">
            Core designer and developer of the blockchain system "DNA".
            Open-source advocate, Linux Kernel network subsystem code contributor.
          </span>
          <a :href="$url.TEAM_LINK.github.yanbo" target="_blank" slot="github"><i class="icon iconfont icon-github-radio"></i></a>
          <a :href="$url.TEAM_LINK.linkedin.yanbo" target="_blank" slot="linkedin"><i class="icon iconfont icon-linkedin"></i></a>
        </team-module>
        <team-module>
          <i slot="title-img" class="pic-team-bruce" ></i>
          <div slot="title-text">Zheng</div>
          <div slot="title-text">"Bruce" Li</div>
          <span slot="position">Co-Founder</span>
          <span slot="contribute">Strategy & Innovation</span>
          <span slot="detail">
            Founded multi million dollars startup projects at Nokia & Google, led R&D teams across US, EU, CN.
            Expert on telecom innovation, specializing in strategy and business development.
          </span>
          <a :href="$url.TEAM_LINK.linkedin.bruce" target="_blank" slot="linkedin"><i class="icon iconfont icon-linkedin"></i></a>
        </team-module>
        <team-module>
          <i slot="title-img" class="pic-team-yilun" ></i>
          <span slot="title-text">Yilun Zhang</span>
          <span slot="position">Co-Founder</span>
          <span slot="contribute">Core Researcher & Developer</span>
          <span slot="detail">
            Ph.D in physics at University of California San Diego. B.S. in physics at Peking University.
            Domain expert in Cellular Automata, Ising model and distributed information processing systems. Full stack engineer.
          </span>
          <a :href="$url.TEAM_LINK.github.yilun" target="_blank" slot="github"><i class="icon iconfont icon-github-radio"></i></a>
          <a :href="$url.TEAM_LINK.linkedin.yilun" target="_blank" slot="linkedin"><i class="icon iconfont icon-linkedin"></i></a>
        </team-module>
        <team-module>
          <i slot="title-img" class="pic-team-allen" ></i>
          <span slot="title-text">Allen Dixon</span>
          <span slot="position">Business Development</span>
          <span slot="contribute">& Compliance</span>
          <span slot="detail">
            Senior BD expert proficient at integrating tech and business to create new opportunities.
            20+ years of Telecom experience. Led partnerships with Apple, Amazon, startups, and more.
          </span>
          <a :href="$url.TEAM_LINK.linkedin.allen" target="_blank" slot="linkedin"><i class="icon iconfont icon-linkedin"></i></a>
        </team-module>
      </div>
    </div>
  </div>
</template>

<script>
import TeamModule from '@/components/about/plugins/TeamModule'
export default {
  components: {
    TeamModule
  }
}
</script>

<style lang="scss" scoped>
.nkn-team{
  padding: 30px 0;
  &-body{
    padding: 100px 0;
    &>div+div{
      margin-left: 26px;
    }
  }
}
</style>

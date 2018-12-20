<template>
  <div class="nkn-roadmap">
    <div class="container">
      <div class="l2-title-light">Roadmap</div>
      <div class="roadmap-body">
        <div class="roadmap-flag roadmap-flag-testnet">TESTNET</div>
        <div class="roadmap-flag roadmap-flag-mainnet">MAINNET</div>
        <process-module class="step1"></process-module>
      </div>
    </div>
  </div>
</template>

<script>
import ProcessModule from '@/components/about/plugins/ProcessModule'
export default {
  components: {
    ProcessModule
  }
}
</script>

<style lang="scss" scoped>
.nkn-roadmap{
  background: #0a163c;
  padding: 120px 0;
  .roadmap-body{
    padding-top: 100px;
    height: 1000px;
    position: relative;
    @include nkn-bg-img($url:$l2-about-roadmap-bg, $position:center 100px, $size:2px 893px);
    .roadmap-flag{
      font-size: 48px;line-height: 1;
      color: #43507a;
      position: absolute;

      &-testnet{
        top: 100px;
      }

      &-mainnet{
        bottom: 270px;
      }
    }
    .step1{
      right: calc(50% - 507px);
    }
  }
}
</style>

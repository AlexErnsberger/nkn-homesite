<template>
  <div class="nkn-roadmap">
    <div class="container">
      <div class="common-title-light">Roadmap</div>
      <div class="roadmap-body">
        <div class="roadmap-flag roadmap-flag-testnet">TESTNET</div>
        <div class="roadmap-flag roadmap-flag-mainnet">MAINNET</div>
        <process-module class="process-firefox" :schedule="'small'">
          <span slot="process-time">June 16th, 2018</span>
          <i slot="process-pic"  class="pic-roadmap-firefox"></i>
          <span slot="process-content-title">V0.1 "Firefox" release</span>
          <span slot="process-content-desc">First live testnet over global nodes with all core subsystems working together</span>
        </process-module>
        <process-module class="process-lemur" :schedule="'small'">
          <span slot="process-time">August，2018</span>
          <i slot="process-pic"  class="pic-roadmap-lemur"></i>
          <span slot="process-content-title">V0.3 "Lemur" release</span>
          <span slot="process-content-desc">Optimizing scalability and efficiency, SDK alpha release</span>
        </process-module>
        <process-module class="process-koala" :schedule="'big'">
          <span slot="process-time">October，2018</span>
          <i slot="process-pic"  class="pic-roadmap-koala"></i>
          <span slot="process-content-title">V0.5 “Koala” release</span>
          <span slot="process-content-desc">Enhancing attack resistance, larger scale testnet, SDK Beta release</span>
        </process-module>
        <process-module class="process-meerkat" :schedule="'big'">
          <span slot="process-time">January，2019</span>
          <i slot="process-pic"  class="pic-roadmap-meerkat"></i>
          <span slot="process-content-title">V0.7 “Meerkat” release</span>
          <span slot="process-content-desc">Full featured testnet with complete implementation and performance, SDK v1.0 release</span>
        </process-module>
        <process-module class="process-beluga" :schedule="'big'">
          <span slot="process-time">March，2019</span>
          <i slot="process-pic"  class="pic-roadmap-beluga"></i>
          <span slot="process-content-title">V0.9 “Beluga” release</span>
          <span slot="process-content-desc">Further develop and improve NKN core system based on status of the TestNet</span>
        </process-module>
        <process-module class="process-narwhal" :schedule="'big'">
          <span slot="process-time">June，2019</span>
          <i slot="process-pic"  class="pic-roadmap-narwhal"></i>
          <span slot="process-content-title">V1.0 “Narwhal” release</span>
          <span slot="process-content-desc">Launch MainNet &amp; NKN ecosystem</span>
        </process-module>
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
  padding: 120px 0 0 0;
  box-sizing: border-box;
  .roadmap-body{
    padding-top: 100px;
    height: 900px;
    position: relative;
    @include nkn-bg-img($url:$about-roadmap-bg, $position:calc(50% - 1px) 100px, $size:2px 893px);
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
    .process{
      &-firefox, &-lemur, &-koala, &-meerkat, &-beluga, &-narwhal{
        right: calc(50% - 495px);
        color: #1791f2;
      }
      &-lemur{
        top:227px;
      }
      &-koala{
        color: #ff9629;
        top:354px;
      }
      &-meerkat{
        top:481px;
      }
      &-beluga{
        bottom: 230px;
      }
      &-narwhal{
        bottom: 103px;
      }
    }
  }
}
</style>

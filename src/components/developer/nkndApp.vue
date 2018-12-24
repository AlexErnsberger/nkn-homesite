<template>
<div class="nkn-eg-dapp">
  <div class="common-sub-title">Example dApps</div>
  <div class="dapp-content clearfix">
    <div class="dapp-content-detail">
      <dapp-module>
        <i slot="dapp-pic" class="pic-dapp-spacecats"></i>
        <span slot="dapp-title">Spacecats</span>
        <span slot="dapp-content">There will be a short intro about Spacecats</span>
      </dapp-module>
    </div>
    <div class="dapp-content-detail">
      <dapp-module>
        <i slot="dapp-pic" class="pic-dapp-chat"></i>
        <span slot="dapp-title">NKN Chat</span>
        <span slot="dapp-content">There will be a short intro about NKN Chat</span>
      </dapp-module>
    </div>
    <div class="dapp-content-detail">
      <dapp-module>
        <i slot="dapp-pic" class="pic-dapp-wallet"></i>
        <span slot="dapp-title">New Kind of Wallet</span>
        <span slot="dapp-content">There will be a short intro about New Kind of Wallet</span>
      </dapp-module>
    </div>
    <div class="dapp-content-detail">
      <dapp-module>
        <i slot="dapp-pic" class="pic-dapp-cash cash-pic-style"></i>
        <span slot="dapp-title">$ $ $</span>
        <span slot="dapp-content">Call for volunteers to port some open source messaging app to NKN. A good one with >500 Daily Active Users will be pledged 100,000 $NKN</span>
      </dapp-module>
    </div>
  </div>
</div>
</template>

<script>
import DappModule from '@/components/developer/plugins/dAppModule'
export default {
  components: {
    DappModule
  }
}
</script>

<style lang="scss" scoped>
.nkn-eg-dapp {
  padding: 100px 0;

  .dapp-content {
    &-detail {
      float: left;
    }

    &>div+div {
      margin-left: 137px;
    }
  }
}
</style>

<template>
  <div class="nkn-miner">
    <div class="container">
      <div class="common-title">Miner Portal</div>
      <miner-intro></miner-intro>
      <miner-get-started></miner-get-started>
      <miner-node-software></miner-node-software>
      <miner-resources></miner-resources>
    </div>
  </div>
</template>

<script>
import MinerIntro from '@/components/miner/nknMiningIntro'
import MinerGetStarted from '@/components/miner/nknGetStarted'
import MinerNodeSoftware from '@/components/miner/nknNodeSoftware'
import MinerResources from '@/components/miner/nknMiningResources'
export default {
  components: {
    MinerIntro, MinerGetStarted, MinerNodeSoftware, MinerResources
  }
}
</script>

<style lang="scss" scoped>
.nkn-miner{
  padding: 120px 0 100px 0;
}
</style>

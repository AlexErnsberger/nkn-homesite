<template>
<div class="nkn-developer">
  <div class="container">
    <div class="common-title">Developer Portal</div>
    <developer-client-intro></developer-client-intro>
    <developer-dapp></developer-dapp>
    <developer-resources></developer-resources>
  </div>
</div>
</template>

<script>
import DeveloperClientIntro from '@/components/developer/nknClientIntro'
import DeveloperDapp from '@/components/developer/nkndApp'
import DeveloperResources from '@/components/developer/nknResources'
export default {
  components: {
    DeveloperClientIntro,
    DeveloperDapp,
    DeveloperResources
  }
}
</script>

<style lang="scss" scoped>
.nkn-developer {
  padding: 120px 0 90px 0;
}
</style>

<template>
  <div class="nkn-developer">
    <div class="container">
      <div class="l2-title">Developer Portal</div>
      <developer-client-intro></developer-client-intro>
    </div>
  </div>
</template>

<script>
import DeveloperClientIntro from '@/components/developer/nknClientIntro'
export default {
  components: {
    DeveloperClientIntro
  }
}
</script>

<style lang="scss" scoped>
.nkn-developer{
  padding: 120px;
}
</style>

<template>
<div class="nkn-header">
  <div class="container clearfix">
    <div class="nkn-header-logo">
      <i class="icon-nkn-logo"></i>
    </div>
    <div class="nkn-header-nav">
      <nkn-header-nav></nkn-header-nav>
      <nkn-header-lang></nkn-header-lang>
    </div>
  </div>
</div>
</template>

<script>
import nknHeaderNav from '@/components/header/nknHeaderNav'
import nknHeaderLang from '@/components/header/nknHeaderLang'
export default {
  components: {
    nknHeaderNav,
    nknHeaderLang
  }
}
</script>

<style lang="scss" scoped>
.nkn-header {
  width: 100%;
  background: #0b163c;

  &-logo,
  &-nav {
    line-height: 104px;
  }

  &-logo {
    float: left;
  }

  &-nav {
    float: right;
  }
}
</style>

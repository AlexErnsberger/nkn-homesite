<template>
<div class="nkn-footer">
  <div class="nkn-footer-body">
    <div class="container">
      <nkn-footer-link></nkn-footer-link>
    </div>
  </div>
  <div class="nkn-footer-bottom">
    <div class="container">
      <div class="nkn-copyright">
        Copyright © 2017-2018 NKN | All rights reserved
      </div>
    </div>
  </div>
</div>
</template>

<script>
import nknFooterLink from '@/components/footer/nknFooterLink'
export default {
  components: {
    nknFooterLink
  }
}
</script>

<style lang="scss" scoped>
.nkn-footer {
  &-body {
    @include nkn-bg-img($url: $footer-body-bg);
  }

  &-bottom {
    width: 100%;
    line-height: 46px;
    background: #000;

    .nkn-copyright {
      font-size: 14px;
      color: #fff;
      text-align: center;
      letter-spacing: 1px;
    }
  }
}
</style>

<template>
<div class="dapp-module">
  <div class="dapp-pic">
    <slot name="dapp-pic"></slot>
  </div>
  <div class="dapp-title">
    <slot name="dapp-title"></slot>
  </div>
  <div class="dapp-content">
    <slot name="dapp-content"></slot>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.dapp {
  &-module {
    text-align: center;
    max-width: 196px;
    margin: 0 auto;
  }

  &-pic {
    line-height: 136px;
    margin-top: 20px;
  }

  &-title {
    font-size: 18px;
    font-weight: 600;
    color: currentColor;
    line-height: 30px;
  }

  &-content {
    font-size: 14px;
    color: currentColor;
    text-align: justify;
    margin-top: 15px;
  }
}
</style>

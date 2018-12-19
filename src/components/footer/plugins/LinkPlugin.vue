<template>
  <ul class="link-plug">
    <li class="link-plug-title">
      <slot name="title"></slot>
    </li>
    <li class="link-plug-tab">
      
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.link-plug{
  color: #fff;
  &-plug-title{
    font-size: 24px;color:currentColor;
  }
  &-plug-text{
    padding: 15px 0;
    font-size: 18px;color:currentColor;
  }
}
</style>

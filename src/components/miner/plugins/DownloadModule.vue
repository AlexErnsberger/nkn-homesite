<template>
  <div class="download-module">
    <div class="download-icon">
      <slot name="download-icon"></slot>
    </div>
    <a href="" class="download-btn">
      <slot name="download-btn"></slot>
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.download{
  // &-module{
  //   margin: 40px 0;
  // }
  &-icon, &-btn{
    display: inline-block;
  }

  &-btn{
    width: 246px; line-height: 52px;border-radius: 4px;margin-left: 30px;
    font-size: 18px;color: #fff;text-align: center;
    background: #1791f2;
  }
}
</style>

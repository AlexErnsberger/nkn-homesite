<template>
  <div class="download-module">
    <div class="download-icon">
      <slot name="download-icon"></slot>
    </div>
    <div class="download-btn">
      <slot name="download-btn"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.download{
  &-icon, &-btn{
    display: inline-block;
  }

  &-bth{
    width: 246px; line-height: 52px;border-radius: 4px;margin-left: 30px;
    font-size: 18px;color: #fff;text-align: center;
    background: #1791f2;
  }
}
</style>

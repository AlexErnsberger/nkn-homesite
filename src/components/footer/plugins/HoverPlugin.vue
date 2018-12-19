<template>
  <div class="hover-plugin" @mounseover="hover = false" @mouseout="hover = true">
    <slot name="normal-logo" v-if="hover"></slot>
    <slot name="hover-logo" v-else></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hover: true
    }
  }
}
</script>

<style lang="less" scoped>

</style>

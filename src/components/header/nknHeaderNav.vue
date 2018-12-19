<template>
<nav class="header-tab">
  <div class="header-tab-block">Developer</div>
  <div class="header-tab-block">Miner</div>
  <div class="header-tab-block">Partner</div>
  <div class="header-tab-block">News</div>
  <div class="header-tab-block">About</div>
</nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header-tab {
  display: inline-block;

  &-block {
    display: inherit;
    padding: 0 40px;
    cursor: pointer;
    font-size: 14px;
    color: #fff;

    &:hover {
      color: #1791F2;
    }
  }
}
</style>

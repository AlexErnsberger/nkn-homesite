<template>
  <nav class="header-tab">
    <div class="header-tab-block header-font">Developer</div>
    <div class="header-tab-block header-font">Miner</div>
    <div class="header-tab-block header-font">Partner</div>
    <div class="header-tab-block header-font">News</div>
    <div class="header-tab-block header-font">About</div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header-tab{
  display: inline-block;

  &-block{
    display: inherit;
    padding: 0 40px;
    cursor: pointer;

    &:hover{
      color: #1791F2;
    }
  }
}
</style>

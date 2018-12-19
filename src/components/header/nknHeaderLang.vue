<template>
  <div class="header-lang">
    <div class="header-lang-body header-font">
      <i class="icon-nkn-lang"></i>
      <span>Language</span>
    </div>
    <div class="header-lang-dropItem"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header-lang{
  display: inline-block;
  &-body{
    padding: 0 40px;
    cursor: pointer;

    &>i{
      margin-right: 6px;
    }

    &:hover{
      color: #1791F2;
    }
  }
}
</style>

<template>
<div class="header-lang">
  <div class="header-lang-body">
    <i class="icon iconfont icon-lang"></i>
    <span>Language</span>
  </div>
  <div class="header-lang-dropdown">
    <div class="drop-item">中文</div>
    <div class="drop-item">English</div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header-lang {
  display: inline-block;

  &-body {
    padding: 0 40px;
    cursor: pointer;
    font-size: 14px;
    color: #fff;

    &>i {
      margin-right: 6px;
      vertical-align: -1px;
    }

    &:hover {
      color: #1791F2;

    }
  }

  &-dropdown {
    position: absolute;
    display: none;
    min-width: 100px;
    line-height: 22px;
    font-size: 14px;
  }

  &:hover &-dropdown {
    display: block;
  }

}
</style>

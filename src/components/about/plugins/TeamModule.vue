<template>
  <div class="team-module">
    <div class="module-title">
      <slot name="title"></slot>
    </div>
    <div class="module-body">
      <div class="nkn-position">
        <slot name="position"></slot>
      </div>
      <div class="nkn-contribute">
        <slot name="contribute"></slot>
      </div>
      <div class="person-detail">
        <slot name="detail"></slot>
      </div>
    </div>
    <div class="module-bottom">
      <slot name="contact"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.team-module{
  width: 280px;height: 500px;
  box-shadow: 0 0 3px 0 #d6dbee;
  padding: 20px 46px 20px 20px;
  position: relative;
  .module-title{
    padding: 26px 0;
    border-bottom: 1px solid #bbc1d3;
    font-size: 24px;
  }
  .module-body{
    padding: 26px 0;
    font-size: 18px;

    .nkn-position, .nkn-contribute{
      color:#1791f2;
      margin-bottom: 10px;
    }
    .person-detail{
      padding: 10px 0;
      word-break: keep-all;
    }

  }
  .module-bottom{
    position: absolute;
    bottom: 20px;left: 20px;
    &>i{
      font-size: 24px;
      margin-right: 30px;
    }
  }
}
</style>

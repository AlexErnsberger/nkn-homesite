<template>
  <div class="team-module">
    <div class="module-title clearfix">
      <div class="module-title-img"><slot name="title-img"></slot></div>
      <div class="module-title-text"><slot name="title-text" ></slot></div>
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
      <slot name="github"></slot>
      <slot name="linkedin"></slot>
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
  float: left;
  box-sizing: border-box;

  &:hover{
    box-shadow: 0 0 8px 2px #d6dbee;
  }
  .module-title{
    padding: 26px 0;
    margin-right: -16px;
    border-bottom: 1px solid #bbc1d3;
    font-size: 18px;
    white-space: nowrap;

    &-img{
      float: left;
    }

    &-text{
      float: left;
      margin-left: 16px;
      font-weight: 600;
      margin-top: 45px;
    }
  }
  .module-body{
    padding: 26px 0;
    font-size: 14px;
    word-break: keep-all;

    .nkn-position, .nkn-contribute{
      color:#1791f2;
      margin-bottom: 10px;
    }
    .person-detail{
      padding: 10px 0;
      opacity: .8;
      word-break: keep-all;
    }

  }
  .module-bottom{
    position: absolute;
    bottom: 20px;left: 20px;
    & a{
      color: #bbced3;
      & i{
        font-size: 24px;
        margin-right: 30px;
        &:hover{
          color: #1791f2;
        }
      }
    }
  }
}
</style>

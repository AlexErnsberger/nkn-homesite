<template>
  <div class="adviser-module">
    <div class="module-title clearfix">
      <div class="module-title-img">
        <slot name="portrait"></slot>
      </div>
      <div class="module-title-text">
        <slot name="fullname"></slot>
      </div>
    </div>
    <div class="module-body">
      <div class="module-body-title">
        <slot name="honor"></slot>
      </div>
      <div class="module-body-content">
        <div class="honor-list">
          <slot name="honor-detail" ></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.adviser-module{
  float: left;
  width: 585px;height: 574px;
  box-sizing: border-box;
  box-shadow: 0 0 3px 0 #d6dbee;

  &:hover{
    box-shadow: 0 0 8px 2px #d6dbee;
  }
  .module-title{
    background: #0b163c;
    padding: 38px 20px 32px 20px;

    &-img{
      float: left;
    }

    &-text{
      float: left;
      margin:22px 0 0 40px;
      font-size: 30px;
      color: #fff;
    }
  }

  .module-body{
    padding:20px;
    font-size: 14px;

    &-title{
      margin: 10px 0;
      height: 53px;
      box-sizing: border-box;
      color:#1791f2;
      &>*{
        margin:10px 0;
      }
    }

    &-content{
      padding: 10px 0;
      width: 486px;

      .honor-list>*{
        position: relative;
        padding-left: 16px;
        &::before{
          content: '';
          position: absolute;
          top:5px;
          left: 0;
          width: 6px;height: 6px;
          display: inline-block;
          background: #bbc1d3;
          border-radius: 50%;
          vertical-align: 2px;
        }
      }
    }
  }
}
</style>

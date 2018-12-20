<template>
  <div class="process-module">
    <div class="process-time">June 16th, 2018</div>
    <div class="process-flag">
      <i class="pic-roadmap-firefox"></i>
      <div class="flag-content">
        <div class="flag-content-title">V0.1 "Firefox" release</div>
        <div class="flag-content-desc">First live testnet over global nodes with all core subsystems working together</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.process-module{
  position: absolute;
  width: 688px;
  color: #1791f2;
  .process-time{
    float: left;
    font-size: 18px;
    color: currentColor;

    &::after{
      content: '';
      display: inline-block;
      width: 14px;height: 14px;
      border-radius: 50%;
      // background: radial-gradient(closest-side circle, #1791f2 60%, #aed4f3 40%, #aed4f3);
      background: #1791f2;
      box-shadow: 0 0 6px 2px #1791f2;
      margin-left: 45px;
    }
  }
  .process-flag{
    float: right;
    .flag-content{
      display: inline-block;
      width: 358px;
      margin-left: 15px;
      color:currentColor;
      vertical-align: middle;
      &-title{
        font-size: 30px;
      }
      &-desc{
        font-size: 14px;
      }
    }
  }
}
</style>

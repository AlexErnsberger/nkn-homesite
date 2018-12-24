<template>
  <div class="nkn-mining-resources">
    <div class="common-sub-title">Mining Tools & Resources</div>
    <div class="clearfix">
      <div class="resources-module">
        <div class="recources-icon"></div>
        <div class="recources-content">
          <ul>
            <li class="common-fourth-title">Mining Dashboard</li>
            <li class="common-fourth-link"><a href="">NKN Official</a></li>
            <li class="common-fourth-link"><a href="">testnet.nkn.org</a></li>
          </ul>
        </div>
      </div>
      <div class="resources-module">
        <div class="recources-icon"></div>
        <div class="recources-content">
          <ul>
            <li class="common-fourth-title">Community Dashboard</li>
            <li class="common-fourth-link"><a href="">nknx.org</a></li>
          </ul>
        </div>
      </div>
      <div class="resources-module">
        <div class="recources-icon"></div>
        <div class="recources-content">
          <ul>
            <li class="common-fourth-title">New Kind of Dashboard</li>
            <li class="common-fourth-link"><a href="">Offline</a></li>
            <li class="common-fourth-link"><a href="">Github</a></li>
          </ul>
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
.nkn-mining-resources{
  margin-top: 100px;
  .resources{
    &-module{
      margin-top: 40px;
      float: left;
      width: 400px;
    }
    &-icon{
      width: 343px;height: 194px;
      background: #363f57;
    }

  }
}
</style>

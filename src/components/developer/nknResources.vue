<template>
<div class="nkn-resources">
  <div class="common-sub-title">Developer Resources</div>
  <div class="resources-content clearfix">
    <div class="resources-content-module">
      <ul>
        <li class="resources-content-title">Github Code</li>
        <li class="resources-content-detail">
          <a href="">nkn</a>
        </li>
        <li class="resources-content-detail">
          <a href="">nkn-client-js</a>
        </li>
        <li class="resources-content-detail">
          <a href="">nkn-wallet-js</a>
        </li>
        <li class="resources-content-detail">
          <a href="">nkn-mining</a>
        </li>
        <li class="resources-content-detail">
          <a href="">nnet</a>
        </li>
        <li class="resources-content-detail">
          <a href="">nkn-db-tools</a>
        </li>
      </ul>
    </div>
    <div class="resources-content-module center-module">
      <ul>
        <li class="resources-content-title">Docs & Help</li>
        <li class="resources-content-detail">
          <a href="">NKN Wiki</a>
        </li>
        <li class="resources-content-detail">
          <a href="">NKN Discord</a>
        </li>
        <li class="resources-content-detail">
          <a href="">Logo Download</a>
        </li>
        <li class="resources-content-detail">
          <a href="">NKN Youtube Video</a>
        </li>
        <li class="resources-content-detail">
          <a href="">Yilun Web3.0 Video</a>
        </li>
      </ul>
    </div>
    <div class="resources-content-module last-module">
      <ul>
        <li class="resources-content-title">Tools</li>
        <li class="resources-content-detail">
          <a href="">testnet.nkn.org</a>
        </li>
        <li class="resources-content-detail">
          <a href="">preview.nkn.org</a>
        </li>
        <li class="resources-content-detail">
          <a href="">nknx.org</a>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nkn-resources {
  .resources-content {
    padding: 40px 0;

    &-module {
      float: left;
      width: 400px;
      box-sizing: border-box;
    }

    &-title {
      font-size: 18px;
      color: currentColor;
      line-height: 58px;
    }

    &-detail {
      font-size: 14px;
      color: #1791f2;
      line-height: 34px;
    }

    .center-module {
      padding-left: 100px;
    }

    .last-module {
      padding-left: 200px;
    }
  }
}
</style>

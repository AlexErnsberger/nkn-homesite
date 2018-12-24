<template>
<div class="nkn-node-software">
  <div class="common-sub-title">Get NKN Node Software</div>
  <div class="software-module clearfix">
    <div class="software-miner">
      <div class="software-miner-header">
        <i class="pic-miner-GUI"></i>
      </div>
      <div class="common-thrid-title">GUI One-click Miner</div>
      <download-module>
        <i slot="download-icon" class="icon-miner-finder"></i>
        <span slot="download-btn">Download for Mac OS</span>
      </download-module>
      <download-module>
        <i slot="download-icon" class="icon-miner-windows"></i>
        <span slot="download-btn">Download for Windows</span>
      </download-module>
      <download-module>
        <i slot="download-icon" class="icon-miner-linux"></i>
        <span slot="download-btn">Download for Linux</span>
      </download-module>
    </div>
    <div class="software-release">
      <div class="software-release-header clearfix">
        <div class="first-col">
          <div class="pic-container">
            <i class="pic-miner-googlecloud"></i>
          </div>
          <div class="pic-container">
            <i class="pic-miner-AWS"></i>
          </div>
        </div>
        <div class="center-col">
          <div class="pic-container">
            <i class="pic-miner-DigitalOcean"></i>
          </div>
          <div class="pic-container">
            <i class="icon-miner-linux"></i>
          </div>
        </div>
        <div class="last-col">
          <div class="pic-container">
            <i class="pic-miner-Raspipng"></i>
          </div>
          <div class="pic-container">
            <i class="pic-miner-router"></i>
          </div>
        </div>
      </div>
      <div class="common-thrid-title">NKN Release V 0.5.3</div>
      <download-module>
        <i slot="download-icon" class="icon-miner-github"></i>
        <span slot="download-btn">Download from Github</span>
      </download-module>
    </div>
  </div>
</div>
</template>

<script>
import DownloadModule from '@/components/miner/plugins/DownloadModule'
export default {
  components: {
    DownloadModule
  }
}
</script>

<style lang="scss" scoped>
.nkn-node-software {
  margin-top: 100px;

  .software {
    &-module {
      padding: 40px 0;
      @include nkn-bg-img($url: linear-gradient(180deg, #c2c5cc 0, #c2c5cc), $size: 3px auto, $clip: content-box);
    }

    &-miner {
      float: left;

      &-header {
        text-align: center;
        line-height: 381px;
      }

      .download-module {
        margin-top: 40px;
      }
    }

    &-release {
      float: right;

      &-header {
        padding: 70px 0;
        width: 315px;
        height: 381px;
        box-sizing: border-box;
        text-align: center;
        line-height: 120px;

        .first-col,
        .center-col {
          float: left;
        }

        .center-col {
          margin-left: 20px;
        }

        .last-col {
          float: right;
        }
      }

      .download-module {
        margin-top: 40px;
      }
    }

  }
}
</style>

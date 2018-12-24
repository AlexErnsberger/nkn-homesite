<template>
<div class="nkn-client-intro">
  <div class="common-sub-title">nkn-client Intro</div>
  <div class="nkn-video clearfix">
    <div class="nkn-video-intro">
      <div class="nkn-video-title">NKN CTO Yilun’s introduction on NKN technology</div>
      <video-player class="nkn-video-body client-intro-flag" :options="playerOptions" :playsinline="true"></video-player>
    </div>
    <div class="nkn-video-disc">
      <div class="nkn-video-title">NKN CTO Yilun’s discussion on NKN client SDK</div>
      <video-player class="nkn-video-body client-intro-flag" :options="playerOptions" :playsinline="true"></video-player>
    </div>
  </div>
</div>
</template>

<script>
import 'video.js/dist/video-js.css'
import {
  videoPlayer
} from 'vue-video-player'

export default {
  components: {
    videoPlayer
  },
  data: function () {
    return {
      playerOptions: {
        height: '331',
        width: '593',
        autoplay: false,
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        preload: 'none',
        sources: [{
          type: 'video/mp4',
          // mp4
          src: 'http://vjs.zencdn.net/v/oceans.mp4'
          // webm
          // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        }],
        poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.nkn-client-intro {
  margin-top: 100px;

  .nkn-video {
    padding: 40px 0;

    &-intro {
      float: left;
    }

    &-disc {
      float: right;
    }

    &-title {
      font-size: 14px;
      color: currentColor;
      line-height: 1;
    }

    &-body {
      margin-top: 20px;
    }
  }
}
</style>

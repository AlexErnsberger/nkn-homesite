<template>
  <div class="nkn-mining-intro">
    <div class="common-sub-title">NKN Mining Intro</div>
    <div class="mining-video-module">
      <div class="video-title">Learn how to mine NKN in one minute</div>
      <video-player class="video-body mining-intro-flag" :options="playerOptions" :playsinline="true"></video-player>
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
        height: '626',
        width: '1113',
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
.nkn-mining-intro{
  .mining-video-module{
    padding: 40px 0;
    .video{
      &-title{
        line-height: 1;
        font-size: 20px;
        color: currentColor;
      }
      &-body{
        margin-top: 20px;
      }
    }
  }
}
</style>

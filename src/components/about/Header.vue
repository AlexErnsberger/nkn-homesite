<template>
<div class="nkn-about-header">
  <div class="map-tag map-tag-sf">
    <i class="pic-map-sf"></i>
    <span class="map-tag-desc">San Francisco Office</span>
  </div>
  <div class="map-tag map-tag-beijing">
    <i class="pic-map-beijing"></i>
    <span class="map-tag-desc">Beijing Office</span>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nkn-about-header {
  width: 1280px;
  height: 440px;
  margin: 56px auto 0 auto;
  @include nkn-bg-img($url: $about-header-bg);
  position: relative;

  .map-tag {
    position: absolute;

    &-desc {
      font-size: 18px;
      color: #156cec;
      position: absolute;
      white-space: nowrap;
      top: 20px;
    }

    &-sf {
      top: 50px;
      left: 126px;

      .map-tag-desc {
        left: 100px;
      }
    }

    &-beijing {
      top: 62px;
      right: 296px;

      .map-tag-desc {
        left: 60px;
      }
    }
  }
}
</style>

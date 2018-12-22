<template>
<div class="process-module">
  <div class="process-time">
    <slot name="process-time"></slot>
  </div>
  <div :class="dotClass"></div>
  <div class="process-flag">
    <slot name="process-pic"></slot>
    <div class="flag-content">
      <div class="flag-content-title">
        <slot name="process-content-title"></slot>
      </div>
      <div class="flag-content-desc">
        <slot name="process-content-desc"></slot>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    schedule: String
  },
  computed: {
    dotClass: function () {
      return [`${this.schedule}-dot`]
    }
  }
}
</script>

<style lang="scss" scoped>
.process-module {
  position: absolute;
  width: 688px;

  .process-time {
    float: left;
    font-size: 18px;
    color: currentColor;
  }

  .small-dot {
    @include dot-style($width: 14px, $height:14px, $bgcolor:currentColor);
    position: absolute;
    right: 488px;
    top: 7px;
  }

  .big-dot {
    @include dot-style($width: 14px, $height:14px, $bgcolor:currentColor, $boxshadow: 0 0 6px 2px currentColor);
    position: absolute;
    right: 488px;
    top: 7px;
  }

  .process-flag {
    float: right;

    .flag-content {
      display: inline-block;
      width: 358px;
      margin-left: 15px;
      color: currentColor;
      vertical-align: middle;

      &-title {
        font-size: 30px;
      }

      &-desc {
        font-size: 14px;
      }
    }
  }
}
</style>

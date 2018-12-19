<template>
  <div class="footer-link clearfix">
    <div class="footer-link-module">
      <ul>
        <li class="footer-link-module-title">Product</li>
        <li class="footer-link-module-tab">
          <i class="icon iconfont icon-developer"></i>
          <span>Developer</span>
        </li>
        <li class="footer-link-module-tab">
          <i class="icon iconfont icon-miner"></i>
          <span>Miner</span>
        </li>
        <li class="footer-link-module-tab">
          <i class="icon iconfont icon-partner"></i>
          <span>Partner</span>
        </li>
        <li class="footer-link-module-tab">
          <i class="icon iconfont icon-community"></i>
          <span>Community</span>
        </li>
      </ul>
    </div>
    <div class="footer-link-module">
      <ul>
        <li class="footer-link-module-title">Community</li>
        <li class="footer-link-module-tab">
          <i class="icon iconfont icon-telegram"></i>
          <span>Telegram</span>
        </li>
        <li class="footer-link-module-tab">
          <i class="icon iconfont icon-twitter"></i>
          <span>Twitter</span>
        </li>
        <li class="footer-link-module-tab">
          <i class="icon iconfont icon-reddit"></i>
          <span>Reddit</span>
        </li>
        <li class="footer-link-module-tab">
          <i class="icon iconfont icon-discord"></i>
          <span>Discord</span>
        </li>
      </ul>
    </div>
    <div class="footer-link-module">
      <ul>
        <li class="footer-link-module-title">Resource</li>
        <li class="footer-link-module-tab">
          <i class="icon iconfont icon-github"></i>
          <span>Github</span>
        </li>
        <li class="footer-link-module-tab">
          <i class="icon iconfont icon-word"></i>
          <span>Introduction</span>
        </li>
        <li class="footer-link-module-tab">
          <i class="icon iconfont icon-word"></i>
          <span>Whitepaper</span>
        </li>
        <li class="footer-link-module-tab">
          <i class="icon iconfont icon-download"></i>
          <span>Logo Download</span>
        </li>
      </ul>
    </div>
    <div class="footer-link-module">
      <ul>
        <li class="footer-link-module-title">Focus</li>
        <li class="footer-link-module-tab">
          <i class="icon iconfont icon-joinus"></i>
          <span>Join us</span>
        </li>
        <li class="footer-link-module-tab">
          <i class="icon iconfont icon-news"></i>
          <span>News</span>
        </li>
        <li class="footer-link-module-tab">
          <i class="icon iconfont icon-blog"></i>
          <span>Blog</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer-link{
  padding: 90px 0;
  &-module{
    float: left;
    min-width: 300px;
    color: #fff;

    &-title{
      font-size: 24px;color: currentColor;
      padding: 25px 0;
    }

    &-tab{
      font-size: 18px;color: currentColor;
      padding: 15px 0;
      cursor: pointer;

      &>i{
        margin-right: 16px;
        font-size: 24px;
        vertical-align: -1px;
      }

      &:hover {
        color:#1791F2;
      }
    }
  }
}
</style>

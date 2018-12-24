<template>
  <div class="nkn-get-started">
    <div class="common-sub-title">Get Started</div>
    <div class="mining-guide clearfix">
      <div class="mining-guide-en">
        <ul>
          <li class="mining-guide-title">Mining Guides in English</li>
          <li class="mining-guide-link">
            <a href="">http://howtominenkn.com</a>
          </li>
          <li class="mining-guide-link">
            <a href="">http://howtominenkn.com</a>
          </li>
          <li class="mining-guide-link">
            <a href="">http://howtominenkn.com</a>
          </li>
          <li class="mining-guide-link">
            <a href="">http://howtominenkn.com</a>
          </li>
        </ul>
      </div>
      <div class="mining-guide-other">
        <ul>
          <li class="mining-guide-title">Mining Guides in other languages</li>
          <li class="mining-guide-link">
            <a href="">Chinese Mining Guides</a>
          </li>
          <li class="mining-guide-link">
            <a href="">Korean Mining Guides</a>
          </li>
          <li class="mining-guide-link">
            <a href="">German Mining Guides</a>
          </li>
          <li class="mining-guide-link">
            <a href="">French Mining Guides</a>
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
.nkn-get-started{
  margin-top: 100px;
  .mining-guide{
    padding: 20px 0 30px 0;

    &-en, &-other{
      float: left;
      font-size: 18px;
    }

    &-other{
      margin-left: 268px;
    }

    &-title{
      color: currentColor;
      line-height: 58px;
    }

    &-link{
      color: #1791f2;
      line-height: 38px;
    }
  }
}
</style>

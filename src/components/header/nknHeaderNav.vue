<template>
<nav class="header-tab">
  <div class="header-tab-block" @click="handleClick" :class="{'active': tab === $namespace.Developer}">{{$namespace.Developer}}</div>
  <div class="header-tab-block" @click="handleClick" :class="{'active': tab === $namespace.MINER}">{{$namespace.MINER}}</div>
  <div class="header-tab-block" @click="handleClick" :class="{'active': tab === $namespace.PARTNER}">{{$namespace.PARTNER}}</div>
  <div class="header-tab-block" @click="handleClick" :class="{'active': tab === $namespace.COMMUNITY}">{{$namespace.COMMUNITY}}</div>
  <div class="header-tab-block" @click="handleClick" :class="{'active': tab === $namespace.ABOUT}">{{$namespace.ABOUT}}</div>
</nav>
</template>

<script>
export default {
  data: function () {
    return {
      tab: this.$namespace.HOME
    }
  },
  methods: {
    handleClick: function (e) {
      if (e.target.innerText) {
        let tabName = e.target.innerText.toLowerCase()
        this.tab = tabName
        this.$router.push({
          name: tabName
        })
      } else {
        this.$router.push({
          name: this.$namespace.HOME
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header-tab {
  display: inline-block;

  &-block {
    display: inherit;
    padding: 0 40px;
    cursor: pointer;
    font-size: 14px;
    color: #fff;

    &::first-letter {
      text-transform: uppercase;
    }

    &:hover {
      color: #1791F2;
    }
  }

  .active {
    color: #1791F2;
  }
}
</style>

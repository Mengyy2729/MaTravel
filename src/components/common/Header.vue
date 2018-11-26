<template>
  <div id="header">
    <div class="header">
      <div class="header-wrap">
        <div class="header-logo clearfix">
          <a class="logo" href=""></a>
        </div>
        <ul class="menu clearfix">
          <li class="active">
            <a>首页</a>
          </li>
          <li class="hover">
            <router-link to="/strategy">旅游攻略</router-link>
          </li>
          <li>
            <router-link to="/note">游记</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  #header
    width: 100%
    height: 58px
    background: #fff
    border-bottom: 1px solid #eee
    .header
      width: 70%
      height: 100%
      margin: 0 auto
      .header-wrap
        position: relative
        left: 0
        top: 0
        .header-logo
          float: left
          width: 136px
          height: 100%
          padding: 13px 0
          .logo
            display: block
            width: 136px
            height: 33px
            background: url(../../assets/images/head/header-small-sprites3.png) no-repeat 0 -25px;
            background-size: 125px
        .menu
          float: left
          padding: 0 10px 0 25px
          line-height: 58px
          font-size: 14px
          li
            float: left
            padding: 0 16px
            a
              display: inline-block
              color: #333
              vertical-align: top
              overflow: hidden
          li.active
            background: #ff9d00
            a
              color: #fff
          li:hover
            cursor: pointer
          li.hover
            border-bottom: 2px solid #ff9d00
            height: 56px
            a
              color: #ff9d00
</style>

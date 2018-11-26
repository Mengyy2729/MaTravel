<template>
  <div class="navbars">
    <ul class="nav">
      <li class="nav-item active">
        <router-link to="/strategy">热门游记</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/note">热门攻略</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="stylus" scoped>
  .navbars
    float: right
    width: 700px
    font-size: 16px
    line-height: 36px
    border-bottom: 1px solid #eee
    margin-bottom: 35px
    .nav
      float: left
      .nav-item
        width: 120px
        text-align: center
        float: left
        a
          font-size: 20px
          color: #333
          margin-left: 6px
      .active
        border-bottom: 3px solid #ff9d00
        a
          color: #ff9d00

</style>

<template>
  <div id="carousel">
    <div class="show-slider">
      <ul class="show-image">
        <li v-for="(list, idx) in imgList" v-show="idx == current">
          <a>
            <img :src="list.big"/>
          </a>
        </li>
      </ul>
      <ul class="show-nav">
        <template v-for="(item, idx) in imgList">
          <li :class="idx == current ? 'active' : ''" v-on:click="handleClick(idx)">
            <a href="javascript:;">
              <img :src="item.small"/>
            </a>
          </li>
        </template>
      </ul>
      <a class="more" href=""></a>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  #carousel
    width: 100%
    height: 480px
    margin-bottom: 20px
    .show-slider
      position: relative
      left: 0
      top: 0
      width: 100%
      height: 100%
      .show-image
        position: absolute
        left: 0
        top: 0
        width: 100%
        height: 100%
        overflow: hidden
        z-index: 5
        li
          float: left
      .show-nav
        position: absolute
        right: 40px
        top: 45%
        margin-top: -166px
        z-index: 10
        li
          height: 62px
          margin-bottom: 6px
          overflow: hidden
        li.active
          border: 2px solid #ff9d00
      .more
        position: absolute
        right: 40px
        top: 50%
        margin-top: 180px
        z-index: 12
        width: 110px
        height: 35px
        background: url(../../assets/images/common.png) no-repeat -60px -50px;
        border-radius: 35px
        color: #fff
        text-decoration: none
        line-height: 35px
        text-align: center
</style>

<script>
  export default {
    data () {
      return {
        current: 0,
        imgList: [
          {
            big: require('../../assets/images/carousel/01.jpeg'),
            small: require('../../assets/images/carousel/01-1.jpeg')
          },
          {
            big: require('../../assets/images/carousel/02.jpeg'),
            small: require('../../assets/images/carousel/02-2.jpeg')
          },
          {
            big: require('../../assets/images/carousel/03.jpeg'),
            small: require('../../assets/images/carousel/03-3.jpeg')
          },
          {
            big: require('../../assets/images/carousel/04.jpeg'),
            small: require('../../assets/images/carousel/04-4.jpeg')
          },
          {
            big: require('../../assets/images/carousel/05.jpeg'),
            small: require('../../assets/images/carousel/05-5.jpeg')
          }
        ]
      }
    },
    created () {
      this.playPictures();
    },
    methods: {
      handleClick (idx) {
        console.log(idx);
        this.current = idx;
      },
      playPictures () {
        var _this = this;
        setInterval(function () {
          _this.current ++;
          if(_this.current > 4){
            _this.current = 0;
          }
        }, 5000)
      }
    }
  }
</script>

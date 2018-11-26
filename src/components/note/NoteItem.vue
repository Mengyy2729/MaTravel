<template>
  <div class="note clearfix">
    <div class="note-left">
      <a href="" target="_blank">
        <img :src="note.img" />
      </a>
    </div>
    <div class="note-right">
      <div class="note-article">
        <div class="note-title">
          <h4>
            <a href="">{{note.title}}</a>
          </h4>
        </div>
        <div class="note-desc">
          <a href="">{{note.desc}}</a>
        </div>
      </div>
      <div class="note-comment">
        <div class="comment-left">
          <span class="by-person">
            <a href="">
              <img :src="note.avator"/>
              <i>{{note.name}}</i>
            </a>
          </span>
          <span class="scan-count">
            <i></i>
            <em class="total">{{note.total}}/</em><em class="current-day">{{note.current}}</em>
          </span>
        </div>
        <div class="comment-right">
          <span>
            <em>{{note.ding}}</em>
            <a href=""></a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
        note: Object
    },
    data () {
      return {}
    },
    mountd () {
      console.log(this.note);
    }
  }
</script>
<style lang="stylus" scoped>
  .note
    float: right
    width: 700px
    margin-bottom: 30px
    .note-left
      position: relative
      float: left
      width: 220px
      height: 150px
      img
        width: 220px
        height: 150px
    .note-right
      float: right
      width: 455px
      height: 150px
      .note-article
        height: 117px
        .note-title
          h4
            height: 26px
            line-height: 26px
            margin-bottom: 10px
            font-size: 18px
            a
              width: 420px
              height: 26px
              display: block
              color: #333
              overflow: hidden
              white-space: nowrap
              text-overflow: ellipsis
        .note-desc
          line-height: 20px
          font-size: 14px
          overflow: hidden
          a
            color: #666
      .note-comment
        height: 33px
        line-height: 33px
        overflow: hidden
        .comment-left
          float: left
          .by-person
            img
              width: 16px
              height: 16px
              border-radius: 50%
              vertical-align: -3px
            i
              font-size: 12px
              color: #ff9d00
              margin-left: 2px
          .scan-count
            margin-left: 10px
            line-height: 24px
            i
              display: inline-block
              width: 18px
              height: 14px
              margin-top: 3px
              background: url(../../assets/images/common.png) no-repeat -30px -50px !important
              vertical-align: -3px
            em
              color: #999
              font-size: 14px
              line-height: 24px
        .comment-right
          float: right
          em
            color: #ff9d00
            font-size: 16px
          a
            display: inline-block
            width: 38px
            height: 33px
            background: url(../../assets/images/common.png) no-repeat -60px 0 !important
            vertical-align: -11px
</style>



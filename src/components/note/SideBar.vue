<template>
    <div class="main-left">
        <div class="rec-top">
            <h2 class="rec-title">旅游攻略推荐</h2>
            <a class="rec-more" href="">更多</a>
        </div>
        <div class="rec-main">
            <div class="rec-img">
                <div class="img">
                    <a href="">
                        <img src="../../assets/images/note/note.jpeg"/>
                        <span class="mark">自由行攻略</span>
                    </a>
                </div>
                <h3 class="rec-title">
                    <a href="">干货！普吉岛岛民教你挑沙滩挑酒店</a>
                </h3>
            </div>
            <rec-list></rec-list>
        </div>
    </div>
</template>

<script>
    import RecList from '@com/note/RecList'

    export default {
        data () {
            return {

            }
        },
        components: {
            RecList
        }
    }
</script>

<style lang="stylus" scoped>
    .main-left
        float: left
        width: 260px
        .rec-top
            height: 35px
            line-height: 35px
            margin-bottom: 12px
            .rec-title
                float: left
                font-size: 18px
                color: #333
                font-weight: normal
            .rec-more
                float: right
                color: #999
                text-decoration: none
                font-size: 12px
        .rec-main
            .rec-img
                margin-bottom: 10px
                .img
                    position: relative
                    height: 140px
                    margin-bottom: 10px
                    .mark
                        position: relative
                        left: 0
                        top: -133px
                        display: block
                        width: 60px
                        height: 24px
                        padding: 0 6px
                        color: #fff
                        font-size: 12px
                        line-height: 24px
                        background: #ff6262
                    .mark:after
                        content: ''
                        position: absolute
                        top: 0
                        right: -5px
                        border-top: 12px solid #ff6262
                        border-bottom: 12px solid #ff6262
                        border-right: 5px dashed transparent
                .rec-title
                    margin: 10px 0 5px
                    width: 260px
                    height: 24px
                    line-height: 24px
                    font-size: 16px
                    overflow: hidden
                    white-space: nowrap
                    text-overflow: ellipsis
                    a
                        color: #333
        
</style>
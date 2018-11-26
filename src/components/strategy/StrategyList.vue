<template>
    <div>
        <div class="strategy-list">
            <div class="hd clearfix">
                <h3>推荐攻略</h3>   
            </div>
            <div class="gl-post">
                <strategy-item></strategy-item>
                <div data-cs-t="gonglve_feed" class="_j_feed_data" >
                    <a rel="nofollow" data-page="1" class="loading" data-cs-p="加载更多_1">
                        <span>加载更多</span><i></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import StrategyItem from '@com/strategy/StrategyItem'
    export default {
        data () {
            return {

            }
        },
        components: {
            StrategyItem
        }
    }
</script>

<style lang="stylus" scoped>
    .strategy-list
        float: right
        width: 790px
        margin-bottom: 20px
        .hd
            height: 50px
            border-bottom: 1px solid #eee
            line-height: 48px
            h3
                float: left
                font-weight: normal
                font-size: 20px
                color: #333
    .gl-post
        a
            display: block
            width: 100%
            height: 40px
            line-height: 40px
            background-color: #fff5e5
            border-radius: 4px
            color: #666
            text-align: center
</style>
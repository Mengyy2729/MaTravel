<template>
    <div class="strategy-wrap">
        <div class="strategy-top">
            <div class="strategy-left">
                <theme-classified></theme-classified>
                <theme-search></theme-search>
                <app-download></app-download>
            </div>
            <!-- 图片轮播 -->
            <slider-bar></slider-bar>
        </div>
        <div class="strategy-main">
            <side-bar></side-bar>
            <strategy-list></strategy-list>
        </div>
    </div>
</template>

<script>
    import ThemeClassified from '@com/strategy/ThemeClassified'
    import SliderBar from '@com/strategy/SliderBar'
    import ThemeSearch from '@com/strategy/ThemeSearch'
    import AppDownload from '@com/common/AppDownload'
    import SideBar from '@com/strategy/SideBar'
    import StrategyList from '@com/strategy/StrategyList'
    export default ({
        data () {
            return {}
        },
        components: {
            ThemeClassified,
            SliderBar,
            ThemeSearch,
            AppDownload,
            SideBar,
            StrategyList
        }
    })
</script>

<style lang="stylus" scoped>
    .strategy-wrap
        width: 1000px
        margin: 15px auto 0
        .strategy-top   
            height: 340px
            margin: 10px 0 15px;
            .strategy-left
                float: left
                width: 260px
                word-wrap: break-word
        .strategy-main
            margin-top: 15px
            padding-bottom: 20px
</style>
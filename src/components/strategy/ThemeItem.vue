<template>
    <div>
        <div class="nav-item" v-for="theme in themes">
            <div class="nav-title">
                <h3>{{theme.title}}</h3>
                <b class="gn-arrow"></b>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                themes: [
                    {
                        title: '海外冬季目的地精选',
                        themeItems: []
                    },
                    {
                        title: '国内冬季目的地推荐',
                        themeItems: []
                    },
                    {
                        title: '奔向海岛',
                        themeItems: []
                    },
                    {
                        title: '主题推荐',
                        themeItems: []
                    }
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .nav-item
        display: block
        width: 260px
        .nav-title
            height: 40px
            line-height: 40px
            padding: 0 15px
            border-bottom: 1px solid #ddd
            background-color: #fff
            font-size: 14px
            color: #666
            cursor: pointer
            z-index: 2
            h3 
                font-weight: normal
</style>
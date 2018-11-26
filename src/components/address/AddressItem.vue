<template>
    <div>
        <div class="drop-pop">
            <div class="inner">
                <ul class="clearfix">
                    <li v-for="(item, idx) in items" :key="idx">
                        <a href="javascript:;" target="_blank">{{item.name}}({{item.count}})</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            items: Array
        },
        data () {
            return {}
        }
    }
</script>

<style lang="stylus" scoped>
    .drop-pop
        position: absolute
        width: 410px
        line-height: 30px
        margin-top: 10px
        padding: 20px
        background-color: #fff
        border: 1px solid #e5e5e5
        display: none
        .inner
            overflow: hidden
            ul
                margin-left: -15px
                li
                    float: left
                    margin: 0 15px
                    a
                        color: #333
                        text-decoration: none
                        cursor: pointer
                        background-color: transparent
</style>
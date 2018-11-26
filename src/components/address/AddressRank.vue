<template>
    <div class="rank">
        <ul>
            <template v-for="(list, idx) in rankList">
                <li class="gl_list" v-if="idx == 0">
                    <a href="/gonglve/mdd-10045.html" :title="list.addrName" target="_blank">
                        <img :src="list.src" :alt="list.addrName">
                    </a>
                    <p class="time">更新日期:{{list.date}}</p>
                    <div class="down_cout">
                        <span></span>
                        <p>{{list.downloadCount}}人下载</p>
                    </div>
                </li>

                <li v-else class="clearfix">
                    <span class="num">{{list.id}}</span>
                    <a href="/gonglve/mdd-10602.html" :title="list.addrName" target="_blank">{{list.addrName}}</a>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            rankList: Array
        },
        data () {
            return {

            }
        }
    }
</script>

<style lang="stylus" scoped>
    .rank
        ul
            li
                padding: 15px 0
                a
                    color: #333
                    font-size: 14px
                &.gl_list
                    float: none
                    width: 140px
                    margin-right: 40px
                    a
                        display: block
                        width: 130px
                        height: 184px
                        overflow: hidden
                    .time   
                        margin: 5px 0
                        text-align: center
                        font-size: 12px
                        color: #666
                .down_cout
                    position: relative
                    width: 130px
                    height: 24px
                    margin-top: 5px
                    border-radius: 30px
                    background-color: #EBEBEB
                    font-size: 12px
                    p
                        line-height: 24px
                        color: #666
                        padding-left: 30px
                .num
                    float: left
                    margin-right: 10px
                    font-size: 18px
                    color: #ff9d00
</style>
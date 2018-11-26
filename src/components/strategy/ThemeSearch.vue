<template>
    <div class="input_like">
        <div>
            <span></span>
            <input id="search_word" type="text" placeholder="请输入想去的地方，如:香港">
            <div class="clear"></div>
        </div>
        <div class="search_resu" id="search_result">
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        }
    }
</script>

<style lang="stylus" scoped>
    .input_like 
        position: relative
        z-index: 10
        height: 40px
        margin-top: 10px
        border: 2px #FFA800 solid
        input
            float: left
            width: 206px
            height: 30px
            margin-left: 8px
            margin-top: 2px
            line-height: normal
            padding: 3px 0px
            border: 0px
            font-size: 12px
            color: #888888
            outline: none
            font-family: "Microsoft Yahei",Tahoma,Arial,Helvetica,STHeiti
        .search_resu
            position: absolute
            z-index: 50
            top: 41px
            left: -2px
            display: none
            width: 518px
            padding-bottom: 30px
            border: 1px #FFA800 solid
            background: #fff
</style>
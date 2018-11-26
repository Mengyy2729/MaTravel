<template>
    <div>
        <ul class="rec-list" @click="testClick">
            <li>
                <a href="/u/30212146.html" target="_blank" rel="nofollow">酷似剪刀</a> 点评了&nbsp;大理市的 <a href="/poi/8918650.html" target="_blank">胖丁在大理</a>
            </li>
            <li>
                <a href="/u/77975882.html" target="_blank" rel="nofollow">巴鹭晓</a> 点评了&nbsp;大理市的 <a href="/poi/34826144.html" target="_blank">吉姆餐厅</a>
            </li>
            <li>
                <a href="/u/30202071.html" target="_blank" rel="nofollow">faker</a> 点评了&nbsp;大理市的 <a href="/poi/8918650.html" target="_blank">胖丁在大理</a>
            </li>
            <li>
                <a href="/u/41805104.html" target="_blank" rel="nofollow">烟火三月</a> 点评了&nbsp;奈良的 <a href="/poi/32631174.html" target="_blank">めもり寿司学</a>
            </li>
            <li>
                <a href="/u/30183618.html" target="_blank" rel="nofollow">压路机时</a> 点评了&nbsp;大理市的 <a href="/poi/8918650.html" target="_blank">胖丁在大理</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        methods: {
            testClick (event) {
                if(event){
                    console.log(event);
                }
                
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .rec-list
        font-size: 14px
        line-height: 28px
        color: #666
        a
            color: #ff9d00
            cursor: pointer
</style>
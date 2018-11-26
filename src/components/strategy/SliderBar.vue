<template>
    <div class="slider-wrap">
        <ul class="slider-box">
            <template v-if="slideList.length">
                <li v-for="(list, idx) in slideList">
                    <a :href="list.href" target="_blank">
                        <img :src="list.imgUrl"/>
                    </a> 
                </li>
            </template>
        </ul>

        <ol class="slider-dots">
            <template v-if="slideList.length">
                <li v-for="item in slideList.length" data-id="item+1">
                    <span></span>
                </li>
            </template>
        </ol>
    </div>
</template>

<script>
    export default {
        data () {
            return  {
                slideList: [
                    {
                        href:'https://www.baidu.com',
                        imgUrl: 'https://p2-q.mafengwo.net/s12/M00/6D/03/wKgED1vr9xuADjk5AAWjRyklo-4124.png'
                    },
                    {
                        href:'https://www.baidu.com',
                        imgUrl: 'https://b1-q.mafengwo.net/s10/M00/AE/EE/wKgBZ1j4lV2AeFDJAAFAQnzrrk044.jpeg'
                    },
                    {
                        href:'https://www.baidu.com',
                        imgUrl: 'https://n4-q.mafengwo.net/s10/M00/FA/11/wKgBZ1m3p0aAENn-AAa2xjc81AI321.png'
                    },
                    {
                        href:'https://www.baidu.com',
                        imgUrl: 'https://b3-q.mafengwo.net/s10/M00/B7/6A/wKgBZ1m3WL2AGbvYAAHNn8YumW420.jpeg'
                    },
                    {
                        href:'https://www.baidu.com',
                        imgUrl: 'https://n2-q.mafengwo.net/s10/M00/6F/B3/wKgBZ1h4nkiAURQzAAHf0nrnc6I29.jpeg'
                    },
                ]
            }
        },
        methods: {

        },
        mounted () {
            fetch('http://localhost:8080', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                console.log(response);
            })
        }
    }
</script>

<style lang="stylus" scoped>
    .slider-wrap 
        position: relative
        float: right
        width: 700px
        height: 340px;
        overflow: hidden;
        .slider-box 
            position: absolute
            left: 0
            top: 0
            width: auto
            li
                float: left
                width: 700px
                height: 340px
                overflow: hidden
                a
                    background-color: transparent
                    text-decoration: none
                    color: #ff9d00
                    cursor: pointer
                    img
                        border: none
                        vertical-align: middle
        .slider-dots
            position: absolute
            right: 30px
            bottom: 24px
            li
                float: left
                width: 20px
                height: 20px
                margin-left: 5px
                border-radius: 50%
                /*text-indent: -10000px*/
                overflow: hidden
                cursor: pointer
                text-align: center
                line-height: 20px
                span
                    display: inline-block
                    width: 10px
                    height: 10px
                    background-color: #fff
                    border-radius: 50%
                &.on
                    border: 2px solid #ff9d00
                    margin-top: -9px
                    span 
                        background-color: #ff9d00
</style>
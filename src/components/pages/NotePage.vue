<template>
    <div>
        <Carousel></Carousel>
        <div class="main-wrap">
            <side-bar></side-bar>
            <div class="main-right">
                <Navbar></Navbar>
                <note-list :notes="notes"></note-list>
            </div>
        </div>
    </div>
</template>
<script>
    import Carousel from '@com/common/Carousel'
    import SideBar from '@com/note/SideBar'
    import Navbar from '@com/nav/Navbar'
    import NoteList from '@com/note/NoteList'
    export default ({
        data () {
            return {
                notes: [
                    {
                        img: require('../../assets/images/note/01.jpeg'),
                        title: '旅行“银河”拍摄指南',
                        desc: '先导片 “织女今夕渡银河，当见新秋停玉梭。” 晴朗的夜空，当你抬头仰望天空的时候，不仅能看到无数闪闪发光的星星，还能看到一条淡淡的纱巾似的光带跨越整个天空，好像天空中的一条大河，...',
                        name: '托尼star',
                        avator: require('../../assets/images/note/head-01.jpeg'),
                        total: 3000,
                        current: 257,
                        ding: 666
                    },
                    {
                        img: require('../../assets/images/note/01.jpeg'),
                        title: '旅行“银河”拍摄指南',
                        desc: '先导片 “织女今夕渡银河，当见新秋停玉梭。” 晴朗的夜空，当你抬头仰望天空的时候，不仅能看到无数闪闪发光的星星，还能看到一条淡淡的纱巾似的光带跨越整个天空，好像天空中的一条大河，...',
                        name: '托尼star',
                        avator: require('../../assets/images/note/head-01.jpeg'),
                        total: 3000,
                        current: 257,
                        ding: 666
                    },
                    {
                        img: require('../../assets/images/note/01.jpeg'),
                        title: '旅行“银河”拍摄指南',
                        desc: '先导片 “织女今夕渡银河，当见新秋停玉梭。” 晴朗的夜空，当你抬头仰望天空的时候，不仅能看到无数闪闪发光的星星，还能看到一条淡淡的纱巾似的光带跨越整个天空，好像天空中的一条大河，...',
                        name: '托尼star',
                        avator: require('../../assets/images/note/head-01.jpeg'),
                        total: 3000,
                        current: 257,
                        ding: 666
                    },
                    {
                        img: require('../../assets/images/note/01.jpeg'),
                        title: '旅行“银河”拍摄指南',
                        desc: '先导片 “织女今夕渡银河，当见新秋停玉梭。” 晴朗的夜空，当你抬头仰望天空的时候，不仅能看到无数闪闪发光的星星，还能看到一条淡淡的纱巾似的光带跨越整个天空，好像天空中的一条大河，...',
                        name: '托尼star',
                        avator: require('../../assets/images/note/head-01.jpeg'),
                        total: 3000,
                        current: 257,
                        ding: 666
                    },
                    {
                        img: require('../../assets/images/note/01.jpeg'),
                        title: '旅行“银河”拍摄指南',
                        desc: '先导片 “织女今夕渡银河，当见新秋停玉梭。” 晴朗的夜空，当你抬头仰望天空的时候，不仅能看到无数闪闪发光的星星，还能看到一条淡淡的纱巾似的光带跨越整个天空，好像天空中的一条大河，...',
                        name: '托尼star',
                        avator: require('../../assets/images/note/head-01.jpeg'),
                        total: 3000,
                        current: 257,
                        ding: 666
                    }
                ]
            }
        },
        components: {
            Carousel,
            Navbar,
            SideBar,
            NoteList
        },
        methods: {
            
        }
    })
</script>

<style lang="stylus" scoped>
  .main-wrap
    width: 1000px
    margin: 0 auto
    .main-right
        float: right
        width: 700px
</style>
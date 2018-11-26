<template>
    <div class="nav-drop clearfix">
        <div class="drop-item" v-for="(addrItem, idx) in addrList" :key="idx">
            <div class="trigger"><i></i>{{addrItem.type}}</div>
            <address-item :items="addrItem.addresses"></address-item>
        </div>
    </div>
</template>

<script>
    import AddressItem from '@com/address/AddressItem' 
    export default {
        data () {
            return {
                addrList: [
                    {
                        type: '国内',
                        addresses: [
                            {
                                name: '四川',
                                count: 27
                            },
                            {
                                name: '云南',
                                count: 20
                            },
                            {
                                name: '北京',
                                count: 2
                            }
                        ]
                    },
                    {
                        type: '国外',
                        addresses: [
                            {
                                name: '四川',
                                count: 27
                            },
                            {
                                name: '云南',
                                count: 20
                            },
                            {
                                name: '北京',
                                count: 2
                            }
                        ]
                    },
                    {
                        type: '主题',
                        addresses: [
                            {
                                name: '四川',
                                count: 27
                            },
                            {
                                name: '云南',
                                count: 20
                            },
                            {
                                name: '北京',
                                count: 2
                            }
                        ]
                    }
                ]
            }
        },
        components: {
            AddressItem
        }
    }
</script>

<style lang="stylus" scoped>
    .nav-drop   
        height: 45px
        line-height: 25px
        margin-bottom: 10px
        border-bottom: 1px solid #eee
        color: #333
        .drop-item
            float: left
            width: 40px
            font-size: 14px
            margin-left: 20px
            &:first-child
                margin-left: 0
            .trigger
                height: 22px
                padding: 10px 0
                cursor: pointer
                i
                    float: right
                    margin-top: 10px
                    border-top: 4px solid #999
                    border-left: 4px dashed transparent
                    border-right: 4px dashed transparent
                    font-size: 0
                    overflow: hidden    
</style>
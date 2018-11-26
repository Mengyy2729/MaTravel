<template>
    <div>
        <div class="sidebar">
            <div class="side-hd">旅游攻略导航</div>
            <address-list></address-list>
            <address-rank :rankList="rankList"></address-rank>
        </div>
    </div>
</template>

<script>
    import AddressList from '@com/address/AddressList'
    import AddressRank from '@com/address/AddressRank'
    export default {
        data () {
            return {
                rankList: [
                    {
                        id: 1,
                        addrName: '婺源',
                        src: 'http://n4-q.mafengwo.net/s9/M00/9F/8D/wKgBs1bYF7qAWc7mAATom0f7cX859.jpeg?imageMogr2%2Fthumbnail%2F%21130x184r%2Fgravity%2FCenter%2Fcrop%2F%21130x184%2Fquality%2F90',
                        date: '2016-03-03',
                        downloadCount: 1650581
                    },
                    {
                        id: 2,
                        addrName: '大同',
                        src: 'http://n4-q.mafengwo.net/s9/M00/9F/8D/wKgBs1bYF7qAWc7mAATom0f7cX859.jpeg?imageMogr2%2Fthumbnail%2F%21130x184r%2Fgravity%2FCenter%2Fcrop%2F%21130x184%2Fquality%2F90',
                        date: '2016-03-03',
                        downloadCount: 1650581
                    },
                    {
                        id: 3,
                        addrName: '北京',
                        src: 'http://n4-q.mafengwo.net/s9/M00/9F/8D/wKgBs1bYF7qAWc7mAATom0f7cX859.jpeg?imageMogr2%2Fthumbnail%2F%21130x184r%2Fgravity%2FCenter%2Fcrop%2F%21130x184%2Fquality%2F90',
                        date: '2016-03-03',
                        downloadCount: 1650581
                    },
                    {
                        id: 4,
                        addrName: '临汾',
                        src: 'http://n4-q.mafengwo.net/s9/M00/9F/8D/wKgBs1bYF7qAWc7mAATom0f7cX859.jpeg?imageMogr2%2Fthumbnail%2F%21130x184r%2Fgravity%2FCenter%2Fcrop%2F%21130x184%2Fquality%2F90',
                        date: '2016-03-03',
                        downloadCount: 1650581
                    },
                    {
                        id: 5,
                        addrName: '临汾',
                        src: 'http://n4-q.mafengwo.net/s9/M00/9F/8D/wKgBs1bYF7qAWc7mAATom0f7cX859.jpeg?imageMogr2%2Fthumbnail%2F%21130x184r%2Fgravity%2FCenter%2Fcrop%2F%21130x184%2Fquality%2F90',
                        date: '2016-03-03',
                        downloadCount: 1650581
                    },
                    {
                        id: 6,
                        addrName: '临汾',
                        src: 'http://n4-q.mafengwo.net/s9/M00/9F/8D/wKgBs1bYF7qAWc7mAATom0f7cX859.jpeg?imageMogr2%2Fthumbnail%2F%21130x184r%2Fgravity%2FCenter%2Fcrop%2F%21130x184%2Fquality%2F90',
                        date: '2016-03-03',
                        downloadCount: 1650581
                    },
                    {
                        id: 7,
                        addrName: '临汾',
                        src: 'http://n4-q.mafengwo.net/s9/M00/9F/8D/wKgBs1bYF7qAWc7mAATom0f7cX859.jpeg?imageMogr2%2Fthumbnail%2F%21130x184r%2Fgravity%2FCenter%2Fcrop%2F%21130x184%2Fquality%2F90',
                        date: '2016-03-03',
                        downloadCount: 1650581
                    },
                    {
                        id: 8,
                        addrName: '临汾',
                        src: 'http://n4-q.mafengwo.net/s9/M00/9F/8D/wKgBs1bYF7qAWc7mAATom0f7cX859.jpeg?imageMogr2%2Fthumbnail%2F%21130x184r%2Fgravity%2FCenter%2Fcrop%2F%21130x184%2Fquality%2F90',
                        date: '2016-03-03',
                        downloadCount: 1650581
                    }
                ]
            }
        },
        components: {
            AddressList,
            AddressRank
        }
    }
</script>

<style lang="stylus" scoped>
    .sidebar
        float: left
        width: 160px
        .side-hd   
            height: 50px
            line-height: 48px
            border-bottom: 1px solid #eee
            font-size: 16px
            color: #333
</style>
<template>
    <div class="theme-nav">
        <theme-item></theme-item>
    </div>
</template>

<script>
    import ThemeItem from "./ThemeItem";
    export default {
        data () {
            return  {

            }
        },
        components: {
            ThemeItem
        }
    }
</script>

<style lang="stylus">
    .theme-nav
        position: relative
        z-index: 10
        width: 260px
        height: 165px
        border: 1px solid #ddd
        border-bottom: 0
        box-shadow: 0 0.5px 2px rgba(0,0,0,0.1)
</style>
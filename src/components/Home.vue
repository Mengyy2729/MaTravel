<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <!-- <Footer></Footer> -->
  </div>
</template>

<style type="stylus" scoped>
</style>
<script>
  import Header from '@com/common/Header'
  import Footer from '@com/common/Footer'
  

  export default {
    data () {
      return {
        
      }
    },
    components: {
      Header: Header,
      Footer: Footer
    },
    methods: {

    }
  }
</script>

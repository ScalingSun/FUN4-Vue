
<template>
  <div id="app">
    <router-view />
    <Footer />
  </div>
</template>


<script>

import Footer from './components/layout/footer';
export default{
  name:"App",
  components:{
    Footer,
  },
  data(){
    return {
      JWT: []
    }
  },
  created(){

  },
}
</script>
<style>
</style>

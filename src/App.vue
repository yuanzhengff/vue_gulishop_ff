<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <!-- 当v-show中条件变多的时候,标签会变得很长 -->
    <!-- <Footer v-show="$route.path !== '/login' && $route.path !== '/register'" /> -->
    <Footer v-show="!$route.meta.isHidden"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  //非路由组件的注册
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

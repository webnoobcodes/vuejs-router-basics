<template>
  <div id="app">
    <!--
      Use router-link component for navigation. 
      Specify the link by passing the `to` prop. 
      <router-link> will be rendered as an <a> tag by default
    -->
    <router-link to="/">Home</router-link> | 
    <router-link to="/about">About</router-link> | 
    <router-link to="/portfolio">Portfolio</router-link>

    <!--
      This is the route outlet.
      Components matched by the route will render here.
    -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

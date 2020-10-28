<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <PostsComponents/>
  </div>
</template>
 /* eslint-disable */
<script>
import PostsComponents from './components/PostsComponents.vue'

export default {
  name: 'App',
  components: {
    PostsComponents
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

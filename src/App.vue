<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/note">Note</router-link> |
      <router-link to="/myaxios">axios</router-link>
      <App-header msg="Welcome to Your Vue.js App" v-bind:ss="88888"></App-header>
    </div> -->
    <!-- <Test></Test> -->
    <Add></Add>
    <Minus></Minus>
    <router-view/>
  </div>
</template>

<script>
// import Test from './components/Test'
// import AppHeader from './components/Header'
import Add from './components/Add'
import Minus from './components/Minus'

export default {
  name: 'app',
  components: {
    // Test,
    // AppHeader,
    Add,
    Minus
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

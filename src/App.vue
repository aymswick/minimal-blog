<template>
  <div id="app">
    <NavBar msg="Minimal Blog Editor"/>

    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
@import "~bulma/css/bulma.css";
@import "assets/fonts/inter.css";

#app {
  font-family: "Inter";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 1.5rem;
}

::selection {
  background: hsl(171, 100%, 41%); /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: hsl(171, 100%, 41%); /* Gecko Browsers */
  color: white;
}

</style>

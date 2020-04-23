<template>
  <div id="app">
    <NavBar msg="Minimal Blog Editor"/>
    <hr>
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
  background: hsl(0, 0%, 86%) ;
}

#navbar {
  margin-top: -2.5rem;
}

* {
  font-family: "Inter" !important;
}

/* Font Awesome Icons are rendered to these SVGs */
a svg {
  margin-right: 1rem;
}

html {
  background: hsl(0, 0%, 86%) ;
}

.header h1{
  display: flex;
  justify-content: center;
  font-size: 4.5rem;
  font-weight: bold;
}

.header h2 {
  font-size: 3.5rem;
  margin-top: 1rem;
}

hr {
  background: black;
}

::selection {
  background: black; /* WebKit/Blink Browsers */
  color: white;
}
::-moz-selection {
  background: black; /* Gecko Browsers */
  color: white;
}

/* Override Bulma's light color */
.is-light {
  background: hsl(0, 0%, 86%) !important;
}
.is-light:hover {
  background: hsl(0, 0%, 80%) !important;
}
</style>

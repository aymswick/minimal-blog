<template>
  <div id="navbar">
     <nav>
      <router-link to="/"><font-awesome-icon icon="home"/>Home</router-link>
      <router-link to="/CreatePost"><font-awesome-icon icon="edit"/>Create</router-link>
      <router-link to="/posts"><font-awesome-icon icon="list"/>Posts</router-link>
      <router-link to="/viewPost">Test View Post</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#navbar {
  display: flex;
  justify-content: flex-start;
}

nav a {
  font-size: 24px;
  padding: 1rem 1rem;
  color: black;
}

nav a:hover {
  color: white;
  background: black;
  border-radius: 3px;
}
</style>

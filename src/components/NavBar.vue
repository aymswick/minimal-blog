<template>
  <div id="navbar">
     <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/CreatePost">Create</router-link>
      <router-link to="/posts">Posts</router-link>
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
  padding: 1rem 1rem;
}

nav a:hover {
  color: white;
  background: hsl(217, 71%, 53%);
  border-radius: 10px;
}

</style>

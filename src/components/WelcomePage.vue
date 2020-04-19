<template>
  <div class="welcome">
    <div class="header">
      <h1>Welcome!</h1>
      <h2>This is a lightweight blog app. Use it to run your own blog.</h2>
    </div>

    <div class="login">
        <input id="username" v-model="username" placeholder="username">
        <input id="password" type="password" v-model="password" placeholder="password">
    </div> 

    <div class="actions">
        <button class="button is-light is-large" @click="register()">Register</button>
        <button class="button is-primary is-large" @click="login()">Login</button>
    </div>

  </div>
</template>

<script>

export default {
  name: 'WelcomePage',
  props: {
    msg: String
  },

  data() {
    return {
      username: "",
      password: ""
    }
  },

  methods: {
    login: function() {
      console.log('do login');
    },

    register: function() {
        console.log('go to register page');
    }
  }
}
</script>

<style scoped>
@import "~vue2-editor/dist/vue2-editor.css";

.welcome {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15rem;
    margin-right: 15rem;
    min-width: 450px;
}

.login {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

input {
    border: 1px solid black;
    border-radius: 3px;
    padding: 1rem;
    font-size: 4rem;
    font-weight: lighter;
    margin: 1rem;
}

.actions {
    display: flex;
    justify-content: flex-end;
    margin-right: 3rem;
}

.actions button {
    margin-left: 1rem;
}

</style>

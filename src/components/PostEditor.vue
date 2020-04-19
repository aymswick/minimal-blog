<template>
  <div class="hello">
    <div class="header">
      <h1>Editing </h1> <input id="title" v-model="title" placeholder="new post">
    </div>
    <vue-editor id="editor" v-model="content"></vue-editor>
    <button class="button is-primary is-large is-fullwidth" @click="publish()">Publish</button>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  name: 'PostEditor',
  props: {
    msg: String
  },

  components: {
    VueEditor
  },

  data() {
    return {
      title: "New Post",
      content: "<h3>Start typing...</h3>"
    }
  },

  methods: {
    publish: function() {
      console.log('EDITOR CONTENT: ' + this.content);
      console.log('POST TITLE:' + this.title);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "~vue2-editor/dist/vue2-editor.css";

.quillWrapper {
  margin-bottom: 1rem;
}

.header h1, input {
  display: inline-flex;
  font-family: "Inter";
  font-size: 4.5rem;
  font-weight: bold;
}

input {
  border: none;
  font-weight: lighter;
  font-style: italic;
}




</style>

<template>
  <div class="PostEditor">
    <div class="header">
      <h1>Editing</h1> 
      <input id="title" v-model="title" placeholder="new post">
    </div>

    <!-- Needs to be isolated for Quill styling, but is technically part of the "content" on this page -->
    <vue-editor id="editor" v-model="content" placeholder="Start typing"></vue-editor>

    <div class="content">
      <div class="header">
        <h2>Preview</h2>
      </div>

      <div class="preview">
        <vue-markdown v-html="content"></vue-markdown>
      </div>

      <div class="actions">
        <button class="button is-light is-large" @click="saveToDrafts()">Save to Drafts</button>
        <button class="button is-primary is-large" @click="publish()">Publish</button>
      </div>
    </div>
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
      title: "",
      content: ""
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
  text-align: left;
}

.preview {
  border: 1px solid black;
  border-radius: 3px;
  padding: 1rem;
  text-align: none;
}

.header {
  display: flex;
  justify-content: flex-start;
}

.actions {
  display: flex;
  justify-content: flex-end;
}

.actions button {
  margin: 1rem;
}

input {
  border: none;
  padding: 1rem;
  font-size: 4rem;
  font-weight: lighter;
 
  background: hsl(0, 0%, 86%) ;
}

.ql-active, .ql-fill, .ql-stroke {
  background: red;
}



</style>

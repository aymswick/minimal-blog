<template>
    <div class="posts">
        <div class="header">
            <h1>Posts</h1>
        </div>

        <div class="content">
            <vue-markdown> this is a **test**</vue-markdown>
        </div>
    </div>
</template>

<script>

export default {
  name: 'PostList',
  props: {
    msg: String
  },

  // TODO: replace this with data coming back from the database!
  data() {
      return {
          posts: [
            { id: 1, title: 'Hello World', wordcount: 458, status: 'published'},
            { id: 2, title: 'Yo fro', wordcount: 15, status: 'draft'}
          ],
      }
  }
}



</script>

<style scoped>

#listOfPosts li {
    border: 1px solid black;
    border-radius: 3px;
    padding: 1rem;

    background: hsl(0, 0%, 71%);
    list-style-type: none;
}

#listOfPosts li:hover {
    cursor: pointer;
    background: hsl(171, 100%, 41%);
}

.postInfo {

}

.green {
    color: green;
}

</style>
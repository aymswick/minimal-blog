<template>
    <div class="list">
        <div class="header">
            <h1>Editing </h1> <input id="title" v-model="title" placeholder="edit me">
        </div>
    </div>
</template>

<script>

export default {
  name: 'PostList',
  props: {
    msg: String
  },
}
</script>

<style scoped>

</style>
<template>
  <h2>Создание поста</h2>
  <post-form></post-form>
  <PostList v-bind:posts="posts"></PostList>
</template>
<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
  components: {
    PostForm,
    PostList,
  },
};
</script>
<style scoped></style>

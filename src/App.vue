<template>
  <div class="app">
    <!-- Подписка на событие create, указание, какая функция должна по нему срабатывать-->
    <post-form @create="createPost"></post-form>
    <!-- Передача постов, как пропсов, дочернему компоненту
    Короткая запись :posts="posts" -->
    <PostList v-bind:posts="posts"></PostList>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Javascript",
          body: "JavaScript - это мультипарадигменный язык программирования.",
        },
        {
          id: 2,
          title: "React",
          body: "React - JavaScript-библиотека, использующая модель компонентов",
        },
        {
          id: 3,
          title: "Vue.js",
          body: "Vue.js - JavaScript-фреймворк.",
        },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>

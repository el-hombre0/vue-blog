<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <!-- <input type="text" v-model.number="modificatorValue" /> -->
    <my-button style="margin: 15px 0" @click="showModalbox"
      >Создать пост</my-button
    >
    <modal-box v-model:show="modalboxVisable">
      <!-- Подписка на событие create, указание, какая функция должна по нему срабатывать-->
      <PostForm @create="createPost"></PostForm>
    </modal-box>

    <!-- <my-button @click="fetchPosts">Подгрузить посты</my-button> -->
    <!-- Передача постов, как пропсов, дочернему компоненту
    Короткая запись :posts="posts" -->
    <PostList
      v-bind:posts="posts"
      @delete="deletePost"
      v-if="!isPostsLoading"
    ></PostList>
    <div v-else>
      <h3>Загрузка...</h3>
    </div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from "axios";
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        // {
        //   id: 1689962422539,
        //   title: "Javascript",
        //   body: "JavaScript - это мультипарадигменный язык программирования.",
        // },
        // {
        //   id: 1689962422540,
        //   title: "React",
        //   body: "React - JavaScript-библиотека, использующая модель компонентов",
        // },
        // {
        //   id: 1689962422541,
        //   title: "Vue.js",
        //   body: "Vue.js - JavaScript-фреймворк.",
        // },
      ],
      modalboxVisable: false,
      modificatorValue: "",
      isPostsLoading: false,
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.modalboxVisable = false;
    },
    deletePost(post) {
      // Проходимся по постам, тк функция возвращает новый массив, перезаписываем старый.
      // В результирующий массив попадают только те посты, id которых не равен посту, который мы пытаемся удалить
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showModalbox() {
      this.modalboxVisable = true;
    },
    async fetchPosts() {
      this.isPostsLoading = true;
      // Получение постов
      try {
        setTimeout(async () => {
          // Для создание видимой задержки загрузки постов
          const response = await axios(
            "https://jsonplaceholder.typicode.com/posts?_limit=10"
          );
          this.posts = response.data;
          this.isPostsLoading = false;
        }, 1000);
      } catch (e) {
        alert("Ошибка получения данных!");
      }
    },
  },
  mounted() {
    // Хук для отправки запроса на этапе монтирования компонента
    this.fetchPosts();
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

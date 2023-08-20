<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-input v-model="searchQuery" placeholder="Найти..." />
    <div class="app__btns">
      <!-- <input type="text" v-model.number="modificatorValue" /> -->
      <my-button @click="showModalbox">Создать пост</my-button>
      <sort-select v-model="selectedSort" :options="sortOptions"></sort-select>
    </div>
    <modal-box v-model:show="modalboxVisable">
      <!-- Подписка на событие create, указание, какая функция должна по нему срабатывать-->
      <PostForm @create="createPost"></PostForm>
    </modal-box>

    <!-- <my-button @click="fetchPosts">Подгрузить посты</my-button> -->
    <!-- Передача постов, как пропсов, дочернему компоненту
    Короткая запись :posts="posts" -->
    <PostList
      v-bind:posts="sortedAndSearchedPosts"
      @delete="deletePost"
      v-if="!isPostsLoading"
    ></PostList>
    <div v-else>
      <h3>Загрузка...</h3>
    </div>

    <div class="page__wrapper">
      <div
        class="page"
        v-for="pageNum in totalPages"
        :key="pageNum"
        v-bind:class="{
          'current-page': page === pageNum,
        }"
        @click="changePage(pageNum)"
      >
        {{ pageNum }}
      </div>
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
      isPostsLoading: false,
      selectedSort: "", // По умолчанию стоит ничего не выбрано в выпадающем списке
      sortOptions: [
        // Массив, содержащий элементы списка для сортировки
        {
          value: "title",
          name: "По названию", // сортировка по названию
        },
        {
          value: "body",
          name: "По описанию",
        },
        {
          value: "id",
          name: "По id",
        },
      ],
      searchQuery: "", // Поисковой запрос
      // Для пагинации
      page: 1, // Номер страницы
      limit: 10, // Количество постов на странице
      totalPages: 0, // Всего страниц
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
            "https://jsonplaceholder.typicode.com/posts",
            {
              params: {
                _page: this.page,
                _limit: this.limit,
              },
            }
          );
          this.totalPages = Math.ceil(
            response.headers["x-total-count"] / this.limit
          ); // Общее кол-во постов делим на кол-во постов на одной странице(округление вверх)
          console.log(this.totalPages);
          this.posts = response.data;
          this.isPostsLoading = false;
        }, 1000);
      } catch (e) {
        alert("Ошибка получения данных!");
      }
    },
    changePage(pageNum){
      this.page = pageNum;
    }
  },
  mounted() {
    // Хук для отправки запроса на этапе монтирования компонента
    this.fetchPosts();
  },
  computed: {
    // вычисляемое свойство. То же самое, что и watch, только возвращает новый массив
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        // Сравнение названия и описания одного поста с другим
        // Функция sort() мутирует исходный массив
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        ); // newValue = this.selectedSort
      }); // Возвращает другой отсортированный массив, в который развернут исходный
    },
    sortedAndSearchedPosts() {
      // Реализация поиска поста по названию
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: { 
    // Объект, реализующий функцию-наблюдатель
  //   selectedSort(newValue){ // Сортировка
  //     this.posts.sort((post1, post2) => { // Сравнение названия и описания одного поста с другим
  //       // Функция sort() мутирует исходный массив
  //       return post1[newValue]?.localeCompare(post2[newValue]) // newValue = this.selectedSort
  //     })
  //   },
  page() {
    this.fetchPosts();
  }
  }
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

.app__btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid gray;
  padding: 5px;
}
.current-page {
  padding: 7px;
  background-color: rgb(218, 218, 218);
}
</style>

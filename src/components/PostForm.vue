<template>
  <div>
    <h2>Создать пост</h2>
    <form @submit.prevent>
      <!--v-model="post.title" без конкретного указания value, применияется modelValue-->
      <!-- v-model:value="post.title" с конкретным указанием-->

      <my-input
        v-model="post.title"
        type="text"
        placeholder="Название..."
        v-focus
      />
      <my-input
        v-model="post.body"
        type="text"
        placeholder="Описание..."
      />
      <!-- Вместо v-model:
    v-bind:value="post.title" 
    @input="post.title = $event.target.value"-->
      <my-button
        @click="createPost"
        style="align-self: flex-end; margin-top: 15px"
        >Создать</my-button
      >
    </form>
  </div>
</template>

<script>

export default {

  data() {
    return {
      post: { body: "", title: "" }, // Модель пост (изначально поля пустые)
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post); // Создание события для подписки на него родительского компонента
      // (название генерируемого события; аргументы, попадаемые в функцию)
      this.post = {
        // После генерации очищаем пост для пустых инпутов
        title: "",
        body: "",
      };
    },
  },
  watch: {
    post: {
      handler(newValue) { // Функция-наблюдатель
        console.log(newValue) // Каждое изменение формы создания поста выводится в консоль
      },
      deep: true, // Глубокое отслеживание объекта
    }
  }
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
}
.input {
  width: 100%;
  padding: 10px;
  margin-top: 15px;
  border: solid 2px black;
}
.btn {
  align-self: flex-end;
  margin-top: 15px;
  padding: 15px;
  background: none;
  border-radius: 10%;
  border: 1px solid teal;
  color: teal;
}
</style>

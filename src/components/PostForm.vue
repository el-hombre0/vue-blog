<template>
  <div>
    <form @submit.prevent>
      <input
        v-model="post.title"
        class="input"
        type="text"
        placeholder="Название..."
      />
      <input
        v-model="post.body"
        class="input"
        type="text"
        placeholder="Описание..."
      />
      <!-- Вместо v-model:
    v-bind:value="post.title" 
    @input="post.title = $event.target.value"-->
      <button class="btn"
      @click="createPost">Создать</button>
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
    createPost(){
      this.post.id = Date.now();
      this.$emit('create', this.post) // Создание события для подписки на него родительского компонента
      // (название генерируемого события; аргументы, попадаемые в функцию)
      this.post = { // После генерации очищаем пост для пустых инпутов
        title: '',
        body: '',
      };
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

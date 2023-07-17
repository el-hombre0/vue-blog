<template>
  <div>
    <!--Итерирование по списку posts-->
    <div class="post" v-for="post in posts" :key="post.id">
      <div>
        <h3>Название:</h3>
        {{ post.title }}
      </div>
      <div>
        <h4>Описание:</h4>
        {{ post.body }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Получение постов через пропсы от родительского компонента
  props: {
    posts: {
        type: Array, // Тип данных - массив
        required: true, // Обязательно наличие
    }
  },
};
</script>

<style scoped>
.post {
  margin-top: 15px;
  padding: 15px;
  border: solid green 3px;
}
</style>
<template>
  <div>
    <h2>Список пользователей</h2>
    <post-item v-for="post in posts" v-bind:key="post.id"
    v-bind:post="post"/>
  </div>
</template>

<script>
import PostItem from '@/components/PostItem'
export default {
  components: {
    PostItem
  },
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
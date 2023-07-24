<template>
  <div>
    <h2>Список постов</h2>
    <div v-if="posts.length > 0">
      <post-item
        v-for="post in posts"
        v-bind:key="post.id"
        v-bind:post="post"
        @delete="$emit('delete', post)"
      />
    </div>
    <div v-else>
      <h3>Постов пока нет. Добавьте!</h3>
    </div>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: {
    PostItem,
  },
  // Получение постов через пропсы от родительского компонента
  props: {
    posts: {
      type: Array, // Тип данных - массив
      required: true, // Обязательно наличие
    },
  },
};
</script>

<style scoped></style>

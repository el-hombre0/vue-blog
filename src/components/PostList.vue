<template>
  <div>
    <div v-if="posts.length > 0">
      <h2>Список постов</h2>
      <transition-group name="post-list" tag="">
        <post-item
          v-for="post in posts"
          v-bind:key="post.id"
          v-bind:post="post"
          @delete="$emit('delete', post)"
        />
      </transition-group>
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

<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.3s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.post-list-move {
  transition: transform 0.4s ease;
}
</style>

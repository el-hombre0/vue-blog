<template>
  <div class="post">
    <div>
      <div>
        <i>№{{ post.id }}</i>
        
        <h3>Название:</h3>
        {{ post.title }}
      </div>
      <div>
        <h4>Описание:</h4>
        {{ post.body }}
      </div>
    </div>
    <div class="post__btns">
      <my-button @click="$router.push(`/posts/${post.id}`)">Открыть</my-button>
      <my-button @click="$emit('delete', post)">Удалить</my-button> <!--Отдаем пост наверх-->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
   
  }
};
</script>

<style scoped>
.post {
  margin-top: 15px;
  padding: 15px;
  border: solid green 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__btns{
  display: flex;
}
</style>

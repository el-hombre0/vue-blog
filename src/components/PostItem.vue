<template>
  <div class="post">
    <div>
      <h3>Название:</h3>
      {{ post.title }}
    </div>
    <div>
      <h4>Описание:</h4>
      {{ post.body }}
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
};
</script>

<style scoped></style>

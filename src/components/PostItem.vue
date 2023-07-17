<template>
  <div class="post">
    <div>
      <div>
        <h3>Название:</h3>
        {{ post.title }}
      </div>
      <div>
        <h4>Описание:</h4>
        {{ post.body }}
      </div>
    </div>
    <div class="post__btns">
      <my-button>Удалить</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton'
export default {
  components:{
    MyButton
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
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
</style>

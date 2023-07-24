<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "my-button", // Имя компонента для глобальной регистрации
};
</script>
<style scoped>
.btn {
  padding: 15px;
  /* background: none; */
  border-radius: 10%;
  border: 1px solid teal;
  color: teal;
  box-shadow: 1px 1px 1px; /* Тень */
  cursor: pointer;

  transition-duration: 0.3s;
}
.btn:hover {
  background-image: radial-gradient(
    ellipse farthest-corner at 50% 50%,
    #b0dad4,
    #8bb1ae
  );
}

</style>

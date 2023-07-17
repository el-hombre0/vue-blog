<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>
<script>
export default {};
</script>
<style scoped>
.btn {
  padding: 15px;
  background: none;
  border-radius: 10%;
  border: 1px solid teal;
  color: teal;
}
</style>

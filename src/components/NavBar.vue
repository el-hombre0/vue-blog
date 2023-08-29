<template lang="">
  <div class="navbar">
    <h1 class="title">
      <a @click="$router.push('/')" class="title-name"> My-Blog</a>
    </h1>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Посты </my-button>
      <my-button @click="$router.push('/about')" style="margin-left: 20px">О нас</my-button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.title {
  padding: 10px;
  color: aliceblue;
  color: black; 
  text-decoration: none;
}
.title-name a{
  color: black; 
  text-decoration: none;
}
.navbar {
  display: flex;
  height: 80px;
  background-color: rgb(0, 184, 184);
  box-shadow: 2px 2px 2px 1px rgb(0, 45, 0);
  align-items: center;
  padding: 15px;
}
.navbar__btns{
  margin-left: auto;
}
</style>

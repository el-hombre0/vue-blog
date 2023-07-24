<template lang="">
  <input v-bind:value="modelValue" 
  @input="updateInput" 
  class="input" 
  type="text" />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [ String, Number] // Принимаем различные типы в инпуте
  },
  methods: {
    updateInput(event) {
      // Обработчик события ввода в инпут
      this.$emit("update:modelValue", event.target.value); // по шаблону; значение, которое должно обновиться
    },
  },
};
</script>

<style>
.input {
  width: 100%;
  padding: 10px;
  margin-top: 15px;
  border: solid 2px black;
}
</style>

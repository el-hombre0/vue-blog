<template>
  <select :value="modelValue" @change="changeOption">
    <!--Выбор сортировки-->
    <option disabled value="">Выберите</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>
<script>
export default {
  name: "sort-select",
  props: {
    modelValue: {
      type: String, // Поле, по которому будет идти сортировка
    },
    options: { // Пункты выпадающего списка
      type: Array,
      default: () => [], // Пустой массив
    },
  },
  methods: {
    changeOption(event) {
      console.log(event);
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<style scoped></style>

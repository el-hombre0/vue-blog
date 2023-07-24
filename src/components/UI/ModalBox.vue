<template>
  <div class="modalbox" v-if="show" @click.stop="hideModalbox"><!--click.stop для отмены всплытия события в js, для возможность ввода в контентную часть и закрытия окна при нажатии вне его -->
    <div class="modalbox__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "modal-box",
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    hideModalbox() {
      this.$emit("update:show", false);
    },
  },
};
</script>
<style>
.modalbox {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.modalbox__content {
  margin: auto;
  padding: 20px;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
}
</style>

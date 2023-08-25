<template>
  <transition name="fade">
    <div class="modal-container" v-if="show" @click.self="$emit('close')">
      <div class="modal-content" :style="{ 'max-width': `${width}px` }">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "VEModal",
  props: {
    show: {
      type: Boolean,
      default: false,
      required: false,
    },
    width: {
      type: Number,
      default: 500,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 25px;
  z-index: 50;

  &.fade-enter,
  &.fade-leave-to {
    opacity: 0;
  }

  &.fade-enter-active,
  &.fade-leave-active {
    transition: opacity 0.25s ease-in-out;
  }

  .modal-content {
    background-color: #fff;
    padding: 20px;
    margin: 50px auto;
    border-radius: 5px;
    width: 100%;
    position: relative;
  }
}
</style>

<template>
  <button
    :type="type"
    :class="['ve-btn', `ve-btn-${color}`]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot v-if="!loading"></slot>
    <VELoader size="small" color="white" v-else></VELoader>
  </button>
</template>

<script>
export default {
  name: "VEButton",
  props: {
    type: {
      type: String,
      required: false,
      default: "button",
      validator: function (value) {
        return ["button", "submit"].indexOf(value) !== -1;
      },
    },
    color: {
      type: String,
      required: false,
      default: "default",
      validator: function (value) {
        return ["default", "success", "error", "info"].indexOf(value) !== -1;
      },
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.ve-btn {
  border: none;
  background-color: #eee;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;

  &-success {
    background-color: #198754;
    color: #fff;
  }

  &-error {
    background-color: #e73b2f;
    color: #fff;
  }

  &-info {
    background-color: #2196f3;
    color: #fff;
  }

  &:hover {
    opacity: 0.8;
  }

  &[disabled] {
    opacity: 0.3;
    cursor: not-allowed;
  }
}
</style>

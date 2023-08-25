<template>
  <span
    :class="[
      `size-${size}`,
      'loader',
      `color-${color}`,
      `position-${position}`,
    ]"
  ></span>
</template>

<script>
export default {
  name: "VELoader",
  props: {
    size: {
      type: String,
      required: false,
      default: "default",
      validator: function (value) {
        return ["default", "small", "large"].indexOf(value) !== -1;
      },
    },
    color: {
      type: String,
      required: false,
      default: "default",
      validator: function (value) {
        return ["default", "white"].indexOf(value) !== -1;
      },
    },
    position: {
      type: String,
      required: false,
      default: " ",
    },
  },
};
</script>

<style lang="scss" scoped>
.position- {
  &center {
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    margin-top: 100px;
    z-index: 10;
  }
}
.loader {
  width: 35px;
  height: 35px;
  border: 4.5px solid #198754;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: block;
  animation: rotation 1s linear infinite;

  &.color-white {
    border-color: #fff;
    border-bottom-color: transparent;
  }

  &.size-small {
    width: 20px;
    height: 20px;
    border-width: 3px;
  }
  &.size-large {
    width: 51px;
    height: 51px;
    border-width: 6px;
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<template>
  <div class="section-header">
    <h3 class="section-title">
      <slot name="title"></slot>
    </h3>
    <div class="actions">
      <VEButton type="button" color="success" @click="fireFunctionBtn"
        >Add</VEButton
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionHeader",
  methods: {
    fireFunctionBtn: function () {
      this.$emit("functionBtn");
    },
  },
};
</script>

<style lang="scss" scoped>
.section-header {
  border-bottom: 1px solid #eee;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .section-title {
    margin: 0;
  }
}
</style>

<template>
  <VEModal :show="show" :width="400" @close="cancel">
    <h4 class="modal-title">Delete Confirmation</h4>
    <div class="actions-container">
      <VEButton
        class="action"
        type="submit"
        color="error"
        :loading="loading"
        :disabled="loading"
        @click="deleteCategory"
      >
        DELETE
      </VEButton>
      <VEButton class="action" @click="cancel">Cancel</VEButton>
    </div>
  </VEModal>
</template>

<script>
export default {
  name: "DeleteModal",
  props: ["show", "loading"],
  methods: {
    cancel: function () {
      this.$emit("cancelForm");
    },
    deleteCategory: function () {
      this.$emit("deleteCategory");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-title {
  font-size: 22px;
  text-align: center;
  color: #d32f2f;
}
.actions-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .action {
    margin-right: 20px;

    &:last-of-type {
      margin-right: 0;
    }
  }
}
</style>

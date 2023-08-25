<template>
  <VEModal :show="show" :width="800" @close="cancel">
    <h4 class="modal-title">Edit Confirmation</h4>
    <form class="category-form" @submit.prevent="editCategory">
      <label for="category" class="form-input-holder">
        <span class="input-title"> Category name: </span>
        <input
          type="text"
          class="form-input"
          v-model="updateCategoryName"
          name="category"
          id="category"
        />
      </label>

      <div class="actions-container">
        <VEButton
          class="action"
          type="submit"
          color="info"
          :loading="loading"
          :disabled="loading"
          @click="editCategory"
        >
          Save
        </VEButton>
        <VEButton class="action" @click="cancel">Cancel</VEButton>
      </div>
    </form>
  </VEModal>
</template>

<script>
export default {
  name: "EditModal",
  props: ["show", "loading"],
  data: () => {
    return {
      updateCategoryName: null,
    };
  },
  methods: {
    cancel: function () {
      this.$emit("cancelForm");
    },
    editCategory: function () {
      this.$store.commit("admin/updateCategoryName", this.updateCategoryName);
      this.$emit("editCategory");
      this.updateCategoryName = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-title {
  font-size: 22px;
  text-align: center;
  color: #2196f3;
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

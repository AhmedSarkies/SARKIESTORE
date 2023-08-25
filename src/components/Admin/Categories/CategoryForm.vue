<template>
  <form class="category-form" @submit.prevent="submit">
    <label for="category" class="form-input-holder">
      <span class="input-title"> Category name: </span>
      <input
        type="text"
        class="form-input"
        v-model="categoryName"
        name="category"
        id="category"
      />
    </label>
    <div class="form-footer">
      <VEButton
        class="action"
        type="submit"
        :disabled="loading"
        :loading="loading"
        color="success"
        >Submit</VEButton
      >
      <VEButton class="action" @click="cancel">Cancel</VEButton>
    </div>
  </form>
</template>

<script>
export default {
  name: "CategoryForm",
  data: () => {
    return {
      categoryName: null,
      loading: false,
    };
  },
  methods: {
    cancel: function () {
      this.categoryName = null;
      this.$emit("cancelForm");
    },
    submit: function () {
      if (this.categoryName) {
        this.loading = true;
        this.$store
          .dispatch("admin/submitCategoryForm", {
            name: this.categoryName.trim(),
          })
          .then(() => {
            this.categoryName = null;
            this.$emit("cancelForm");
            this.loading = false;
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form-footer {
  .action {
    margin-right: 15px;

    &:last-of-type {
      margin-right: 0;
    }
  }
}
</style>

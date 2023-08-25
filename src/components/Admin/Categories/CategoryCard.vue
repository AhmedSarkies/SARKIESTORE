<template>
  <div class="category-card-container col-xl-4 col-lg-6 col-md-12">
    <div class="category-card">
      {{ category.name }}
      <div class="btn-container">
        <VEButton
          class="action"
          type="submit"
          @click="$emit('editCategory', category.id)"
          color="info"
          >EDIT</VEButton
        >
        <VEButton
          class="action"
          type="submit"
          @click="$emit('deleteCategory', category.id)"
          color="error"
          >DELETE</VEButton
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: ["category"],
};
</script>

<style lang="scss" scoped>
.category-card {
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  .action {
    font-size: 11px;
    margin-right: 10px;

    &:last-of-type {
      margin-right: 0;
    }
  }
}
</style>

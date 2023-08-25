<template>
  <div class="product-card">
    <div class="admin-actions" v-if="isAdmin">
      <VEButton class="action" type="submit" @click="editProduct" color="info"
        >EDIT</VEButton
      >
      <VEButton
        class="action"
        type="submit"
        @click="deleteProduct"
        color="error"
        >DELETE</VEButton
      >
    </div>
    <div class="card-image">
      <img :src="data?.imageURL" :alt="data?.title" width="300" />
    </div>
    <div class="card-body">
      <h2 class="card-title">{{ data?.title }}</h2>
      <p class="price">$ {{ data?.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsCard",
  props: ["data", "isAdmin"],
  methods: {
    editProduct: function () {
      this.$emit("editProduct", this.data);
    },
    deleteProduct: function () {
      this.$emit("deleteProduct", this.data?.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  height: 300px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  .admin-actions {
    position: absolute;
    top: 5px;
    right: 5px;

    button {
      padding: 4px 6px;
      font-size: 14px;

      &:first-of-type {
        margin-right: 5px;
      }
    }
  }

  .card-image {
    margin: 0;
    padding: 0;
    img {
      display: block;
      max-width: 100%;
      max-height: 200px;
      object-fit: cover;
    }
  }

  .card-body {
    margin: 0;
    padding: 7px 15px;

    .card-title {
      margin-top: 0;
    }
  }
}
</style>

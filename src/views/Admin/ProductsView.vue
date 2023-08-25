<template>
  <div>
    <SectionHeader @functionBtn="showModalHandler">
      <template #title>Products List</template>
      <template #action></template>
    </SectionHeader>

    <div class="container">
      <VELoader size="large" position="center" v-if="loading" />
      <div class="row" v-else>
        <div
          class="col-xl-3 col-md-4 col-sm-6 col-xs-12 d-flex justify-content-center align-items-center"
          v-for="product in products"
          :key="product.id"
        >
          <ProductsCard
            :data="product"
            :isAdmin="true"
            @editProduct="showModalHandler(product)"
            @deleteProduct="showDeleteModalHandler(product.id)"
          />
        </div>
      </div>
    </div>

    <VEModal :width="650" :show="toggleModal" @close="hideModalHandler">
      <ProductForm @cancelForm="hideModalHandler" :product="selectedProduct" />
    </VEModal>
    <DeleteModal
      :show="showDeleteModal"
      :loading="deleteLoading"
      :disabled="deleteLoading"
      @cancelForm="hideModalHandler"
      @deleteCategory="deleteProduct"
    />
    <EditModal
      :show="showEditModal"
      :loading="deleteLoading"
      :disabled="deleteLoading"
      :data="selectedProduct"
      @cancelForm="hideModalHandler"
      @editProduct="editProduct"
    />
  </div>
</template>

<script>
import SectionHeader from "@/components/Admin/SectionHeader.vue";
import ProductForm from "@/components/Admin/Products/ProductForm.vue";
import DeleteModal from "@/components/Admin/Categories/DeleteModal.vue";
import EditModal from "@/components/Admin/Categories/EditModal.vue";
import ProductsCard from "@/components/Public/Products/ProductCard.vue";

export default {
  name: "ProductsView",
  components: {
    SectionHeader,
    ProductForm,
    DeleteModal,
    EditModal,
    ProductsCard,
  },
  data: () => {
    return {
      toggleModal: false,
      showDeleteModal: false,
      showEditModal: false,
      selectedProduct: null,
      deleteLoading: false,
      loading: false,
    };
  },
  computed: {
    products() {
      return this.$store.state.admin.ProductsStore.products;
    },
  },
  mounted: function () {
    this.loading = true;
    this.$store
      .dispatch("admin/ProductsStore/getProducts")
      .finally(() => (this.loading = false));
  },
  methods: {
    showModalHandler: function (product) {
      this.selectedProduct = product;
      this.toggleModal = true;
    },
    hideModalHandler: function () {
      this.toggleModal = false;
      this.showDeleteModal = false;
      this.showEditModal = false;
    },
    showDeleteModalHandler: function (id) {
      this.showDeleteModal = true;
      this.selectedProduct = id;
    },
    deleteProduct: function () {
      this.deleteLoading = true;
      this.$store
        .dispatch("admin/ProductsStore/deleteProduct", this.selectedProduct)
        .then(() => {
          this.hideModalHandler();
          this.deleteLoading = false;
          this.selectedProduct = null;
        });
    },
    showEditModalHandler: function (product) {
      this.showEditModal = true;
      this.selectedProduct = product;
    },
    editProduct: function () {
      this.deleteLoading = true;
      this.$store
        .dispatch("admin/ProductsStore/editProduct", this.selectedProduct)
        .then(() => {
          this.$store.dispatch("admin/ProductsStore/getProducts");
          this.hideModalHandler();
          this.deleteLoading = false;
          this.selectedProduct = null;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <SectionHeader @functionBtn="showModalHandler">
      <template #title>Categories List</template>
      <template #action></template>
    </SectionHeader>
    <div class="container" v-if="loading">
      <VELoader size="large" position="center" />
    </div>
    <div class="container" v-else>
      <div class="row row-categories">
        <CategoryCard
          v-for="category in categories"
          :category="category"
          @deleteCategory="showDeleteModalHandler"
          @editCategory="showModalHandler(category)"
          :key="category.id"
        />
      </div>
    </div>
    <VEModal :width="800" :show="toggleModal" @close="hideModalHandler">
      <CategoryForm @cancelForm="hideModalHandler" />
    </VEModal>
    <DeleteModal
      :show="showDeleteModal"
      :loading="deleteLoading"
      :disabled="deleteLoading"
      @cancelForm="hideModalHandler"
      @deleteCategory="deleteCategory"
    />
    <EditModal
      :show="showEditModal"
      :loading="deleteLoading"
      :disabled="deleteLoading"
      @cancelForm="hideModalHandler"
      @editCategory="editCategory"
    />
  </div>
</template>

<script>
import SectionHeader from "@/components/Admin/SectionHeader.vue";
import CategoryForm from "@/components/Admin/Categories/CategoryForm.vue";
import CategoryCard from "@/components/Admin/Categories/CategoryCard.vue";
import DeleteModal from "@/components/Admin/Categories/DeleteModal.vue";
import EditModal from "@/components/Admin/Categories/EditModal.vue";

export default {
  name: "CategoriesView",
  components: {
    SectionHeader,
    CategoryForm,
    DeleteModal,
    CategoryCard,
    EditModal,
  },
  data: () => {
    return {
      toggleModal: false,
      showDeleteModal: false,
      showEditModal: false,
      selectedCategory: null,
      deleteLoading: false,
      loading: false,
    };
  },
  computed: {
    categories() {
      return this.$store.state.admin.categories;
    },
  },
  mounted: function () {
    this.loading = true;
    this.$store
      .dispatch("admin/getCategories")
      .finally(() => (this.loading = false));
  },
  methods: {
    showModalHandler: function () {
      this.toggleModal = true;
    },
    hideModalHandler: function () {
      this.toggleModal = false;
      this.showDeleteModal = false;
      this.showEditModal = false;
    },
    showDeleteModalHandler: function (id) {
      this.showDeleteModal = true;
      this.selectedCategory = id;
    },
    deleteCategory: function () {
      this.deleteLoading = true;
      this.$store
        .dispatch("admin/deleteCategory", this.selectedCategory)
        .then(() => {
          this.hideModalHandler();
          this.deleteLoading = false;
          this.selectedCategory = null;
        });
    },
    showEditModalHandler: function (category) {
      this.showEditModal = true;
      this.selectedCategory = category;
    },
    editCategory: function () {
      this.deleteLoading = true;
      this.$store
        .dispatch("admin/editCategory", this.selectedCategory.id)
        .then(() => {
          this.$store.dispatch("admin/getCategories");
          this.hideModalHandler();
          this.selectedCategory = null;
          this.deleteLoading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.row-categories {
  @media (max-width: 768px) {
    display: block;
    .category-card-container {
      padding: 15px 0;
    }
  }
}
</style>

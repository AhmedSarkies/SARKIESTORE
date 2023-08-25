<template>
  <form class="category-form" @submit.prevent="submit">
    <div>
      <h2 class="header">Add a new product</h2>
    </div>
    <label for="title" class="form-input-holder">
      <input
        type="text"
        class="form-input"
        v-model="form.title"
        name="title"
        id="title"
        placeholder="Title"
        required
      />
    </label>
    <label for="oldPrice" class="form-input-holder">
      <input
        type="text"
        class="form-input"
        v-model="form.oldPrice"
        name="oldPrice"
        id="oldPrice"
        placeholder="Old Price"
      />
    </label>
    <label for="price" class="form-input-holder">
      <input
        type="text"
        class="form-input"
        v-model="form.price"
        name="price"
        id="price"
        placeholder="Price"
        required
      />
    </label>
    <label for="quantity" class="form-input-holder">
      <input
        type="number"
        step="1"
        min="1"
        class="form-input"
        v-model="form.quantity"
        name="quantity"
        id="quantity"
        placeholder="Quantity"
        required
      />
    </label>
    <label for="category" class="form-input-holder">
      <input
        type="text"
        class="form-input"
        v-model="form.category"
        name="category"
        id="category"
        placeholder="Category"
        required
      />
    </label>
    <label for="type" class="form-input-holder">
      <input
        type="text"
        class="form-input"
        v-model="form.type"
        name="type"
        id="type"
        placeholder="Type"
      />
    </label>
    <label for="isNew" class="form-input-holder">
      <input
        type="text"
        class="form-input"
        v-model="form.isNew"
        name="isNew"
        id="isNew"
        placeholder="New"
      />
    </label>
    <label for="description" class="form-input-holder">
      <input
        type="text"
        class="form-input"
        v-model="form.description"
        name="description"
        id="description"
        placeholder="Description"
        required
      />
    </label>
    <div class="preview-image">
      <img :src="imageURL" />
    </div>
    <label for="image" class="form-input-holder form-input-holder-image">
      <span class="input-image">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path
            d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
          /></svg
        >Upload Image
      </span>
      <input
        type="file"
        class="form-input image-input-file"
        name="image"
        id="image"
        @change="imageInputChangeHandler"
        accept="image/*"
        required
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
const initForm = () => ({
  title: null,
  oldPrice: null,
  price: null,
  quantity: null,
  description: null,
  isNew: null,
  type: null,
  category: null,
});
export default {
  name: "ProductForm",
  props: ["product"],
  data: () => {
    return {
      form: initForm(),
      imageURL: null,
      imageFile: null,
      loading: false,
      reader: new FileReader(),
    };
  },
  created() {
    this.reader.onload = () => {
      this.imageURL = this.reader.result;
    };
  },
  computed: {
    isEditMode: function () {
      return !!this.product;
    },
  },
  methods: {
    cancel: function () {
      this.resetForm();
      this.$emit("cancelForm");
    },
    imageInputChangeHandler: function (e) {
      this.imageFile = e.target.files[0];
      this.reader.readAsDataURL(this.imageFile);
    },
    submit: function () {
      this.loading = true;
      this.$store
        .dispatch("admin/ProductsStore/submitProductForm", {
          products: this.form,
          imageFile: this.imageFile,
        })
        .then(() => {
          console.log(this.form);
          this.resetForm();
          this.$emit("cancelForm");
          this.loading = false;
        });
    },
    resetForm: function () {
      this.form = initForm();
      this.imageURL = null;
    },
    fillFormData: function () {
      const {
        title,
        oldPrice,
        price,
        quantity,
        description,
        isNew,
        type,
        category,
        imageURL,
      } = this.product;
      this.form = {
        title,
        oldPrice,
        price,
        quantity,
        description,
        isNew,
        type,
        category,
      };
      this.imageURL = imageURL;
    },
  },
  mounted() {
    this.isEditMode && this.fillFormData();
  },
};
</script>

<style lang="scss" scoped>
.header {
  font-size: 18px;
  color: #198754;
  display: flex;
  justify-content: center;
  align-items: center;
}
.preview-image {
  max-width: 100px;

  img {
    width: 100%;
  }
}
.form-input-holder-image {
  background-color: transparent;
  display: flex;
  margin: 0 auto 15px auto;
  max-width: fit-content;
  cursor: pointer;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #03a9f4;

    svg {
      width: 25px;
      fill: #03a9f4;
    }
  }

  .image-input-file {
    display: none;
  }
}
.form-footer {
  display: flex;
  justify-content: center;
  align-items: center;

  .action {
    margin-right: 15px;

    &:last-of-type {
      margin-right: 0;
    }
  }
}
</style>

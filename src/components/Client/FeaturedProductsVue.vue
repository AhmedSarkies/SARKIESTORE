<template>
  <div class="featuredProducts">
    <div class="top">
      <h1>{{ type }} Products</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas.
      </p>
    </div>
    <div class="bottom">
      <CardVue v-for="product in products" :key="product.id" :item="product" />
    </div>
  </div>
</template>

<script>
import CardVue from "@/components/Client/CardVue.vue";

export default {
  name: "FeaturedProductsVue",
  props: ["type"],
  components: {
    CardVue,
  },
  data: () => {
    return {
      data: null,
      loading: false,
    };
  },
  computed: {
    products() {
      return this.$store.state.client.products
        ?.filter((product) => product.type === this.type)
        ?.slice(0, 4);
    },
  },
  mounted: function () {
    this.loading = true;
    this.$store
      .dispatch("client/getProducts")
      .finally(() => (this.loading = false));
  },
};
</script>

<style lang="scss" scoped>
.featuredProducts {
  margin: 100px 200px;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;

    h1 {
      flex: 2;
      text-transform: capitalize;
    }

    p {
      flex: 3;
      color: gray;
    }
  }

  .bottom {
    display: flex;
    justify-content: center;
    gap: 50px;
  }
}
</style>

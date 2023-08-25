<template>
  <div class="list">
    <CardVue
      :item="product"
      v-for="product in products"
      :key="product.id"
      :maxPrice="maxPrice"
    />
  </div>
</template>

<script>
import CardVue from "@/components/Client/CardVue";
export default {
  name: "ListVue",
  props: ["products", "maxPrice"],
  components: {
    CardVue,
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>

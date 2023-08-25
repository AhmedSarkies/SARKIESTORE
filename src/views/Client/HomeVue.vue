<template>
  <div>
    <div className="home">
      <SliderVue />
      <FeaturedProductsVue type="featured" />
      <CategoriesVue />
      <FeaturedProductsVue type="trending" />
    </div>
  </div>
</template>

<script>
import {
  SliderVue,
  FeaturedProductsVue,
  CategoriesVue,
} from "@/components/Client";

export default {
  name: "HomeView",
  components: {
    SliderVue,
    FeaturedProductsVue,
    CategoriesVue,
  },
};
</script>

<style></style>

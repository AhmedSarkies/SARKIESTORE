<template>
  <div class="products">
    <div class="left">
      <div class="filterItem">
        <h2>Product Categories</h2>
        <div class="inputItem" v-for="item in category" :key="item.id">
          <input
            type="checkbox"
            @change="changeCategoryHandler"
            :id="item.id"
            :value="item?.id"
          />
          <label :for="item?.id">{{ item?.name }}</label>
        </div>
      </div>
      <div class="filterItem">
        <h2>Filter by price</h2>
        <div class="inputItem">
          <span>0</span>
          <input
            type="range"
            min="0"
            max="1000"
            step="1"
            value="1000"
            v-model="maxPrice"
            @change="changePriceHandler"
          />
          <span>{{ maxPrice }}</span>
        </div>
      </div>
      <div class="filterItem">
        <h2>Sort by</h2>
        <div class="inputItem">
          <input type="radio" id="asc" value="asc" name="price" />
          <label for="asc">Price (Lowest first)</label>
        </div>
        <div class="inputItem">
          <input type="radio" id="desc" value="desc" name="price" />
          <label for="desc">Price (Highest first)</label>
        </div>
      </div>
    </div>
    <div class="right">
      <img
        class="catImg"
        src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=copress&cs=tinysrgb&w=1600"
        alt=""
      />
      <ListVue :products="products" :maxPrice="maxPrice" />
    </div>
  </div>
</template>

<script>
import { ListVue } from "@/components/Client";

export default {
  name: "ProductView",
  components: {
    ListVue,
  },
  data: () => {
    return {
      data: null,
      loading: false,
      maxPrice: 1000,
      checked: null,
      isChecked: false,
    };
  },
  computed: {
    products() {
      return this.$store.state.client.products;
    },
    category() {
      return this.$store.state.client.CategoryStore.category;
    },
  },
  mounted: function () {
    this.loading = true;
    this.$store.dispatch("client/getProducts");
    this.$store.dispatch("client/CategoryStore/getCategory");
  },
  methods: {
    changePriceHandler: function (e) {
      this.maxPrice = e.target.value;
    },
    changeCategoryHandler: function (e) {
      this.isChecked = !this.isChecked;
      if (this.isChecked) {
        this.checked = Array(this.checked).concat(e.target.value);
        const arr = this.checked.flat(Infinity);
        arr.shift();
        const filteredArr = arr.filter(
          (item, index) => arr.indexOf(item) === index
        );
        console.log(filteredArr);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.products {
  padding: 30px 50px;
  display: flex;

  .left {
    flex: 1;
    position: sticky;
    height: 100%;
    top: 50px;

    .filterItem {
      margin-bottom: 30px;

      h2 {
        font-weight: 400;
        margin-bottom: 20px;
      }

      .inputItem {
        margin-bottom: 10px;

        label {
          margin-left: 10px;
        }
      }
    }
  }
  .right {
    flex: 3;

    .catImg {
      width: 100%;
      height: 300px;
      object-fit: cover;
      margin-bottom: 50px;
    }
  }
}
</style>

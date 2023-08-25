<template>
  <div>
    <div class="title-header">
      <h3 class="title">Orders List</h3>
    </div>
    <div class="container">
      <VELoader size="large" position="center" v-if="loading" />
      <div class="orders" v-for="order in orders" :key="order.id" v-else>
        <table>
          <thead>
            <tr>
              <th>ID Order</th>
              <th>ID Product</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in order" :key="item.id">
              <td>{{ order.id }}</td>
              <td>{{ item.id }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.quantity }}</td>
              <td>
                <img :src="item.imageURL" :alt="item.title" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrdersView",
  components: {},
  data: () => {
    return {
      loading: false,
    };
  },
  computed: {
    orders() {
      return this.$store.state.admin.ProductsStore.orders;
    },
  },
  mounted: function () {
    this.loading = true;
    this.$store
      .dispatch("admin/ProductsStore/getOrders")
      .finally(() => (this.loading = false));
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.title-header {
  border-bottom: 1px solid #eee;
  padding: 15px 20px;

  .title {
    margin: 10px;
    text-align: center;
  }
}
.orders {
  width: 100%;
}
table {
  width: 100%;
  margin: 10px;
  text-align: center;
  border: 1px solid #c6d3d9;
  tr {
    background-color: #68467e3d;
    color: #000;
    margin: 0;

    th {
      padding: 5px;
    }

    img {
      max-width: 100px;
      max-height: 150px;
      object-fit: cover;
    }
  }
}
</style>

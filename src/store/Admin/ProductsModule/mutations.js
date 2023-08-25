export default {
  updateProducts(state, products) {
    state.products = products;
  },
  getProducts(state, payload) {
    state.products = payload;
  },
  getOrders(state, payload) {
    state.orders = payload;
  },
};

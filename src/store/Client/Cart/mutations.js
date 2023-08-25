export default {
  addToCart(state, payload) {
    let item = payload;
    if (state.cart.length > 0) {
      let bool = state.cart.some((i) => i.id === item.id);
      if (bool) {
        let itemIndex = state.cart.findIndex((el) => el.id === item.id);
        state.cart[itemIndex]["quantity"] += payload.quantity;
      } else {
        state.cart.push(item);
      }
    } else {
      state.cart.push(item);
    }
  },
  removeItem(state, payload) {
    state.cart = payload;
  },
  resetCart(state) {
    state.cart = [];
  },
};

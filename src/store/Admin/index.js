import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import ProductsStore from "./ProductsModule";

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  modules: {
    ProductsStore,
  },
};

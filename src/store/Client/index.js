import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import CategoryStore from "./Category";
import CartStore from "./Cart";

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  modules: {
    CategoryStore,
    CartStore,
  },
};

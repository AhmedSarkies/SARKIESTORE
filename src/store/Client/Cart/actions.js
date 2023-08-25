import { addDoc, collection } from "firebase/firestore";
import { db } from "@/Firebase";
import { ORDERS } from "@/Firebase/const/fireStoreConst";

export default {
  addToCart: ({ commit }, { product, quantity }) => {
    const order = Object.assign({}, product, {
      quantity,
    });
    // window.localStorage.setItem(order.id, JSON.stringify(order));
    commit("addToCart", order);
  },
  checkOut: async ({ commit }, order) => {
    if (order.length > 0) {
      await addDoc(collection(db, ORDERS), { ...order }).then(() =>
        commit("resetCart")
      );
    }
  },
  removeItem: ({ commit, state }, productID) => {
    // const removedItem = state.cart.filter((el) => el.id === productID);
    // window.localStorage.removeItem(productID, JSON.stringify(removedItem));
    const items = state.cart.filter((el) => el.id !== productID);
    commit("removeItem", items);
  },
  resetCart: ({ commit }) => {
    // window.localStorage.clear("carts");
    commit("resetCart");
  },
};

import { db } from "@/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { PRODUCTS } from "@/Firebase/const/fireStoreConst";

export default {
  getProducts: ({ commit }) => {
    return getDocs(collection(db, PRODUCTS)).then((querySnapshot) => {
      const products = querySnapshot?.docs?.map((doc) =>
        Object.assign({}, doc.data(), {
          id: doc.id,
        })
      );
      commit("updateProducts", products);
    });
  },
};

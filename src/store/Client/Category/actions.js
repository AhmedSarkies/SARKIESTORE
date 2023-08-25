import { db } from "@/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { CATEGORIES } from "@/Firebase/const/fireStoreConst";

export default {
  getCategory: ({ commit }) => {
    return getDocs(collection(db, CATEGORIES)).then((querySnapshot) => {
      const categories = querySnapshot?.docs?.map((doc) =>
        Object.assign({}, doc.data(), {
          id: doc.id,
        })
      );
      commit("updateCategory", categories);
    });
  },
};

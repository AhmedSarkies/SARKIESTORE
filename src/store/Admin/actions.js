import { db } from "@/Firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { CATEGORIES } from "@/Firebase/const/fireStoreConst";

export default {
  submitCategoryForm: async ({ commit, state }, categories) => {
    return await addDoc(collection(db, CATEGORIES), categories).then((doc) =>
      commit(
        "updateCategories",
        state.categories.concat(
          Object.assign({}, categories, {
            id: doc.id,
          })
        )
      )
    );
  },
  getCategories: ({ commit }) => {
    return getDocs(collection(db, CATEGORIES)).then((querySnapshot) => {
      const categories = querySnapshot?.docs?.map((doc) =>
        Object.assign({}, doc.data(), {
          id: doc.id,
        })
      );
      commit("updateCategories", categories);
    });
  },
  deleteCategory: async ({ commit, state }, categoryID) => {
    return await deleteDoc(doc(db, CATEGORIES, categoryID)).then(() => {
      commit(
        "updateCategories",
        state.categories.filter((category) => category.id !== categoryID)
      );
    });
  },
  editCategory: async ({ commit, state }, categoryID) => {
    return await updateDoc(doc(db, CATEGORIES, categoryID), {
      name: state.newCategoryName,
    });
  },
};

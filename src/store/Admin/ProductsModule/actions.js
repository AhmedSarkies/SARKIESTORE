import { db, storage } from "@/Firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { ORDERS, PRODUCTS } from "@/Firebase/const/fireStoreConst";
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import { generateFileName } from "@/Firebase/utils/storage";

export default {
  submitProductForm: ({ commit, state }, { products, imageFile }) => {
    const uploadImage = uploadBytesResumable(
      ref(storage, `${PRODUCTS}/${generateFileName(imageFile)}`),
      imageFile
    );
    uploadImage.on(
      "state_changed",
      () => {},
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadImage.snapshot.ref).then(async (downloadURL) => {
          const productObj = {
            ...products,
            oldPrice: Number(products.oldPrice),
            price: Number(products.price),
            isNew:
              products.isNew.toLowerCase() === "yes"
                ? true
                : products.isNew.toLowerCase() === "no"
                ? false
                : null,
            quantity: Number(products.quantity),
            imageURL: downloadURL,
          };
          return await addDoc(collection(db, PRODUCTS), productObj).then(
            (doc) => {
              commit(
                "updateProducts",
                state.products.concat(
                  Object.assign({}, productObj, {
                    id: doc.id,
                  })
                )
              );
            }
          );
        });
      }
    );
  },
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
  getOrders: ({ commit }) => {
    return getDocs(collection(db, ORDERS)).then((querySnapshot) => {
      const orders = querySnapshot?.docs?.map((doc) =>
        Object.assign({}, doc.data(), {
          id: doc.id,
        })
      );
      commit("getOrders", orders);
    });
  },
  deleteProduct: async ({ commit, state }, productID) => {
    return await deleteDoc(doc(db, PRODUCTS, productID)).then(() => {
      commit(
        "updateProducts",
        state.products.filter((product) => product.id !== productID)
      );
    });
  },
  // editProduct: ({ commit, state }, { products, imageFile }) => {
  //   deleteDoc(doc(db, PRODUCTS, products.id)).then(() => {
  //     commit(
  //       "updateProducts",
  //       state.products.filter((product) => product.id !== products.id)
  //     );
  //   });
  //   const uploadImage = uploadBytesResumable(
  //     ref(storage, `${PRODUCTS}/${generateFileName(imageFile)}`),
  //     imageFile
  //   );
  //   uploadImage.on(
  //     "state_changed",
  //     () => {},
  //     (error) => {
  //       console.log(error);
  //     },
  //     () => {
  //       getDownloadURL(uploadImage.snapshot.ref).then(async (downloadURL) => {
  //         const productObj = {
  //           ...products,
  //           price: parseFloat(products.price),
  //           imageURL: downloadURL,
  //         };
  //         return await addDoc(collection(db, PRODUCTS), productObj).then(
  //           (doc) => {
  //             commit(
  //               "updateProducts",
  //               state.products.concat(
  //                 Object.assign({}, productObj, {
  //                   id: doc.id,
  //                 })
  //               )
  //             );
  //           }
  //         );
  //       });
  //     }
  //   );
  // },
};

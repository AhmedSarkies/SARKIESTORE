import db from "@/Firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  module,
};

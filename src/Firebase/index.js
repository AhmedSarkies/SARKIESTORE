import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6WNqmyAE_ADtrYwlAyZZXqdyvvbD5rAw",
  authDomain: "vue-ecommerce-d24d5.firebaseapp.com",
  projectId: "vue-ecommerce-d24d5",
  storageBucket: "vue-ecommerce-d24d5.appspot.com",
  messagingSenderId: "920819147401",
  appId: "1:920819147401:web:d295b00176c299270d5c58",
  measurementId: "G-NVX1XFS417",
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp;

export const db = getFirestore(app);
export const storage = getStorage(app);

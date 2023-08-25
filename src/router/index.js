import Vue from "vue";
import VueRouter from "vue-router";
import AdminRoutes from "./Admin";
import ClientRoutes from "./Client";

Vue.use(VueRouter);

const baseRoutes = [
  {
    path: "/base",
    name: "base",
  },
];

const routes = [...baseRoutes, ...AdminRoutes, ...ClientRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.meta.needsAuth) {
//     next("/login");
//   } else {
//     if (
//       to.path === "/admin/productsAdmin" ||
//       to.path === "/admin/categoriesAdmin" ||
//       to.path === "/admin/orders"
//     ) {
//       next("/home");
//     } else {
//       next();
//     }
//   }
// });

export default router;

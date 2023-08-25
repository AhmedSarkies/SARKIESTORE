import {
  HomeView,
  LoginView,
  HomeVue,
  ProductView,
  ProductsView,
} from "@/views/Client";
export default [
  {
    path: "/",
    name: "homeView",
    component: HomeView,
    meta: {
      needsAuth: true,
    },
    children: [
      {
        path: "login",
        name: "login",
        component: LoginView,
        meta: {
          needsAuth: false,
        },
      },
      {
        path: "home",
        name: "home",
        component: HomeVue,
        meta: {
          needsAuth: false,
        },
      },
      {
        path: "product/:id",
        name: "product",
        component: ProductView,
        meta: {
          needsAuth: true,
        },
      },
      {
        path: "products",
        name: "products",
        component: ProductsView,
        meta: {
          needsAuth: true,
        },
      },
    ],
  },
];

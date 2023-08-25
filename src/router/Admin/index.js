import {
  AdminView,
  ProductsView,
  CategoriesView,
  OrdersView,
} from "@/views/Admin";

export default [
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
    meta: {
      needsAuth: true,
      isAdmin: true,
    },
    children: [
      {
        path: "orders",
        name: "orders",
        component: OrdersView,
        meta: {
          needsAuth: true,
          isAdmin: true,
        },
      },
      {
        path: "productsAdmin",
        name: "productsAdmin",
        component: ProductsView,
        meta: {
          needsAuth: true,
          isAdmin: true,
        },
      },
      {
        path: "categoriesAdmin",
        name: "categoriesAdmin",
        component: CategoriesView,
        meta: {
          needsAuth: true,
          isAdmin: true,
        },
      },
    ],
  },
];

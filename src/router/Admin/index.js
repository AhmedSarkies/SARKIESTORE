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
      // needsAuth: true,
    },
    children: [
      {
        path: "orders",
        name: "orders",
        component: OrdersView,
        meta: {
          // needsAuth: true,
        },
      },
      {
        path: "productsAdmin",
        name: "productsAdmin",
        component: ProductsView,
        meta: {
          // needsAuth: true,
        },
      },
      {
        path: "categoriesAdmin",
        name: "categoriesAdmin",
        component: CategoriesView,
        meta: {
          // needsAuth: true,
        },
      },
    ],
  },
];

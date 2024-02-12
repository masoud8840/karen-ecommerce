import { createRouter, createWebHistory } from "vue-router";
// Components
import Home from "../views/Home.vue";
import ProductList from "../views/ProductList.vue";
import Dashboard from "../views/Dashboard.vue";
import UserAccount from "../views/UserAccount.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products/:category",
    name: "ProductsList",
    component: ProductList,
    props: true,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "/user-account",
        name: "UserAccount",
        component: UserAccount,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

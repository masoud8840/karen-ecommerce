import { createRouter, createWebHistory } from "vue-router";
// Components
import Home from "../views/Home.vue";
import ProductList from "../views/ProductList.vue";
import Dashboard_index from "../views/Dashboard/index.vue";

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
    path: "/dashboard/:subpage",
    name: "Dashboard",
    component: Dashboard_index,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

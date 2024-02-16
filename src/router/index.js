import { createRouter, createWebHistory } from "vue-router";
// Components
import Home from "../views/Home.vue";
import ProductList from "../views/ProductList.vue";
import ProductDetails from "../views/ProductDetails.vue";

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
    path: "/products/details/:productId",
    name: "ProductDetails",
    component: ProductDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

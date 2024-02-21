import { createRouter, createWebHistory } from "vue-router";
// Components
import Home from "../views/Home.vue";
import ProductList from "../views/ProductList.vue";
import ProductDetails from "../views/ProductDetails.vue";
import Dashboard from "../views/Dashboard/index.vue";
import UserAccount from "../views/Dashboard/UserAccount.vue";
import ShoppingCart from "../views/Dashboard/ShoppingCart.vue";
import FavoriteList from "../views/Dashboard/FavoriteList.vue";
import OrdersHistory from "../views/Dashboard/OrdersHistory.vue";

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
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "user-account",
        name: "UserAccount",
        component: UserAccount,
      },
      {
        path: "shopping-cart",
        name: "ShoppingCart",
        component: ShoppingCart,
      },
      {
        path: "shopping-cart/:orderId",
        name: "ShoppingCartHistory",
        component: ShoppingCart,
      },
      {
        path: "favorite-list",
        name: "FavoriteList",
        component: FavoriteList,
      },
      {
        path: "/orders-history",
        name: "OrdersHistory",
        component: OrdersHistory,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

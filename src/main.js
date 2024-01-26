import { createApp } from "vue";
import App from "./App.vue";
// Styles
import "./assets/Styles.scss";
// Router
import router from "./router";

createApp(App).use(router).mount("#app");

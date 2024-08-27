import { vMaska } from "maska/vue";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./routes/routes";
import "./style.css";

const app = createApp(App);
app.directive("maska", vMaska);
app.use(router);
app.mount("#app");

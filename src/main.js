import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../src/lockRightMouseClick.js";
import "../src/assets/styles/index.scss";
import "../src/assets/styles/animations.scss";
import "../src/assets/styles/nav.scss";
import "../src/assets/styles/main.scss";
import "../src/assets/styles/footer.scss";

createApp(App).use(router).mount("#app");

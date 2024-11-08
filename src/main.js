import { createApp } from "vue";
import App from "./App.vue";
import { createMetaManager } from "vue-meta";
import router from "./router";
// createApp(App).use(createMetaManager).mount("#app");
const app = createApp(App);
app.use(router);
app.use(createMetaManager());
app.mount("#app");

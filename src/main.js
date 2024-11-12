import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// css格式化
import "./assets/css/index.less";

// antd
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";

// antd-icons
import * as icons from "@ant-design/icons-vue";

const app = createApp(App);
for (const i in icons) {
  app.component(i, icons[i]);
}
app.use(createPinia()).use(router).use(Antd).mount("#app");
//

import { createApp } from "vue";
import "./style.css";
// eslint-disable-next-line import/no-duplicates
import Antd from "ant-design-vue";
// eslint-disable-next-line import/no-duplicates
import { Button, message } from "ant-design-vue";
import ElementPlus from "element-plus"
import router from "./router";
import "element-plus/dist/index.css"
import App from "./App.vue";
import "ant-design-vue/dist/reset.css";

const app = createApp(App);
app.use(router);
app.use(Antd);
app.use(Button);
app.use(ElementPlus)
app.mount("#app");

app.config.globalProperties.$message = message;

import { createApp } from "vue";
import "./style.css";
import Antd from "ant-design-vue";
import { Button, message } from "ant-design-vue";
import router from "router";
import App from "./App.vue";
import "ant-design-vue/dist/reset.css";

const app = createApp(App);
app.use(router);
app.use(Antd);
app.use(Button);
app.mount("#app");

app.config.globalProperties.$message = message;

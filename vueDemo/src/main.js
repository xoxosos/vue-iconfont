/*
 * @Author: LinRenJie
 * @Date: 2022-11-04 22:20:13
 * @LastEditTime: 2022-12-10 13:26:04
 * @Description:
 * @FilePath: \vue-demo\vueDemo\src\main.js
 * @Email: xoxosos666@gmail.com
 */
import IconSvg from "@/components/iconsvg/IconComponent.vue";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
// import "./assets/main.css";
import "./assets/style.less";
import "./assets/symbol/iconfont";
import router from "./router";
const app = createApp(App);
app.component("icon-svg", IconSvg);
app.use(createPinia());
app.use(router);
app.mount("#app");

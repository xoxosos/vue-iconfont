/*
 * @Author: LinRenJie
 * @Date: 2022-11-04 22:20:13
 * @LastEditTime: 2022-12-10 14:17:41
 * @Description:
 * @FilePath: \vue-demo\vueDemo\vite.config.js
 * @Email: xoxosos666@gmail.com
 */
import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { VantResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      //配置Vite Vant按需引入
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: "/Youtube-clone/",

//   resolve: {
//     alias: {
//       web3: "web3/dist/web3.min.js",
//     },
//   },
// });

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/",
  };

  if (command !== "serve") {
    config.base = "/Youtube-clone/";
  }

  return config;
});

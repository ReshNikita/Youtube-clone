import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// export default defineConfig(({ command }) => {
//   const config = {
//     plugins: [react()],
//     base: "/",
//   };

//   if (command !== "serve") {
//     config.base = "/Youtube-clone/";
//   }

//   return config;
// });

export default defineConfig({
  plugins: [react()],
  base: "/Youtube-clone/",
});

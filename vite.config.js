import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { VitePWA } from "vite-plugin-pwa";
import eslintPlugin from "@nabla/vite-plugin-eslint";
// import eslintPlugin from '@nabla/vite-plugin-eslint'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    // eslintPlugin(),
    reactRefresh(),
    // VitePWA(),
  ],
  // mode === 'test' &&
  //   istanbul({
  //     include: ['src/**/*.jsx', '/src/**/*.js'],
  //   }),
});

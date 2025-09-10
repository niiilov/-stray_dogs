import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src/app"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@entities": path.resolve(__dirname, "./src/entities"),
      "@shared": path.resolve(__dirname, "./src/shared"),

      "@": path.resolve(__dirname, "./src"),
    },
  },
  // ДОБАВЛЕННЫЙ БЛОК ДЛЯ РАБОТЫ ПО IP
  server: {
    host: "0.0.0.0", // Слушаем все сетевые интерфейсы
    port: 5173, // Порт (можно изменить при необходимости)
    strictPort: true, // Запрещаем автоматический подбор порта
  },
  preview: {
    host: "0.0.0.0", // Для команды 'preview'
    port: 5173, // Порт превью (должен совпадать с продакшеном)
  },
});

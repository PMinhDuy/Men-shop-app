import { defineConfig, loadEnv } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import pages from "vite-plugin-pages";
import path from "path";

function htmlPlugin(env: Record<string, string | undefined>) {
  return {
    name: "html-transform",
    transformIndexHtml: {
      enforce: "pre",
      transform: (html: string) => {
        return html.replace(/<%=(.*?)%>/g, (match, p1) => env[p1] ?? match);
      },
    },
  };
}

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    server: {
      port: 3000,
    },
    plugins: [
      htmlPlugin(process.env),
      svgr(),
      react(),
      pages({
        routeStyle: "next",
        dirs: "src/pages",
        importMode: "async",
      }),
    ],
    resolve: {
      alias: [
        {
          find: /^#/,
          replacement: path.resolve(__dirname, "src"),
        },
        { find: /^~antd/, replacement: "antd" },
      ],
    },
    build: {
      sourcemap: true,
      outDir: "build",
      rollupOptions: {
        plugins: [visualizer()],
      },
    },
  });
};

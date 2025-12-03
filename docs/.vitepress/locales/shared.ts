import { defineConfig } from "vitepress";
import llmstxt from "vitepress-plugin-llms"; // ⬅️ LLM ST plugin for VitePress
import AutoFrontmatter, { FileInfo } from "vitepress-plugin-auto-frontmatter";
import { useTransformByRules, type TransformRule } from "../theme/composables/useTransform";
import Permalink from "vitepress-plugin-permalink";
import Sidebar from "vitepress-plugin-sidebar-resolve";

export default defineConfig({
  cleanUrls: false,
  lastUpdated: true,

  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/teek-logo-mini.svg" }],
    ["link", { rel: "icon", type: "image/png", href: "/teek-logo-mini.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { name: "author", content: "Teek" }],
    ["link", { rel: "stylesheet", href: "//at.alicdn.com/t/font_2989306_w303erbip9.css" }], // 阿里在线矢量库
  ],

  markdown: {
    lineNumbers: true,
  },

  vite: {
    plugins: [Permalink(/* options */), Sidebar(/* options */)],
    server: {
      allowedHosts: [
        'wiki.yunshimc.com',
        'docs.yunshimc.com',
        'localhost'
      ],
    },
  },

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: "/favicon.svg",
    search: {
      provider: "local",
    },
    editLink: {
      pattern: "https://github.com/Kele-Bingtang/vitepress-theme-teek/edit/master/docs/:path",
    },
  },

  sitemap: {
    hostname: "https://docs.yunshimc.com",
    transformItems: (items) => {
      const permalinkItemBak: typeof items = [];
      const permalinks = (globalThis as any).VITEPRESS_CONFIG.site.themeConfig
        .permalinks;
      items.forEach((item) => {
        const permalink = permalinks?.map[item.url];
        if (permalink)
          permalinkItemBak.push({ url: permalink, lastmod: item.lastmod });
      });
      return [...items, ...permalinkItemBak];
    },
  },
});
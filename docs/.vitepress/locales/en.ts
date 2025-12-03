import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config"; // ⬅️ 导入Teek主题配置定义  
import { version } from "vitepress-theme-teek/es/version"; // ⬅️ 导入版本信息

// 🥳 Teek 主题配置 - 英文版
const teekConfig = defineTeekConfig({
  teekHome: false, // 是否开启博客首页
  vpHome: true, // 是否隐藏 VP 首页
  sidebarTrigger: true, // 是否开启侧边栏折叠功能
  author: { name: "ZHI", link: "https://github.com/Kele-Bingtang" }, // ⬅️ 作者信息，英文名称
  footerInfo: {
    theme: {
      name: `Theme By Teek@${version}`,
    },
    copyright: {
      createYear: 2025,
      suffix: "ZHI",
    },
  },
  codeBlock: {
    copiedDone: (TkMessage) => TkMessage.success("Copied successfully!"), // ⬅️ 代码块复制成功提示
  },
  articleShare: { enabled: true },
  vitePlugins: {
    sidebarOption: {
      initItems: false,
    },
    autoFrontmatter: true, // 是否启用 autoFrontmatter 插件
    // autoFrontmatter 插件配置项
    autoFrontmatterOption: {
      permalink: true, // 是否开启生成永久链接
      recoverTransform: false, // 是否开启同名 key 覆盖
      categories: true, // 是否开启自动生成 categories
      coverImg: false, // 是否开启添加文档封面图
      forceCoverImg: false, // 是否开启强制覆盖封面图
      coverImgList: [], // 封面图列表
      // 处理永久链接的规则
      permalinkRules: [
        //{ folderName: "01.指南/01.简介/", prefix: "/$path/$uuid", removeLevel: 99 }, // 添加前缀
      ],
    },
    permalink: true, // 是否启用 permalink 插件
    permalinkOption: {}, // permalinks 插件配置项
  },
});

const description = [
  "Welcome to CloudPick Graphics Documentation",
  "CloudPick is a game engine based on Minecraft, supporting off-screen rendering UI and model extensions",
  "CloudPick UI uses Wpf + JavaScript + Web off-screen rendering, can achieve countless effects, and keeps up with Minecraft versions",
].toString();

export default defineConfig({
  title: "CloudPick Docs",
  lang: "en-US",
  description: description,
  head: [
    ["meta", { property: "og:locale", content: "en-US" }],
    ["meta", { property: "og:title", content: "Teek | VitePress Theme" }],
    ["meta", { property: "og:site_name", content: "Teek" }],
    ["meta", { property: "og:description", content: description }],
    ["meta", { name: "description", content: description }],
    ["meta", { name: "keywords", content: description }],
  ],
  markdown: {
    image: {
      lazyLoading: true,
    },
    container: {
      tipLabel: "Tip",
      warningLabel: "Warning", 
      dangerLabel: "Danger",
      infoLabel: "Info",
      detailsLabel: "Details",
    },
  },
  themeConfig: {
    ...teekConfig.themeConfig,
    darkModeSwitchLabel: "Theme",
    sidebarMenuLabel: "Menu",
    returnToTopLabel: "To Top",
    lastUpdatedText: "Last Updated",
    outline: {
      level: [2, 4],
      label: "Page Navigation",
    },
    docFooter: {
      prev: "Previous",
      next: "Next",
    },
    nav: [
      { text: "Home", link: "/en/" },
      {
        text: "Installation",
        link: "/en/install/",
        activeMatch: "/en/install/",
      },
      { 
        text: "Simple Functions", 
        link: "/en/simplefunction/", 
        activeMatch: "/en/simplefunction/" 
      },
      { 
        text: "UI Interface", 
        link: "/en/ui/", 
        activeMatch: "/en/ui/" 
      },
      { 
        text: "Models", 
        link: "/en/model/", 
        activeMatch: "/en/model/" 
      },
      { 
        text: "Scripts", 
        link: "/en/js/", 
        activeMatch: "/en/js/" 
      },
      { 
        text: "Development", 
        link: "/en/develop/", 
        activeMatch: "/en/develop/" 
      },
    ],
  },
});
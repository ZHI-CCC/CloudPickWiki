import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config"; // ⬅️ 导入Teek主题配置定义
import { version } from "vitepress-theme-teek/es/version"; // ⬅️ 导入版本信息


const teekConfig = defineTeekConfig({
  teekHome: false, // 是否开启博客首页
  vpHome: true, // 是否隐藏 VP 首页
  sidebarTrigger: true, // 是否开启侧边栏折叠功能
  author: { name: "止", link: "https://github.com/Kele-Bingtang" }, // ⬅️ 作者信息，中文名称
  footerInfo: {
    theme: {
      name: `Theme By Teek@${version}`,
    },
    copyright: {
      createYear: 2025,
      suffix: "止",
    },
  },
  codeBlock: {
    copiedDone: (TkMessage) => TkMessage.success("复制成功！"), // ⬅️ 代码块复制成功提示
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
    },
    permalink: true, // 是否启用 permalink 插件
    permalinkOption: {}, // permalinks 插件配置项
  },
});

const description = [
  "欢迎来到 云拾图形 使用文档",
  "云拾 是一个基于 Minecraft 的游戏引擎，支持离屏渲染UI和模型扩展",
  "云拾UI采用 Wpf + JavaScript + Web 离屏渲染，可以实现无数种效果，紧跟Minecraft版本",
].toString();

export default defineConfig({
  title: "云拾文档",
  lang: "zh-CN",
  description: description,
  head: [
    ["meta", { property: "og:locale", content: "zh-CN" }],
    ["meta", { property: "og:title", content: "Teek | VitePress 主题" }],
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
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  themeConfig: {
    ...teekConfig.themeConfig,
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "上次更新时间",
    outline: {
      level: [2, 4],
      label: "本页导航",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: [
      { text: "首页", link: "/" },
      {
        text: "安装教程",
        link: "/install/感谢",
        activeMatch: "/01.安装教程/",
      },
      { 
        text: "简单功能", 
        link: "/simplefunction/贴图字体", 
        activeMatch: "/02.简单功能/" 
      },
      { 
        text: "UI界面", 
        link: "/ui/说在前面", 
        activeMatch: "/03.UI界面/" 
      },
      { 
        text: "模型", 
        link: "/model/说在前面", 
        activeMatch: "/04.模型/" 
      },
      { 
        text: "脚本", 
        link: "/js/说在前面", 
        activeMatch: "/99.JavaScript/" 
      },
      { text: "开发", link: "/develop/说在前面", activeMatch: "/98.开发/" },
    ],
  },
});
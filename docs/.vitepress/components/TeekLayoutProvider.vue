<script setup lang="ts">
import Teek, { zhCn, en } from "vitepress-theme-teek";
import { useData } from "vitepress";
import { computed } from "vue";

const { lang } = useData();

const locale = computed(() => {
  return lang.value === "zh-CN" ? zhCn : en;
});
</script>

<template>
  <Teek.Layout :locale="locale" />
</template>
<!--
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2023-08-15 15:39:42
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-04-02 15:07:29
 * @FilePath: /vue3-element-table-Cyan/packages/xmwTable/src/Pagination.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved. 
-->
<template>
    <el-pagination v-bind="pageConfig"></el-pagination>
</template>
<script lang="ts" setup>
// import { defineProps } from "vue";
// 定义组件接收的prop属性
const prop = defineProps({
    pageConfig: {
        type: Object,
        default: () => ({})
    }
})
</script>
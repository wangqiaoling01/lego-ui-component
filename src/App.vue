<template>
    <a-layout :style="{background: '#fff'}">
        <a-layout-header class="header">
            <div class="page-title">Lego</div>
        </a-layout-header>

        <a-layout-content class="home-layout">
            <router-view />
        </a-layout-content>

        <a-layout-footer>
            @ xx 版权所有 ｜ 备号
        </a-layout-footer>
    </a-layout>
</template>
<script lang="ts">
export default {
}
</script>
<style scoped>
</style>

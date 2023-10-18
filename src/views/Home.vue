<template>
    <div class="homepage-container">
        <a-layout :style="{background: '#fff'}">
            <a-layout-header class="header">
                <div class="page-title">Lego</div>
            </a-layout-header>

            <a-layout-content class="home-layout">
                <div class="content-container">
                    <template-list />
                </div>
            </a-layout-content>

            <a-layout-footer>
                @ xx 版权所有 ｜ 备号
            </a-layout-footer>
        </a-layout>
    </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue'
import TemplateList from '../components/TemplateList.vue'

export default {
    components: {
        TemplateList
    },
    setup () {
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
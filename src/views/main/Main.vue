<template>
  <a-layout class="main-cls">
    <a-layout-sider :trigger="null" collapsible class="test">
      <div class="logo">
        <span>LIGHT-ECHARDS-DEMO</span>
      </div>
      <!-- 左侧菜单栏 -->
      <navMenu />
    </a-layout-sider>
    <a-layout>
      <a-layout-content
        :style="{
          padding: '24px 16px',
          minHeight: '280px',
          overflow: 'auto',
        }"
      >
        <a-config-provider :locale="locale">
          <router-view />
        </a-config-provider>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import navMenu from "@/components/nav-menu/nav-menu.vue";
import dayjs from "dayjs";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import "dayjs/locale/zh-cn";

dayjs.locale("zh-cn");
const locale = zhCN;
// const selectedKeys = ref(['1'])
</script>

<style lang="less" scoped>
.main-cls {
  height: 100%;
  .logo {
    display: flex;
    // transition: color 0.3s;
    align-items: center;
    justify-content: center;
    height: 32px;
    margin: 16px;
    color: #fff;
    > span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .img {
      height: 100%;
      margin: 0 8px;
    }
  }
}

:deep(.ant-layout-sider-children) {
  display: flex;
  overflow: auto;
  flex-direction: column;
}
:deep(.ant-layout-content) {
  > div {
    height: 100%;
  }
}
</style>

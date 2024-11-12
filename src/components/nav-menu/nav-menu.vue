<template>
  <!-- <div class="nav-menu-cls"></div> -->
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
    theme="dark"
    :items="items"
    @click="onClick"
  />
</template>
<script setup>
import { h, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { routes } from "@/router";
import { DesktopOutlined } from "@ant-design/icons-vue";

const route = useRoute();
const router = useRouter();
const selectedKeys = ref([]);
const openKeys = ref([]);
const items = ref([]);

onMounted(() => {
  getMenuList(routes);
});

const onClick = ({ key }) => {
  router.push({ path: key ?? "/not-found" });
};
const getMenuList = (routes) => {
  const main = routes.find((route) => route.name === "main")?.children;
  items.value = mapMenuList(main);

  const { menu, parentMenu } = getMenuByPath(main, route.path);
  selectedKeys.value = [menu.path];
  openKeys.value = [parentMenu.path];
};

// 工具函数
function mapMenuList(list) {
  return list.map((item) => {
    const obj = {
      // id: item.id,
      url: item.path,
      type: item.meta.type,
      // 新增属性
      key: item.path,
      label: item.meta.title,
      title: item.meta.title,
      children:
        item.children && item.children.length && item.type !== 2
          ? mapMenuList(item.children)
          : undefined,
    };
    if (item.meta.type === 1) obj.icon = () => h(DesktopOutlined);
    return obj;
  });
}

function getMenuByPath(userMenus, currentPath) {
  for (const item of userMenus) {
    if (item.meta.type === 1) {
      const findMenu = getMenuByPath(item.children ?? [], currentPath);

      if (findMenu) {
        return {
          menu: findMenu,
          parentMenu: item,
        };
      }
    }
    if (item.meta.type === 2 && item.path === currentPath) {
      return item;
    }
  }
}
</script>

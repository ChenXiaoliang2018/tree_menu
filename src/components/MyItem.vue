<template>
  <div>
    <!-- 组件内容 -->
    <div v-for="(item, index) in data" :key="index">
      <!-- 有children -->
      <el-submenu
        :index="item.path"
        v-if="item.children.length > 0"
      >
        <template slot="title">
          <span>{{ item.meta?.title }}</span>
        </template>
        <MyItem :data="item.children"></MyItem>
      </el-submenu>
      <!-- 没有children -->
      <el-menu-item v-else :index="item.path">{{
        item.meta?.title
      }}</el-menu-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyItem",
  data() {
    return {
      // 数据定义
    };
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    // 方法定义
  },
};
</script>

<style scoped>
/* 样式定义 */
</style>

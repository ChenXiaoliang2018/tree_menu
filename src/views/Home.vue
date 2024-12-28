<template>
  <el-container height="100vh">
    <el-aside width="300px">
      <el-menu
        :default-active="activeIndex"
        router
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="menuSelect"
      >
        <MyItem :data="data"></MyItem> </el-menu
    ></el-aside>
    <el-container>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import MyItem from "@/components/MyItem.vue";

export default {
  name: "Home",
  components: {
    MyItem,
  },
  data() {
    return {
      activeIndex: this.$route.path,
      data: [
        {
          name: "前端三大框架",
          path: "/front",
          icon: "el-icon-s-home",
          children: [
            {
              name: "vue页面",
              path: "/vue",
              icon: "el-icon-star-off",
              children: [],
              meta: {
                title: "vue页面",
              },
            },
            {
              name: "react页面",
              path: "/react",
              icon: "el-icon-star-off",
              children: [],
              meta: {
                title: "react页面",
              },
            },
            {
              name: "angular页面",
              path: "/angular",
              icon: "el-icon-star-off",
              children: [],
              meta: {
                title: "angular页面",
              },
            },
            {
              name: "new页面",
              path: "/new",
              icon: "el-icon-star-off",
              children: [
                {
                  name: "new1页面",
                  path: "/new1",
                  icon: "el-icon-star-off",
                  children: [],
                  meta: {
                    title: "new1页面",
                  },
                },
                {
                  name: "new2页面",
                  path: "/new2",
                  icon: "el-icon-star-off",
                  children: [],
                  meta: {
                    title: "new2页面",
                  },
                },
              ],
              meta: {
                title: "new页面",
              },
            },
          ],
          meta: {
            title: "前端三大框架",
          },
        },
        {
          name: "后端框架",
          path: "/end",
          icon: "el-icon-s-cooperation",
          children: [
            {
              name: "Spring Boot页面",
              path: "/springBoot",
              icon: "el-icon-star-off",
              children: [],
              meta: {
                title: "Spring Boot页面",
              },
            },
            {
              name: "Spring页面",
              path: "Spring页面", // 有children，name和path就保持一致；没有的话，path的值就是路由表中用到的，不保持一致也行，因为不会用到
              icon: "el-icon-star-off",
              children: [
                {
                  name: "MySql页面",
                  path: "/mysql",
                  icon: "el-icon-star-off",
                  children: [],
                  meta: {
                    title: "MySql页面",
                  },
                },
                {
                  name: "Redis页面",
                  path: "/redis",
                  icon: "el-icon-star-off",
                  children: [],
                  meta: {
                    title: "Redis页面",
                  },
                },
              ],
              meta: {
                title: "Spring页面",
              },
            },
            {
              name: "Mybatis页面",
              path: "/mybatis",
              icon: "el-icon-star-off",
              children: [],
              meta: {
                title: "Mybatis页面",
              },
            },
          ],
          meta: {
            title: "后端框架",
          },
        },
        {
          name: "onlyOne",
          path: "/onlyOne",
          icon: "el-icon-star-off",
          children: [],
          meta: {
            title: "onlyOne",
          },
        },
      ],
      // data: routes[0].children,
    };
  },
  methods: {
    menuSelect(index) {
      console.log("🚀 ~ menuSelect ~ index:", index);
      this.activeIndex = index;
    },
  },
  created() {
    console.log("🚀 ~ data ~ data:", this.data);

    console.log("activeIndex", this.$route.path);
  },
};
</script>

<style scoped langd="scss">
.el-menu {
  box-sizing: border-box;
  border: 0;
  padding-top: 40px;
  padding-left: 20px;
  height: 100%;
}
::v-deep .el-container {
  height: 100vh;
}
</style>

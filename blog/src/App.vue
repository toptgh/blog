<template>
  <div id="app">
    <div class="sidebar">
      <!-- 公共组件 -->

      <!-- 头部 -->
      <Card></Card>

      <!-- 列表 -->
      <List></List>
    </div>
    <div class="main">
      <!-- 博客介绍 -->
      <Message v-if="currentId==1"></Message>
      <TextContent v-if="currentId==1"></TextContent>

      <!-- 我的博客 -->
      <BlogHeader v-if="currentId==2"></BlogHeader>
      <router-view v-if="currentId==2"></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Message from "./components/intro/Message";
import TextContent from "./components/intro/TextContent";
import BlogHeader from "./components/blog/BlogHeader";
import CanvasNest from "canvas-nest.js";
export default {
  name: "app",
  components: { BlogHeader, Message, TextContent },
  created() {
    //移除首屏加载动画
    let loader = document.querySelector(".loader");
    if (loader != null) {
      loader.parentNode.removeChild(loader);
    }

    // 初始化数据
    this.$store.dispatch("initData");

    //粒子动态背景
    this.$nextTick(() => {
      var bodyEle = document.querySelector("body");
      var result = window.matchMedia("(max-width: 500px)");
      const config = {
        // 配置
        // color: "255, 0, 0", // 线条颜色
        // pointColor: "0, 0, 0", // 节点颜色
        opacity: 0.3, // 线条透明度
        count: 50, // 线条数量
        zIndex: 5 // 画面层级
      };
      if (result.matches) {
        const cn = new CanvasNest(bodyEle, config);
        cn.destroy(); //取消动态背景
      } else {
        new CanvasNest(bodyEle, config);
      }
    });
  },

  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      // 当前会话index
      currentId: "currentId",
    })
  }
};
</script>

<style lang="less" scoped>
#app {
  width: 60%;
  height: 85%;
  overflow: hidden;
  border-radius: 3px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 15;
  box-shadow: 0 0 10px 6px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;

  .sidebar {
    width: 30%;
    color: #f4f4f4;
    background-color: #2e3238;
  }
  .main {
    width: 70%;
    position: relative;
    overflow: hidden;
    //  background-color: #eee;
    display: flex;
    flex-direction: column;
  }
  .text {
    width: 100%;
    height: 30%;
    background-color: #eee;
  }
  .message {
    width: 100%;
    height: 70%;
    // height: ~"calc(100% - 160px)";
  }
  
}
@media screen and (max-width: 800px) {
  #app {
    width: 100%;
    height: 100%;
  }
}
@media screen and (max-width: 500px) {
  #app {
    .main {
      width: 100%;
      .text {
        height: 20%;
      }
      .message {
        height: 80%;
      }
    }
    .sidebar {
      width: 30%;
      min-width: 60px;
    }
  }
}
</style>


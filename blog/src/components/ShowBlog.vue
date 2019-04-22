<template>
  <div id="Show-blog">
    <h1>博客总览</h1>
    <input type="text" placeholder="搜索" v-model="search">
    <div class="single-blog" v-for="(blog,i) in filteredBlogs" :key="i">
      <router-link :to="'/blog/'+blog.objectId">
        <h1>标题：{{blog.title}}</h1>
      </router-link>
      <h5>
        作者：{{blog.author}} 分类：
        <span v-for="(categor,j) in blog.categories" :key="j">{{categor}}</span>
        时间：{{blog.createdAt}}
      </h5>
      <h3>内容：{{blog.content}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Show-blog",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    // 查询全部数据
    const query = Bmob.Query("blog_data");
    query
      .find()
      .then(res => {
        console.log(res);
        this.blogs = res;
      })
      .catch(err => {
        console.log(err);
      });
  },

  computed: {
    //搜索功能
    filteredBlogs() {
      var blogs = this.blogs;
      return blogs.filter(item => {
        return item.title.match(this.search) || item.content.match(this.search);
      });
    }
  }
};
</script>

<style>
</style>

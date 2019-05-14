<template>
  <div id="Show-blog">
    <input class="blog_search" type="text" placeholder="搜索博客..." v-model="search">
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

<style lang="less" scoped>
#Show-blog {
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background: #f5f7fa;
  .blog_search {
    padding: 0 10px;
    width: 100%;
    font-size: 12px;
    color: #333;
    height: 30px;
    line-height: 30px;
    border: solid 1px #999;
    border-radius: 4px;
    outline: none;
    background-color: #fff;
    box-sizing: border-box;
  }
  .blog_search:focus{border: solid 1px #3a3a3a;}
  .single-blog{padding: 10px;box-sizing: border-box;margin: 20px 0; box-shadow: 0 2px 3px 1px #ccc;}
}
</style>


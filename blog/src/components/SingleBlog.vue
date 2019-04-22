<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <h5>
      作者：{{blog.author}}
      分类：
      <span v-for="(categor,j) in blog.categories" :key="j">{{categor}}</span>
      时间：{{blog.createdAt}}
    </h5>
    <article>{{blog.content}}</article>
    <button @click="deleteBlog()">删除</button>
    <router-link :to="'/edit/'+id">编辑</router-link>
  </div>
</template>

<script>
export default {
  name: "single-blog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    // 查询单条数据
    const query = Bmob.Query("blog_data");
    query
      .get(this.id)
      .then(res => {
        this.blog = res;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    // 删除单条数据
    deleteBlog() {
      const query = Bmob.Query("blog_data");
      query
        .destroy(this.id)
        .then(res => {
          console.log(res);
           this.$router.push({path:'/'})
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>

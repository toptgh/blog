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
    <button class="deletebtn" @click="deleteBlog()">删除</button>
    <router-link class="editbtn" :to="'/edit/'+id">编辑</router-link>
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

<style lang="less" scoped>
#single-blog {
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  .deletebtn,.editbtn{cursor: pointer; margin: 10px; padding:5px 10px;background: red;color: #fff;}
  .editbtn{background: #000;color: #fff;display:inline-block;}
}
</style>

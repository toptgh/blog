<template>
  <div id="add-blog">
    <h1>编辑博客</h1>
    <form action>
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required>

      <label>博客内容</label>
      <textarea v-model="blog.content"></textarea>

      <div id="checkboxs">
        <label>生活</label>
        <input type="checkbox" value="生活" v-model="blog.categories">
        <label>学习</label>
        <input type="checkbox" value="学习" v-model="blog.categories">
        <label>分享</label>
        <input type="checkbox" value="分享" v-model="blog.categories">
      </div>

      <label>作者</label>
      <select v-model="blog.author">
        <option v-for="(author,i) in authors" :key="i">{{author}}</option>
      </select>

      <button @click.prevent="post">编辑博客</button>
    </form>

    <h1 v-if="submit">添加博客成功</h1>

    <hr>

    <div id="preview">
      <h1>博客预览</h1>
      <h2>博客标题：{{blog.title}}</h2>
      <h2>博客内容：</h2>
      <article>{{blog.content}}</article>
      <h2>博客分类:</h2>
      <ul v-for="(categories,i) in blog.categories" :key="i">
        <li>{{categories}}</li>
      </ul>
      <h2>作者：{{blog.author}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "add-blog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
      authors: ["admin", "user"],
      submit: false
    };
  },
  methods: {
    fetchData() {
      // 查询当前数据
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

    // 修改当前数据
    post() {

      const query = Bmob.Query("blog_data");
      query
        .get(this.id)
        .then(res => {
          console.log(res);
          res.set("title", this.blog.title);
          res.set("content", this.blog.content);
          res.set("categories", this.blog.categories);
          res.set("author", this.blog.author);
          res.save();
          this.submit = true;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style lang="scss" scoped>
</style>
>
</style>

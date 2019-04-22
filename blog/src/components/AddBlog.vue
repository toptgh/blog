<template>
  <div id="add-blog">
    <h1>添加博客</h1>
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
        <option v-for="(author,i) in authors" :key="i" >{{author}}</option>
      </select>

      <button @click.prevent="post">添加博客</button>
    </form>

    <h1  v-if="submit">添加博客成功</h1>

    <hr>

    <div id="preview">
      <h1>博客预览</h1>
      <h2>博客标题：{{blog.title}}</h2>
      <h2>博客内容：</h2>
      <article>{{blog.content}}</article>
      <h2>博客分类:</h2>
      <ul v-for="(categor,i) in blog.categories" :key="i">
        <li>{{categor}}</li>
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
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["admin", "user"],
      submit: false
    };
  },
 
  methods: {
    post() {
     
      const query = Bmob.Query("blog_data"); //数据表名
      //新增数据
      query.set("title", this.blog.title);
      query.set("content", this.blog.content);
      query.set("categories", this.blog.categories);
      query.set("author", this.blog.author);
      query
        .save()
        .then(res => {
          console.log(res);
          this.blog.title = "";
          this.blog.content = "";
          this.blog.categories = [];
          this.submit = true;
        })
        .catch(err => {
          console.log(err);
          alert('添加失败！')
        });
    }
  }
};
</script>

<style  scoped>
</style>


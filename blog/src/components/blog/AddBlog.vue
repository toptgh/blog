<template>
  <div id="add-blog">
    <div id="preview">
      <h1>博客预览</h1>
      <h2>博客标题：{{blog.title}}</h2>
      <h2>
        <span>博客分类：</span>
        <ul class="categorlist" v-for="(categor,i) in blog.categories" :key="i">
          <li>{{categor}}</li>
        </ul>
      </h2>

      <h2>博客作者：{{blog.author}}</h2>
      <h2>博客内容：<article>{{blog.content}}</article></h2>
      
    </div>

    <form action>
      <label>博客标题：</label>
      <input class="title" type="text" v-model="blog.title" required>

      <label>博客内容：</label>
      <textarea v-model="blog.content"></textarea>

      <label>博客标签：</label>
      <div id="checkboxs">
        <label>生活</label>
        <input type="checkbox" value="生活" v-model="blog.categories">
        <label>学习</label>
        <input type="checkbox" value="学习" v-model="blog.categories">
        <label>分享</label>
        <input type="checkbox" value="分享" v-model="blog.categories">
      </div>

      <label>博客作者：</label>
      <select v-model="blog.author">
        <option v-for="(author,i) in authors" :key="i">{{author}}</option>
      </select>

      <button @click.prevent="post">添加博客</button>
    </form>

    <h1 v-if="submit">添加博客成功</h1>
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
          alert("添加失败！");
        });
    }
  }
};
</script>

<style lang="less">
#add-blog {
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  #preview {
    padding: 10px;
    background: #f5f7fa;
    box-shadow: 0 2px 3px 1px #ccc;
    h1 {
      font-size: 16px;
    }
    h2 {
      display: flex;
      li{margin-right:10px}
    }
  }

  form {
    display: flex;
    flex-direction: column;
    label {
      font-size: 16px;
      padding: 5px 0;
      margin-top: 15px;
    }
    .title {
      padding: 5px 10px;
      box-sizing: border-box;
    }
    textarea {
      resize: none;
      padding: 5px 10px;
      height: 80px;
      box-sizing: border-box;
    }
    #checkboxs {
      padding-top: 5px;
      input {
        margin: 10px;
      }
    }
  }
  button {
    color: #fff;
    background: #1695de;
    padding: 10px;
    cursor: pointer;
    margin-top: 40px;
    margin-bottom: 20px;
  }
}
</style>


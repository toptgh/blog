
<template>
  <div class="text">
    <textarea placeholder="点击这里按回车←┘发送" v-model="content" @keyup="onKeyup"></textarea>
  </div>
</template>

<script>
import { getRecommend } from "../../api/recommend.js";
import { mapGetters } from "vuex";
export default {
  name: "TextContent",
  data() {
    return {
      content: ""
    };
  },
  computed: {
    ...mapGetters({
      // 当前会话index
      session: "session"
    })
  },
  methods: {
    // 发送消息
    onKeyup(e) {
      if ((e.ctrlKey || e.keyCode === 13) && this.content.length) {
        if (this.session.user.imgUser == "") {
          var qqNum = prompt("请输入QQ号码：");
          if (qqNum != "") {
            getRecommend(qqNum).then(res => {
              for (var i in res) {
                this.session.user.imgUser = res[i][0];
                alert("欢迎 " + res[i][6] + " 阁下");
                this.$store.dispatch("sendMessage", this.content);
                this.content = "";
              }
            });
          }
        } else {
          this.$store.dispatch("sendMessage", this.content);
          this.content = "";
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.text {
  border-top: solid 1px #ddd;
  width: 100%;
  box-sizing: border-box;
  textarea {
    background: inherit;
    padding: 10px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: none;
    outline: none;
    font-family: "Micrsofot Yahei";
    resize: none;
  }
}
</style>
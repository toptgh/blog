<template>
  <div class="msg">
    <ul v-if="session" class="mes">
      <li v-for="(item,i) in session.messages" :key="i">
        <p class="time">
          <span>{{ item.date | time }}</span>
        </p>
        <div class="main" :class="{ self: item.self }">
          <img
            class="avatar"
            width="30"
            height="30"
            :src="item.self ? session.user.imgUser : user.img"
          >
          <div class="text">{{ item.content }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      // 过滤后的会话列表
      user: "user",
      // 当前会话index
      session: "session"
    })
  },
  filters: {
    // 将日期过滤为 hour:minutes
    time(date) {
      if (typeof date === "string") {
        date = new Date(date);
      }
      return date.getHours() + ":" + date.getMinutes();
    }
  },

  // 滚动条到底部
  mounted() {
    this.scrollToBottom();
  },
  updated: function() {
    this.scrollToBottom();
  },
  methods: {
    scrollToBottom() {
      this.$nextTick(() => {
        var container = this.$el.querySelector(".mes>li:last-child");
        if (container != null) {
          container.scrollIntoView();
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
li {
  margin-bottom: 15px;
}
.time {
  margin: 7px 0;
  text-align: center;

  > span {
    display: inline-block;
    padding: 0 18px;
    font-size: 12px;
    color: #fff;
    border-radius: 2px;
    background-color: #dcdcdc;
    box-sizing: border-box;
  }
}
.avatar {
  float: left;
  margin: 0 10px 0 0;
  border-radius: 3px;
}
.text {
  display: inline-block;
  position: relative;
  padding: 0 10px;
  max-width: ~"calc(100% - 40px)";
  min-height: 30px;
  line-height: 2.5;
  font-size: 12px;
  text-align: left;
  word-break: break-all;
  background-color: #fafafa;
  border-radius: 4px;
  box-sizing: border-box;

  &:before {
    content: " ";
    position: absolute;
    top: 9px;
    right: 100%;
    border: 6px solid transparent;
    border-right-color: #fafafa;
  }
}

.self {
  text-align: right;

  .avatar {
    float: right;
    margin: 0 0 0 10px;
  }
  .text {
    background-color: #b2e281;

    &:before {
      right: inherit;
      left: 100%;
      border-right-color: transparent;
      border-left-color: #b2e281;
    }
  }
}

@media screen and (max-width: 500px) {
  li {
    margin-bottom: 20px;
  }
  .time {
    margin: 10px 0;
  }
}
</style>

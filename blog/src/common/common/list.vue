

<template>
  <div class="list">
    <ul>
      <li
        v-for="(item,i) in sessions"
        :key="i"
        :class="{ active: item.id === currentId }"
        @click="selectSession(item.id)"
      >
        <img src="http://bmob-cdn-25176.b0.upaiyun.com/2019/05/03/e043331740fec23e8003eaf37fa50076.png" alt="">
        <p class="name">{{item.user.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Debounce } from "../../tools";
export default {
  name: "List",
  computed: {
    ...mapGetters({
      // 过滤后的会话列表
      sessions: "sessions",
      // 当前会话index
      currentId: "currentId",
    })
  },
  data() {
    return {
    };
  },
  methods: {
    // 点击列表防抖
    selectSession: Debounce(function(id) {
      this.$store.dispatch("selectSession", id);
    }, 200)
  }
};
</script>

<style scoped lang="less">
.list {
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    li {
      display: flex;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
      padding: 12px 15px;
      border-bottom: 1px solid #292c33;
      cursor: pointer;
      transition: background-color 0.1s;
      img {
        display: block;
        width: 35px;
        height: 35px;
        margin-right: 15px;
      }
      &:hover {
        background-color: rgba(255, 255, 255, 0.03);
      }
      &.active {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .list {
    ul {
      li {
        text-align: center;
        padding: 8px 10px;
        flex-wrap: wrap;
        justify-content: center;
        img {
          margin-right: 0;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>

<template>
  <div class="card">
    <header>
      <img  class="avatar" width="40" height="40" :alt="user.name" :src="user.img">
      <p class="name">{{user.name}}</p>
    </header>
    <footer>
      <input class="search" type="text" placeholder="search..." @keyup="onKeyup">
    </footer>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import { Debounce, Throttle } from "../../tools";
export default {
  name: "Card",
  computed: {
    ...mapGetters({
      user: "user",
      filterKey: "filterKey",
    })
  },
  // 搜索框节流
  methods: {
    onKeyup: Throttle(function(e) {
      this.$store.dispatch("search", e.target.value);
    }, 300),
   
  }
};
</script>

<style scoped lang="less">
.card {
  padding: 12px;
  border-bottom: solid 1px #24272c;

  footer {
    margin-top: 10px;
  }

  .avatar,
  .name {
    vertical-align: middle;
  }

  header {
    display: flex;
    align-items: center;
  }

  .avatar {
    border-radius: 2px;
  }
  .name {
    display: inline-block;
    margin: 0 0 0 15px;
    font-size: 16px;
  }

  .search {
    padding: 0 10px;
    width: 100%;
    font-size: 12px;
    color: #fff;
    height: 30px;
    line-height: 30px;
    border: solid 1px #3a3a3a;
    border-radius: 4px;
    outline: none;
    background-color: #26292e;
    box-sizing: border-box;
  }
}
@media screen and (max-width: 500px) {
  .card {
    padding: 12px 5px;
    header {
      flex-wrap: wrap;
      justify-content: center;
      .name {
        margin: 0;
        text-align: center;
        padding-top: 10px;
      }
    }

    .search {
      padding: 0 5px;
    }
  }
}
</style>
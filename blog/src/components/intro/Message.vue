
<template>
  <div class="message">
    <MsgShow></MsgShow>
  </div>
</template>

<script>
import MsgShow from "../../components/intro/MsgShow";
export default {
  name: "Message",
  components: {
    MsgShow
  }
};
</script>

<style lang="less" scoped>
.message {
  padding: 10px 15px;
  overflow-y: scroll;
  box-sizing: border-box;
}
@media screen and (max-width: 500px) {
  .message {
    padding: 10px;
  }
}
</style>
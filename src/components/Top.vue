<template>
  <div class="top">
    <ul>
      <li>除外ワード</li>
      <li>ツイート</li>
      <li>ピックアップユーザー</li>
      <li>収集ワード</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Twitter管理画面',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
}
li {
  width: 45%;
  height: 200px;
  border: 1px solid black;
  float: left;
}

li:nth-child(2n) {
  float: right;
}


</style>

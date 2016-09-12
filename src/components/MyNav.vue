<template>
  <h1>トップ</h1>
  <ul>
    <li>ツイート</li>
    <li>除外ワード</li>
    <li>除外ユーザ</li>
    <li>ピックアップユーザー</li>
    <li>収集ワード</li>
  </ul>
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
h1 {
  font-size: 1rem;
}
</style>

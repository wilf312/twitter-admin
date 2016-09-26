<template>
  <h1><a v-link="{ name: 'home' }">ホーム</a></h1>
  <ul>
    <li><a v-link="{ name: 'tweetList' }">ツイート</a></li>
    <li><a v-link="{ path: '/filterWord' }">除外ワード</a></li>
    <li><a v-link="{ name: 'filterUser' }">除外ユーザ</a></li>
    <li><a v-link="{ path: '/foo' }">ピックアップユーザー</a></li>
    <li><a v-link="{ path: '/foo' }">収集ワード</a></li>
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

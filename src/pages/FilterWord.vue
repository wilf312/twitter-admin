<template>
  <div id="app">
    <my-header></my-header>
    <!-- <top></top> -->

    <div class="nav">
      <my-nav></my-nav>
    </div>
    <div class="content">
      <filter-word></filter-word>
    </div>
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader';
import MyNav from '../components/MyNav';
import FilterWord from '../components/FilterWord';

export default {
  components: {
    MyHeader,
    FilterWord,
    MyNav,
  },
  data() {
    return {
      test: 'test',
    };
  },
  methods() {
  },
};

</script>

<style>

#app {
  color: #2c3e50;
  font-family: "YakuHanJP", 'Noto Sans', "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", "Meiryo UI", Meiryo, メイリオ, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", arial, sans-serif;

  text-align: center;
  width: 800px;
  margin: 0 auto;
}

#app a {
  color: #42b983;
  text-decoration: none;
}
.nav {
  float: left;
  width: 30%;
  text-align: left;
}

#app .content {
  width: 60%;
  float: right;
}

</style>

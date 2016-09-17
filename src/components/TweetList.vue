<template>
  <p class="checkbox">
    <label>RTの除外 <input type="checkbox" v-model="isRT"></label>
    <label>画像+ツイートのみ<input type="checkbox" v-model="isMedia"></label>
    <label>画像のみ<input type="checkbox" v-model="isMediaOnly"></label>
  </p>
  <p>
    <input v-model="searchWord" debounce="500">
    <button @click="search">検索！</button>
  </p>

  <tweet-list-view
    v-for="data in list"
    :tweet="data"
    :is-media-only="isMediaOnly"
    v-if="((!isRT || !data.isRT) && ((isMedia && data.media != '') || !isMedia) )"></tweet-list-view>
</template>












<script>
import TweetListView from './TweetListView';

const axios = require('axios');
const _ = require('lodash');

export default {
  components: {
    TweetListView,
  },
  data() {
    return {
      list: [],
      isMedia: true,
      isMediaOnly: false,
      isRT: true,
      searchWord: '天クラ',
    };
  },
  created() {
    this.search();
  },
  methods: {
    search() {
      /*  eslint-disable no-console  */
      console.log('123');
      this.fetchSearchWord(this.searchWord);
    },
    fetchSearchWord(_searchWord) {
      // const Vue = require('vue');

      let URL = `http://107.191.53.189/twitter-search/search.php?q=${_searchWord}`;
      console.log(this.isMediaOnly);
      if (this.isMediaOnly) {
        URL += '&distinct=on';
      }
      /*  eslint-disable no-console  */
      const self = this;

      self.list = [];

      axios.get(URL, {
      })
        .then((res) => {
          /*  eslint no-param-reassign: ["error", { "props": false }]  */
          self.list = _.map(res.data, (_data) => {
            _data.isRT = (_data.text.substr(0, 2) === 'RT');
            return _data;
          });
          // console.log(self.list);
        })
        .catch((error) => {
          // console.log(error)
          if (error) {
            // location.reload()
          }
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tweetList {
  text-align: left;
  margin-bottom: 10px;
}

.userProfile {
  display: none;
}

.media img {
  width:100%;
  height: auto;
}

.checkbox label {
  display: inline-block;
  padding: 3px;
  background-color: #f7ede8;
  -webkit-border-radius: 5px;
          border-radius: 5px;
}
</style>

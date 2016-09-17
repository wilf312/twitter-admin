<template>
  <filter-user-view
    v-for="data in list"
    :user="data"
    :status="data.status"
    ></filter-user-view>
</template>


<script>
import FilterUserView from './FilterUserView';

const axios = require('axios');
const _ = require('lodash');

export default {
  components: {
    FilterUserView,
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    /*  eslint-disable no-console  */
    console.log('created');
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      const URL = 'http://107.191.53.189/twitter-search/filterUser.php';
      /*  eslint-disable no-console  */
      const self = this;

      self.list = [];

      console.log('fetchUser');

      axios.get(URL, {
      })
        .then((res) => {
          /*  eslint no-param-reassign: ["error", { "props": false }]  */
          self.list = _.map(res.data, (_data) => {
            _data.isRT = (_data.text === 'RT');
            return _data;
          });
          console.log(self.list);
          console.log('fgaojoaj');
        })
        .catch((error) => {
          console.log(error);
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
</style>

<template>
  <div class="tweetListView">

    <div v-if="!isMediaOnly">
      <p class="name"><a :href="'https://twitter.com/'+ tweet.screen_name" target="_blank"><img :src="tweet.profile_image_url">{{tweet.name}} {{tweet.screen_name}}</a></p>
      <p class="text">{{tweet.text}}</p>
      <p class="date"><a target="_blank" :href="'https://twitter.com/'+ tweet.screen_name+ '/status/'+ tweet.id">{{tweet.created_at}} </a></p>
      <p class="count">RT:{{tweet.retweet_count}} / ☆{{tweet.favorite_count}}</p>
    </div>

    <p class="media"><img v-if="tweet.media" :src="tweet.media"></p>

    <div v-if="!isMediaOnly">
      <div class="userProfile">
        <p class="followers_count">{{tweet.followers_count}}</p>
        <p class="friends_count">{{tweet.friends_count}}</p>
      </div>
    </div>

    <p>
      <span></span>
      <button @click="addFilterUser()">除外ユーザーに登録</button>
    </p>

  </div>
</template>

<script>

const axios = require('axios');

export default {
  props: [
    'tweet',
    'isMediaOnly',
  ],
  data() {
    return {
    };
  },
  created() {
    /*  eslint-disable no-console  */
    // console.log(`__${this.tweet.media}__`);
    console.log(this.isMediaOnly);
  },
  methods: {
    addFilterUser() {
      console.log('addFilterUser');

      const URL = `http://107.191.53.189/twitter-search/addFilterUser.php?id=${this.tweet.user_id}`;
      axios.get(URL, {
      })
        .then((res) => {
          console.log(res);
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
.tweetListView {
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
</style>

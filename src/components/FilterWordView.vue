<template>
  <div class="filterUserView">
    <p class="name"><a :href="'https://twitter.com/'+ user.screen_name" target="_blank"><img :src="user.profile_image_url">{{user.name}} {{user.screen_name}}</a></p>

    <div class="userProfile">
      <p class="followers_count">フォロワー {{user.followers_count}}</p>
      <p class="friends_count">フォロー {{user.friends_count}}</p>
    </div>
    <div class="buttons">
      <span class="filterState" :class="{'filterState--isDisabled': status === 0}">除外ユーザ</span>
      <button @click="toggleState()">{{buttonText}}</button>
    </div>
  </div>
</template>

<script>

const axios = require('axios');
export default {
  props: [
    'user',
    'status',
  ],
  data() {
    return {
      isSaving: false,
      buttonText: '',
      USER_STATE_TEXT: '除外ユーザにする',
      USER_STATE_TEXT_RESTORE: '除外ユーザを外す',
    };
  },
  created() {
    /*  eslint-disable no-console  */
    // console.log(`__${this.tweet.media}__`);
    console.log('this.user', this.user);
    console.log('this.status', this.status);
    this.updateState();
  },
  methods: {
    toggleState() {
      if (this.isSaving) {
        return;
      }
      this.isSaving = true;

      const self = this;

      const updateStatus = (this.status === 0 ? 1 : 0);

      const URL = `http://107.191.53.189/twitter-search/updateFilterUser.php?id=${self.user.id}&status=${updateStatus}`;


      // 通信処理
      axios.get(URL, {
      })
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            self.status = updateStatus;
            self.updateState();
          }
          else {
            console.log('サーバーエラー');
          }
          self.isSaving = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateState() {
      console.log('updateState');
      if (this.status === 0) {
        this.buttonText = this.USER_STATE_TEXT;
      }
      else {
        this.buttonText = this.USER_STATE_TEXT_RESTORE;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.filterUserView {
  text-align: left;
  margin-bottom: 10px;
}
.filterState {
  color: red;
}
.filterState--isDisabled {
  color: gray;
}

</style>

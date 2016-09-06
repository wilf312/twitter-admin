<template>
  <div id="app">
    <hello></hello>


  </div>
</template>

<script>
import Hello from './components/Hello';

export default {
  components: {
    Hello,
  },
};

// const Vue = require('vue');
const axios = require('axios');
const URL = 'http://107.191.53.189/twitter-search/search.php?q=%E5%A4%A9%E3%82%AF%E3%83%A9';
/*  eslint-disable no-console  */

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

</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>

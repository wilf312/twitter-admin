import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// ページファイルの読み込み
import pHome from './pages/home';
import pTweetList from './pages/tweetList';
import pFilterUser from './pages/filterUser';
const Foo = { template: '<div>Foo</div>' };
const Bar = { template: '<div>Bar</div>' };
const App = {};

const router = new VueRouter({
  hashbang: false,
  saveScrollPosition: true,
});

router.map({
  '/': {
    component: pHome,
  },
  '/tweetList': {
    component: pTweetList,
  },
  '/filterUser': {
    component: pFilterUser,
  },
  '/foo': {
    component: Foo,
  },
  '/bar': {
    component: Bar,
  },
});

/* eslint-disable no-console */
/* eslint-disable no-new */
router.start(App, '#app');

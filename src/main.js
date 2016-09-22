import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// ページファイルの読み込み
import Home from './pages/Home';
import TweetList from './pages/TweetList';
import FilterUser from './pages/FilterUser';
const Foo = { template: '<div>Foo</div>' };
const Bar = { template: '<div>Bar</div>' };
const App = {};

const router = new VueRouter({
  hashbang: false,
  history: true,
  saveScrollPosition: true,
});

router.map({
  '/': {
    component: Home,
  },
  '/tweetList': {
    component: TweetList,
  },
  '/filterUser': {
    component: FilterUser,
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

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

// routerオブジェクトの生成
// オプション説明は https://github.com/vuejs/vue-router/tree/1.0/docs/ja
const router = new VueRouter({
  hashbang: false,
  history: true,
  saveScrollPosition: true,
});


const TITLE = 'Twitter管理画面';

router.map({
  '/': {
    name: 'home',
    title: TITLE,
    component: Home,
  },
  '/tweetList/:searchWord': {
    name: 'tweetList',
    title: `ツイートリスト | ${TITLE}`,
    component: TweetList,
  },
  '/filterUser': {
    name: 'filterUser',
    title: `除外ユーザ | ${TITLE}`,
    component: FilterUser,
  },
  '/foo': {
    title: `foo | ${TITLE}`,
    component: Foo,
  },
  '/bar': {
    title: `bar | ${TITLE}`,
    component: Bar,
  },
});

// ページタイトルの変更
router.beforeEach((transition) => {
  /*  eslint-disable no-console  */
  console.log('beforeEach');
  console.log(transition.to.title);
  document.title = transition.to.title;
  transition.next();
});


/* eslint-disable no-console */
/* eslint-disable no-new */
router.start(App, '#app');

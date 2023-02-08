import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import HeaderSpotify from './components/HeaderSpotify.vue';
import CardsSection from './components/CardsSection';
import FooterSection from './components/FooterSection';
import "./styles/base.scss";
import "./styles/vars.scss";
import "./styles/typography.scss";
import "./styles/helper-classes.scss";

Vue.config.productionTip = false

Vue.component('header-spotify', HeaderSpotify);
Vue.component('cards-section', CardsSection);
Vue.component('footer-section', FooterSection);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './assets/css/main.css'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)



const animatedScrollObserver = new IntersectionObserver(
  (entries, animatedScrollObserver) => {
      entries.forEach((entry) => {
          if(entry.isIntersecting) {
              entry.target.classList.add('enter');
              animatedScrollObserver.unobserve(entry.target);
          }
      });
  }
)
Vue.directive('scroll', {
  bind: function (el){
      el.classList.add('before-enter');
      animatedScrollObserver.observe(el);
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

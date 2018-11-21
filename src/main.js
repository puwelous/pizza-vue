import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Recipes from './components/Recipes.vue'
import Ingredients from './components/Ingredients.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/recipes', component: Recipes },
    { path: '/ingredients', component: Ingredients },
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

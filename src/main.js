import Vue from 'vue'
import App from './App.vue'

//linea para poder usar los recursos (traer datos de una db)
import VueResource from 'vue-resource'
Vue.use(VueResource); //para poder usar lo de traer datos externos

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import test from './components/test';
import user from './components/user';

const router = new VueRouter({
  mode: 'history', //que en la url pongamos /user o /test y que nos mande a esa app
  base: __dirname, //constante de nodejs, le dice que todos los componentes estan aqui
  routes: [
    {
      path: '/', //cuando la app inicie mostrara: user
      component: user
    },
    {
      path: '/test',
      component: test
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
  //el: '#app', //quitamos este porque usaremos otro (se agrega abajo)
  router, //usamos el enrrutador
  components: { App },
  template: '<App/>'
}).$mount('#app')

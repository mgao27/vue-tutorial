import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App) //render 'App.vue' into 'index.html' inside #app
})  //App.vue is always rendered to browser b/c it is base component

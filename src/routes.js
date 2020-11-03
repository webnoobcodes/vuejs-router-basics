/*
  import vue and the vue-router package 
  and the components you wanna use for your routes configuration.
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home'
import About from './views/About'
import Portfolio from './views/Portfolio'

/*
  Use plugins by calling the Vue.use() global method. 
  This has to be done before you start your app by calling new Vue()
*/
Vue.use(VueRouter)

/*
  Create and export a new instance of the Vue Router. 
*/
export const router = new VueRouter({
  /*
    The default mode for vue-router is the hash mode. 
    It uses the URL hash to simulate a full URL 
    so that the page won't be reloaded when the URL changes.
    To get rid of the hash, we can use the router's history mode.
  */
  mode: 'history',
  
  /*
    Each route should map to a component.
  */
  routes: [
    { path: '', component: Home },
    { path: '/about', component: About },
    { path: '/portfolio', component: Portfolio }
  ]
})
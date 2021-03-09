import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Index from "@/components/Index";
import BlogIndex from "@/components/AppMain/BlogIndex";
import AppMain from "@/components/AppMain";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
        {
          path: 'blog',
          component: BlogIndex,
          name: 'blog_index',
        }
      ]
    }
  ]
})

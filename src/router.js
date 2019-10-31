import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import First_stage from "./components/First_stage/First_stage.vue"
import XiangQ from "./components/First_stage/XiangQ.vue"
import View from "./try/View.vue"

import Vuex from "./components/First_stage/commom/Vuex.vue"


Vue.use(Router)
export default new Router({
  routes: [
    {path:'/',component:HelloContainer},
    {path:'/First_stage',component:First_stage},
    {path:'/XiangQ',component:XiangQ},
    {path:'/Vuex',component:Vuex},
    {path:'/View',component:View},
  ]
})

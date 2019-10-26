import Vue from 'vue'
import App from './App.vue'
import router from './router'

//删除 line 5~ line16~
//1.引入第三方组件库 mint-ui
  //1.1完成引入所有组件
  import MintUi from "mint-ui"
  //1.2单引入mint-ui 样式文件
  import "mint-ui/lib/style.css"
  //1.3将 mint-ui注册vue
  Vue.use(MintUi)
  //1.4引入图标字体文件
  import "./font/iconfont.css"
  //main.js 配置axios
  //1.5引入axios 库
  import axios from "axios"
  //1.6配置请求时保存session信息
  axios.defaults.withCredentials=true
  //1.7 配置请求基础路径
  axios.defaults.baseURL="http://127.0.0.1:4000/" 
  //  地址栏 必须输入http://127.0.0.1:4000/！
  //1.8 注册
  Vue.prototype.axios=axios;

  //2.1引入vuex第三方木块
  import Vuex from "vuex"
  //2.2注册vuex
  Vue.use(Vuex)
  //2.3创建存储对象
  var store=new Vuex.Store({
    state:{
      //共享：数据
      fa:12  //共享：亮哥发亮
    },
    mutations:{
      subItem(state){
        state.fa--;   //一次减一根
      },
      clear(state){
        state.fa = 0;//清空
      }
    },
    getters:{
      getFa(state){
        return state.fa;  //获取共享数据
      }
    }  
  })
  //2.4将存储对象添加vue对象
new Vue({
  router,
  render: h => h(App),
  //2.4将存储对象添加vue对象
  store
}).$mount('#app')

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vueresource from 'vue-resource';


import axios from "axios";
Vue.prototype.axios = axios;
//注册vue-resource
Vue.use(Vueresource)
Vue.http.options.emulateJSON = true
Vue.http.options.root = "http://129.28.86.26:8899"

//引入mintui并注册组件
import Mint from 'mint-ui'
Vue.use(Mint)
//引入mintui的样式
import 'mint-ui/lib/style.css'

//引入MUI的样式

import 'MUI/css/mui.css'
import 'MUI/css/icons-extra.css'

//日期格式化插件
import moment from 'moment'

//引入缩略图插件
import  vuepreview from 'vue-preview'
Vue.use(vuepreview)

/*import 'lib-flexible'*/

//定义一个全局时间过滤器
Vue.filter('dataFormatter',function(msg){
  return moment(msg).format('YYYY-MM-DD HH:mm:ss')
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

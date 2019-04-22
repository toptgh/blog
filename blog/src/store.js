import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//设置的全局访问的state对象
const state = {
    isShow: true,
};

//实时监听state值的变化(最新状态)
const getters = {
    //方法
    show(state) {
        return state.isShow
    }
};

//修改state的初始值(mutations是同步的)
const mutations = {
    hide(state) {
        state.isShow = false;
    }
};

//触发mutations里函数，context与store 实例具有相同方法和属性(包含异步操作)
const actions = {
    hideAction(context) {
        context.commit('hide');
    }
};


// 外部组件使用方法

//监听值改变时
// computed:{
//     isShow(){
//       return this.$store.getters.show;
//     }
//  }

//修改值时
// watch:{
//     $route(to,from){ //跳转组件页面后，监听路由参数中对应的当前页面以及上一个页面
//         console.log(to)
//       if(to.name=='my'){ // to.name来获取当前所显示的页面
//          this.$store.dispatch('hideAction')
//       }
//     }
// }

const store = new Vuex.Store({ state, getters, mutations, actions });

export default store;
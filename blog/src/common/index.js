//引进所有的公共组件设为全局组件（封装插件）
import card from './common/card.vue';
import list from './common/list.vue';

//输出公共组件（原理：这里向外输出一个对象,main.js引入并use调用了install方法）
export default {
    //install方法可拓展组件
    install(Vue) {
        //参数一：组件的名字，是变量，在组件内部已经设置name，使用组件直接把变量name的值写作标签
        //参数二：组件的内容，是引进的组件
        Vue.component(card.name, card);
        Vue.component(list.name, list);
    }
}
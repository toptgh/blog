import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const now = new Date();
const store = new Vuex.Store({
    //设置的全局访问的state对象
    state: {
        // 博主信息
        user: {
            name: 'Tang GH',
            // 我的头像
            img: 'http://bmob-cdn-25176.b0.upaiyun.com/2019/05/03/8ccbb0fd401cc79d80320e7dc26a37e5.jpg',
        },

        // 导航信息
        sessions: [
            {
                id: 1,
                user: {
                    name: '博客介绍',
                    //用户头像
                    imgUser: '',
                },
                messages: [
                    {
                        content: 'Hello world',
                        date: now
                    },
                    {
                        content: 'hello gays',
                        date: now
                    }
                ]
            },
            {
                id: 2,
                user: {
                    name: '我的博客',
                },
            },

        ],
        // 当前选中的会话
        currentSessionId: 1,
        // 过滤出只包含这个key的会话
        filterKey: '',

    },

    //实时监听state值的变化(最新状态)
    getters: {
        // 用户
        user: ({ user }) => user,

        // 搜索的关键词
        filterKey: ({ filterKey }) => filterKey,
        // 过滤后的列表
        sessions: ({ sessions, filterKey }) => {
            let result = sessions.filter(session => session.user.name.includes(filterKey));
            return result;
        },
        // 当前列表
        currentId: ({ currentSessionId }) => currentSessionId,
        session: ({ sessions, currentSessionId }) => sessions.find(session => session.id === currentSessionId),

    },


    //修改state的初始值(mutations是同步的)
    mutations: {
        // 初始化
        init_data(state) {
            let data = localStorage.getItem('blog-session');
            if (data) {
                state.sessions = JSON.parse(data);
            }
        },
        // 发送消息
        send_message({ sessions, currentSessionId }, content) {
            let session = sessions.find(item => item.id === currentSessionId);
            session.messages.push({
                content: content,
                date: new Date(),
                self: true
            });
        },
        // 选择会话
        select_session(state, id) {
            state.currentSessionId = id;
        },
        // 搜索
        set_filter_key(state, value) {
            state.filterKey = value;
        }
    },

    //触发mutations里函数，context与store 实例具有相同方法和属性(包含异步操作)
    actions: {
        initData(context) {
            context.commit('init_data');
        },
        sendMessage(context, content) {
            context.commit('send_message', content)
        },
        selectSession(context, id) {
            context.commit('select_session', id)
        },
        search(context, value) {
            context.commit('set_filter_key', value)
        },
    }
});

// 响应式的监测一个 getter 方法的返回值，当值改变时调用回调
store.watch(
    (state) => state.sessions,
    (val) => {
        localStorage.setItem('blog-session', JSON.stringify(val));
    },
    {
        deep: true
    }
);

export default store;





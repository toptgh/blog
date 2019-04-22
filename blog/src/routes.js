// 路由配置
import ShowBlog from './components/ShowBlog.vue'   //博客展示页面
import AddBlog from './components/AddBlog.vue'  //添加博客页面
import SingleBlog from './components/SingleBlog.vue'    //博客内容页面
import EditBlog from './components/EditBlog.vue'    //编辑博客页面
export default[
    {path:'/',component:ShowBlog},
    {path:'/add',component:AddBlog},
    {path:'/blog/:id',component:SingleBlog},
    {path:'/edit/:id',component:EditBlog}
]
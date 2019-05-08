// 路由配置
import ShowBlog from './components/blog/ShowBlog.vue'   //博客展示页面
import AddBlog from './components/blog/AddBlog.vue'  //添加博客页面
import SingleBlog from './components/blog/SingleBlog.vue'    //博客内容页面
import EditBlog from './components/blog/EditBlog.vue'    //编辑博客页面
export default[
    {path:'/',component:ShowBlog},
    {path:'/add',component:AddBlog},
    {path:'/blog/:id',component:SingleBlog},
    {path:'/edit/:id',component:EditBlog}
]
const express=require('express')

//引入页面返回控制器
const PagesController=require('./controllers/pagesController')
const userController=require('./controllers/userController')
var router=express.Router()
  

//5.可以router.get  一直都要router点的话太麻烦.可以链式编程去掉后面的router,如下

//配置路由
//4.添加路由配置
//下列代码可以简化为如下
// router.get('/',(req,res)=>{
//     // fs.readFile('./views/index.ejs',(err,data)=>{
//     //     if(err){
//     //         res.end('404')
//     //     }else{
//     //         res.end(data)
//     //     }
//     // })
//     //render函数一共完成了三个事件
//     //1.读取文件
//     //2.实现渲染.只是现在还没有数据参与
//     //3.返回渲染的结构

   
//     // res.render('index.ejs')//调用controller的文件处理,变成
//     PagesController.getIndexPage(req, res)


// })
//前台页面
router.get('/', PagesController.getIndexPage)

//4.添加路由器
//下列代码可以简化为如下
// router.get('/admin',(req,res)=>{
//     // fs.readFile('./views/admin/index.ejs',(err,data)=>{
//     //     if(err){
//     //         res.end('404')
//     //     }else{
//     //         res.end(data)
//     //     }
//     // })


//     // res.render('admin/index.ejs')
//     PagesController.getAdminIndexPage(req, res)

// })
//后台页面
     .get('/admin',PagesController.getAdminIndexPage)
//4.添加路由器
//下列代码可以简化为如下
// router.get('/admin/categories',(req,res)=>{
//     // res.render('admin/categories.ejs')
//     PagesController.getAdminCategoriesPage(req, res)
// })
//后台页面
      .get('/admin/categories', PagesController.getAdminCategoriesPage)
      .get('/admin/login', PagesController.getAdminLoginPage)

//业务处理路由,要先获取登录页面能获取登录键.如上一行就是获取登录页面
//真正的登录请求
      .post('/login',userController.login)



//暴露
module.exports=router
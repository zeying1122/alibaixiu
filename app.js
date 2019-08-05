const express=require('express')
// const fs=require('fs')
const router=require('./router.js')
//创建服务器\
const app=express()
//添加端口监听
app.listen(3000,()=>{
    console.log('http://127.0.0.1:3000')
})
// 6.配置ejs模板引擎
app.set('view engine','ejs')
//下面这句代码是进行ejs模板文件查询的默认目录配置,下面这句代码写完之后,以后所有的ejs资源都会云指定的__dirname+"/views"
app.set('views',__dirname+"/views")
//5.托管静态资源
app.use('/assets',express.static('assets'))
app.use('/uploads',express.static('uploads'))
// //4.添加路由器 
// app.get('/',(req,res)=>{
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
//     res.render('index.ejs')
// })
// //4.添加路由器
// app.get('/admin',(req,res)=>{
//     // fs.readFile('./views/admin/index.ejs',(err,data)=>{
//     //     if(err){
//     //         res.end('404')
//     //     }else{
//     //         res.end(data)
//     //     }
//     // })
//     res.render('admin/index.ejs')
// })
// //4.添加路由器
// app.get('/admin/categories',(req,res)=>{
//     res.render('admin/categories.ejs')
// })



//让app使用Router进行路由管理
app.use(router)
//这个控制器王城所有与用户相关的业务操作
const userModel=require('../models/userModel')
exports.login=(req,res)=>{
    //接受参数
    //业务处理--调用数据模块
    userModel.login(参数,回调函数)
    //返回结果
}

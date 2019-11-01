
//1，下载3个模块
//    cors 完成跨域处理
//  express-session  session 对象
//  mysql 数据库驱动
//  express  web服务器
//下载命令在线
// npm i cors express-session express mysql
//2，将以上四个模块引入到当前程序
const express=require("express");
const mysql=require("mysql");
const cors=require("cors");
const session=require("express-session");
//3，创建数据库连接池
var pool=mysql.createPool({
    host:"127.0.0.1",//数据库地址
    user:"root",//数据库用户名
    password:"",//数据库密码
    port:3306,//数据库端口
    database:"yiyi",//库名
    connectionLimit:15 //15连接
})
//4，配置跨域模块
//    允许哪个程序跨域访问服务器
//    脚手架:302
//    服务器：4000
var server=express();
server.use(cors({  //允许程序列表
    origin:["http://127.0.0.1:3002","http://localhost:3002"],
    credentials:true //每次请求需要验证
}))
//5，配置session模块
server.use(session({
    secret:"128位字符串",// 安全字符串
    resave:true,  //请求时更新数据
    saveUninitialized:true //保存初始数据
}))
//6，配置项目静态目录  public
server.use(express.static("public"))
//7，创建express 对象绑定4000端口
server.listen(4000);
//8，功能一：完成用户登录
server.get("/login",(req,res)=>{
//1.获取脚手架参数 uname upwd
var uname=req.query.uname;
var upwd=req.query.upwd;
//2.创建sql语句
var sql="SELECT id FROM yiyi_login WHERE uname = ? AND upwd =md5(?)";
//3.执行sql语句
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err)throw err;
        //4.获取执行结果
        //5.判断查询是否成功  result.length
        if(result.length==0){
            res.send({
                code:-1,msg:"失败"
        })}else{
            //5.1保存用户id在session对象中
            //result[{id:1}]
            req.session.uid = result[0].id;
            res.send({
                code:1,msg:"成功"
            })
        }
        //6.将结果返回手脚架
    })
})

//#检测
//(1)查询数据库是否有xz_login
//   USE xz;
//   SELECT * FROM xz_login;
//(2)启动服务器
//   node app.js
//(3)打开浏览器在地址栏输入按回
//   http://127.0.0.1:4000/login?uname=tom&upwd=123
//   http://127.0.0.1:4000/login?uname=tom&upwd=122  
    //查看页面状态

    //功能二:分页显示商品列表
//1:接收GET /product 
server.get("/First_stage",(req,res)=>{
    //2:接收二个参数 
    //  pno 页码 pagePageSize 页大小
    var pno = req.query.pno;
    var ps = req.query.pageSize;
    //3:设置默认值 pno=1 pageSize=4
    if(!pno){pno=1}
    if(!ps){ps=4}
    //4:计算第一问号值
    var off = (pno-1)*ps;
    //5:对pageSize转int
    ps = parseInt(ps); 
    //6:创建sql语句
    //自己写:库名;表名;列名 小写
    var sql = "SELECT id,name,pname,price,yprice,img FROM yiyi_product LIMIT ?,?";
    //7:执行sql语句
    pool.query(sql,[off,ps],(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:"查询成功",data:result})
        })
    //8:将返回结果发送脚手架 
    })
    //检测 83~104 复制 你app.js重新
    //启动 node app.js
    //http://127.0.0.1:4000/First_stage
    //http://127.0.0.1:4000/First_stage?pno=2

    //功能三：将商品添加至购物车
    //1.接收请求 GET/addcart
    // server.get("/addcart",(req,res)=>{
    // //2.获取当前用户登录凭证
    // var uid = req.session.uid;
    // //3.如果用户没有登录返回错误信息
    // if(!uid){
    //     res.send({code:-1,msg:"请登录"});
    //     return;
    //     }
    // //4.获取商品编号/商品价格/商品名称    
    //     var lid = req.query.lid;
    //     var lname = req.query.lname;
    //     var price = req.query.price;
    // //5.查询指定用户是否购买过此商品    
    //     var sql = "SELECT id FROM yiyi_cart WHERE uid=? AND lid=?";
    // //6.执行sql语句    
    //     pool.query(sql,[uid,lid],(err,result)=>{
    //         if(err)throw err;
    //     //7.在回调函数判断是否购买过    
    //         if(result.length == 0){
    //         //8.添加一条数据    
    //             var sql = `INSERT INTO yiyi_cart VALUES(null,${lid},1,'${lname}',${price},${lid})`;
    //             }else{
    //         //9.更新一条数据
    //             var sql = `UPDATE yiyi_cart SET count=count+1 WHERE uid=${uid} AND lid=${lid}`;
    //             }
    //         //10.执行sql语句    
    //         pool.query(sql,(err,result)=>{
    //             if(err)throw err;
    //             res.send({code:1,msg:"添加成功"})
    //         })
    //         //11.将执行结果返回脚手架
    //     })
    // })
    
    //http://127.0.0.1:4000/addcart?//lid=1&lname=mac&price=9

    //http://127.0.0.:4000/login?//uname=tom&upwd=123

    //http://127.0.0.1:4000/addcart?//lid=1&lname=mac&price=9
    
    
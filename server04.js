let http = require("http");
let url = require("url");
let fs = require("fs");

let server = http.createServer((request,response)=>{
    response.writeHead(200,{"Content-Type":"text/html;charset = utf-8","Access-Control-Allow-Origin":"*"});

    let data = "";
    let result = {};

    request.on("data",(chunk)=>{
        data +=chunk;
    });

    request.on("end",()=>{
        console.log(data);
        let user = JSON.parse(data);

        checkLogin(user,name,user.pwd).then((r)=>{
            if(r){
                result.code = 300;
                result.msg = "登陆成功";

            }else{
                result.code = 400;
                result.code = "用户名或者密码失败";

            }
            response.end(JSON.stringify(result));
        }).catch((err)=>{
            result.code = 500;
            result.msg= "系统故障";
            response.end(JSON.stringify(result));
        })
    })

})
server.listen(9000);
console.log("server is running on http://127.0.0.1:9000");
function checkLogin(uname,pwd){
    let flag = false;

    return new Promise((resolve,reject)=>{
        fs.readFile("./users,txt","utf8",(err,data)=>{
            if(err){
                reject(err);
            }else{
                let users = JSON.parse(data);
                users.forEach((e)=>{
                    if(e.uname===uname&&e.pwd===pwd){
                        flag = true;
                    }
                })
                resolve(flag);
            }
        })
    })
}
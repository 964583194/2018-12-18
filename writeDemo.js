let fs = require("fs");
let s ="hello!!!!!!!!!!!!!!!!!!!";
let o = {
    username:"bbb",
    age:20

}
fs.writeFile("d:/write.txt",JSON.stringify(o),{encoding:"utf8",flag:"a"},(err)=>{
    if(err){
        console.log(err);

    }else{
        console.log("写入成功");
    }
})
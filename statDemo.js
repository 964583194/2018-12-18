let fs =require("fs");
fs.stat("./ma.js",(err,stat)=>{
    if(err){
        console.log(err);
    }else{
        console.log(stat.size);
    }
})
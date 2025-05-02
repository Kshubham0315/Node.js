// const { log } = require("console")
// const fs = require("fs")
// here fs is a module where we have to some function

const os = require("os"); // Correct module import
console.log(os.cpus().length); // Output number of CPU cores




//sync (blocking code) ,  asyn(non blocking code)

// write 

//synchronus se 
fs.writeFileSync("./text.txt","Hey world this is a text autometa")


//unsynchronus
fs.writeFile("./text.txt","hello ji",(err)=>{
    console.log(err);
})


//read


//synchronus
const res = fs.readFileSync("./text.txt","utf-8")
console.log(res);


//unsynchronus

fs.readFile("./text.txt","utf-8",(error,response)=>{
    if(error){
        console.log(error)
    }else{
        console.log(response);
    }
})



//update / append


fs.appendFileSync("./text.txt",new Date().toDateString())



fs.appendFileSync("./log.txt","hELLO WORLD HO KYA TUM")


//asynchronus nishe vala


fs.appendFile("./log.txt",`hello huys ${new Date().toDateString()}\n`,(err,res)=>{
    if(err){
        console.log(err);
    }else{
        console.log(res);
    }
})

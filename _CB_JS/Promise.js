// function f1(cb){
//     console.log("f1 starts");
//     setTimeout(()=>{
//         console.log("f1 ends");  
//         cb(f3); 
//     },2000);
// }

// function f2(cb){
//     console.log("f2 starts");
//     setTimeout(()=>{
//         console.log("f2 ends");  
//         cb();
//     },2000);
// }

// function f3(){
//     console.log("f3 starts");
//     setTimeout(()=>{
//         console.log("f3 ends");   
//     },2000);
// }
// f1(f2);






// by default p would be the default promise
// resolve for then 
// reject for cathch
// p.then(func).catch(errorfunc);

// let p=new Promise(function(resolve, reject){
// let n=30;
// if(n==20){
//     resolve();
// }
// else{
//     reject();
// }
// });

// p.then(
// function f(){
//     console.log("SUccess");
// }
// ).catch(
// function f(){
//     console.log("reject");
// }  
// );




// function sum(a,b){
    
//     console.log("Start");
//     // return a+b;
//     setTimeout(()=>{
//         console.log(a+b);
//     },2000);
//     console.log("End");
// }
// sum(5,6);






// function sum(a,b){
//     return new Promise(function(res,rej){
//         console.log("Start");
//         setTimeout(()=>{
//             if(!a ||!b){
//             res("Dono number me se koi na ho");
//             }
//             else{
//                 rej(a+b);
//             }
//         },1000);        
//         console.log("End");        
//     });
// }



// sum(10).then(
//     function sum(ans){
//         console.log("Value : ",ans);
//     }
// ).catch(
//     function error(error){
//         console.log("Error : ", error);
//     }
// );










function getNum(){
    return new Promise(function(res,rej){
        console.log("Start");
        setTimeout(()=>{
            res({
                no1:10,
                no2:20
            });            
        },1000);         
    });
}
function addNum(data){
    return new Promise(function(res,rej){
        setTimeout(()=>{
            let a=data.no1;
            let b=data.no2;
            res(a+b);            
        },1000);         
    });
}
function printNum(ans){
    return new Promise(function(res,rej){
        setTimeout(()=>{
            console.log("ANS :", ans );
            res("ALL DONE");            
        },1000);         
    });
}
getNum()
    .then(addNum)
    .then(printNum)
    .then(msg=>{
        console.log(msg);
    })
   



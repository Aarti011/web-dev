// single line statement for arrow function by default is return


let v=(a,b)=>a+b;
console.log(v(2,3));



let w= ((a,b)=>{
    return a+b;
});
console.log(w(2,3));





// different ways for same functioning
let t=function add(a,b){
    return a+b;
}
console.log(t(2,3));



let u=function(a,b){
    return a+b;
}
console.log(u(2,3));




// for output  we use console.log in js

// datatype in not defined at variable declation in js

// variables can be defined using -
// var
// let
// const

// Datatypes in js -
// number
// boolean
// string
// object
// symbol
// function
// array
// BigInt
// undefined

console.log(typeof("hello"));
let str="Ram is an honest man"

console.log(str.indexOf("an"));

// gives value in array
let word=str.split(" ");
let reversed=word.reverse();

console.log(reversed);



// to reverse the complete string
let s="let's go and play"
let newword="";

for(let y=s.length-1; y>=0; y--){
    newword+=s.charAt(y);
}
console.log(newword);
// output: yalp dna og s'tel





// to reverse each word
let newW="";
let s="he is not innocent";
let word=s.split(" ");
for(let i=0; i<word.length; i++){
    let w=word[i];
    for(let j=w.length; j>=0; j--){
        newW+=w.charAt(j);
    }
    newW+=" ";
}
console.log(newW);
// output: eh si ton tneconni 




let arr=[5,453,2,6,4,3,12,5];
arr.push(76);
arr.pop();
// delete from start
arr.shift(); 
// add at start
arr.unshift(7);
arr.reverse();






// object datatype in JS -
let obj={
    name:"alfiya",
    class:6,
    roll:44,
    subject:"English"
}
console.log(obj);
console.log(obj.name);
obj.name="Aakash";
console.log(obj["name"]);




// str.split().reverse().join();




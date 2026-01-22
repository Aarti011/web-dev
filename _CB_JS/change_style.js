let b = document.getElementsByClassName("btn")[0];
b.innerHTML = "Click_Me_Quick!!";
b.classList.add('change');


// FIZZ-BUZZ QUESTION
let num=document.querySelector('ul');
let val="";


for (let i = 1; i <= 50; i++) {
    if (i%3==0 && i%5==0){val="FIZZBUZZ";}
    else{
        if (i%3==0) {
            val="FIZZ";
        } else {
            if (i%5==0) {
                val="BUZZ";
            } else {
                val=i;
            }
        }
    }
    let Li=document.createElement('li');
    Li.innerText=val;
    num.appendChild(Li);
}




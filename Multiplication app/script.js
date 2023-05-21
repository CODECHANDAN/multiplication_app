
const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

console.log(num1 , num2);

let score = JSON.parse(localStorage.getItem("score"));


if( !score ){
    score = 0;
}

const heading = document.getElementById("multiply");

heading.innerText = `What is ${num1} multiply by ${num2}`;

const formEl = document.getElementById("form");
const inputel = document.getElementById("input");

const scoreEl = document.getElementById("score");

scoreEl.innerText =`score:${score}`


 const correctans = num1*num2;

formEl.addEventListener("submit",()=>{
    const userAns = +inputel.value
     if(userAns === correctans){
        score ++
        updatelocalstorage();
     }else{
        score --
        updatelocalstorage();
     }
});


function updatelocalstorage(){
    localStorage.setItem("score" , JSON.stringify(score));
}
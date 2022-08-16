const h1 = document.querySelector ('h1');
const input1 = document.querySelector ('#calculo1');
const  input2 =document.querySelector('#calculo2');
const  btn =document.querySelector('#btnCalcular');
const pResult =document.querySelector('#resultado')

btn.addEventListener('click', btnOnClick)

function btnOnClick(){
 let suma= input2.value +input1.value
 pResult.innerText = "resultado: " + suma
}
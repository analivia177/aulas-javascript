//pegar os elementos no hmtl

const formulario = document.getElementById("formulario");

const nome = document.getElementsById("nome");
 const nascimento = document.getElementById("nascimento");


formulario.addEventListener("submit", function(event){
event.preventDefault();//impede que a tela regarregue

//pegar o valor dos inputs
const valorNome = nome.value;
const valorNascimento = nascimento.value;

// console.log(valorNome);
// console.log(valorNascimento);

//separa a data em 3 valores

const dataSeparada = valorNascimento.split("-");


// console.log(dataSeparada);


const anoNascimento = Number(dataSeparada[0]);
const mesNascimento = Number(dataSeparada[1]);
const diaNascimento = Number(dataSeparada[2]);

//console.log(anoNascimento);


const hoje = new Date();

const anoAtual = hoje.getFullYear();//pega somente o ano 
const mesAtual = hoje.getMonth()+1;//pega somente o mes
const diaAtual = hoje.getDate();//pega somente o dia


// console.log(hoje);
// console.log(anoAtual);
// console.log(mesAtual);
// console.log(diaAtual);

//exemplo
let idade = anoAtual - anoNascimento;


// if (mesNascimento > mesAtual) {
    idade = idade;
    
// }



//------exercicio 01------
// if (diaNascimento > diaAtual && mesNascimento > mesAtual) {
    idade = idade;
// }


console.log(idade);
 
//montando a data no formato dd/mm/aaaa
const dataFormatada = diaNascimento + "/" + mesNascimento + "/" + anoNascimento; 

//inserindo os valores nos elementos HTML
nomeResultado.textContent = valorNome;
dataResultado.textContent = dataFormatada;
idadeResultado.textContent = idade; 

//exibindo o elemento com as informações
boxResultado.style.display = "block";


}) 

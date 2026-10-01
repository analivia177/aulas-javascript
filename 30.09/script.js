// selecionar os elemnetos HTML

const formulario = document.getElementById("formulario");

const nome = document.getElementById("nome");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");

const nomeResultado = document.getElementById("nomeResultado");
const pesoResultado = document.getElementById("pesoResultado");
const alturaResultado = document.getElementById("alturaResultado");
const boxResultado = document.getElementById("resultado");
const classificacao1 = document.getElementById("classificacao");
const imc = document.getElementById("imcResultado");


formulario.addEventListener("submit", function (event) {
    event.preventDefault();//impede que a tela regarregue

    //pegar o valor dos inputs
    const valorpeso = peso.value;
    const valoraltura = altura.value;
    const valornome = nome.value;
    const valorPeso = Number(valorpeso);
    const valorAltura = Number(valoraltura);
    // console.log(valorpeso);
    // console.log(valoraltura);

    let IMC = valoraltura * valoraltura
    let IMC1 = valorpeso / (IMC)
    let classificacao = ""
    console.log(IMC1);

    if (IMC1 < 18.5) {
        classificacao = "abaixo do peso";
    }
    else if (IMC1 >= 18.5 && IMC1 <= 24.9) {
        classificacao = "peso normal";
    }
    else if (IMC1 >= 25.0 && IMC1 <= 29.9) {
        classificacao = "sobrepeso";
    }
    else if (IMC1 >= 30.0 && IMC1 <= 34.9) {
        classificacao = "obesidade grau1";
    }
    else if (IMC1 >= 35.0 && IMC1 <= 39.9) {
        classificacao = "obesidade grau2";
    }
    else {
        classificacao = "OBESIDADE GRAU3";
    }

    nomeResultado.textContent = valornome
    pesoResultado.textContent = valorpeso
    alturaResultado.textContent = valoraltura
    imc.textContent = IMC1.toFixed(2);
    classificacao1.textContent = classificacao
    boxResultado.style.display = "block"

})

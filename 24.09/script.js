// // // // // // ------ ARRAY (LISTA) ------
// // // // // let nome1 = "levi";
// // // // // let nome2 = "duda";
// // // // // let nome3 = "gustavo";
// // // // // let nome4 = "bernardo";
// // // // // //             0        1        2          3
// // // // // let nomes = ["levi", "duda", "gustavo","bernardo"];//ciração do Array/lista
// // // // // console.log(nomes);//mostra a lista completa na mesma linha

// // // // // console.log(nomes[1]);// mostra o item da posição mencionada entre colchetes

// // // // // nome4 = "ana";
// // // // // nomes[3] = "ana"; //altero o valor na posição especificada

// // // // // console.log(nomes.length);//mostra o tamanho do array

// // // // //              0        1         2          3       4
// // // // let fruta = ["banana", "manga", "maracujá", "uva", "goiaba"];
// // // // console.log(fruta[3]);
// // // // console.log(fruta[1]);
// // // // console.log(fruta.length);


// // // //                0          1           2           3         4
// // // let cidades = ["jundiaí", "maringá", "limeira", "campinas","brasilia"];
// // // cidades[1] = "mauá";
// // // console.log(cidades[1]);
// // // console.log(cidades.length);

// // for (let index = 0; index < 5; index++) {
// //     console.log(cidades[index]);


// // }
// // for (let index = 0; index < cidades.length; index++) {
// //     console.log(cidades[index]);


// // }
// // ---- exercicio 1 ----
// //              0          1       2           3          4         5
// // let nomes = ["maglioni", "julia", "peres", "gabiroques", "duda", "monteiro"];
// // for (let index = 0; index < nomes.length; index++) {
// //     console.log(nomes[index]);

// // }
// // exercicio 2
// // let preços = ["150,00", "80,99", "90,99", "50,00", "30,00"]
// // for (let index = 0; index < preços.length; index++) {
// //     console.log(preços[index]);

// // }
// // exercicio 3
// let nome = ["francine", "egeo", "dove", "elseve", "kerastase"];
// let preços = [80, 70, 51, 46, 339];
// for (let index = 0; index < nome.length; index++) {
//   console.log( "nome: " + nome[index] + "- preços: R$" + preços[index] + ",00"); 


// }


// ------- Estruturs de Repetição + Estrutura de Decisão -------

// for (let index = 0; index <= 10; index++) {// contando de 0 a 10
//     if (index >= 5) { // verificando se é maior ou igual a 5
//         console.log(index);//mostra o número
//     }

// }


// ----- exemplos -----
// let numeros = [2, 4, 6, 13, 28, 7, 777, 9, 10, 14];
// for (let index = 0; index < numeros.length; index++) {// contando de 0 a 10

//     if (numeros[index] >= 10) { // verificando se é maior ou igual a 5
//         console.log(numeros[index]);//mostra o número
//     }

// }

// ----- exemplos -----
// let numeros = [5, 9, 10, 2, 4, 92, 71, 17, 1, 13];
// for (let index = 0; index < numeros.length; index++) {
//     let sobra = numeros[index] % 2;

//     if (sobra == 0) {
//         console.log("o numero " + numeros[index] +" é par");

//     } else {
//         console.log("o numero " + numeros[index] +" é par");

//     }

// }

// ----- exercicio 01 -----
// let notas = [ 10, 9.5, 7.5, 8.5, 5, 9, 7.7, 8];
// for (let index = 0; index < notas.length; index++) {
//     if (notas[index]>= 7) {// se sim, faça isso
//         console.log("aprovado");


//     } else {//se não, faça isso
//         console.log("reprovado");

//     }

// }

// ------ exercicio 02 ------
// let temperaturas = [24, 13, 15, 20, 25, 26, 30,];
// for (let index = 0; index < temperaturas.length; index++) {

//     if (temperaturas[index] > 30) {// se estiver maior que 30, faça isso
//         console.log("quente");


//     } else {// se estiver menor, se não faça isso
//         console.log("frio");

//     }
// }
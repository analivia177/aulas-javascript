// // // // // // // ------ ESTRUTURAS DE REPETIÇÃO ------
// // // // // // // console.log("1");
// // // // // // // console.log("2");
// // // // // // // console.log("3");
// // // // // // // console.log("4");
// // // // // // // console.log("5");
// // // // // // // console.log("6");
// // // // // // // console.log("7");
// // // // // // // console.log("8");
// // // // // // // console.log("9");
// // // // // // // console.log("10");

// // // // // // //FOR
// // // // // // // for (variavel; condicao; incremento) {
       
// // // // // // // }

// // // // // // // INCREMENTO
// // // // // // // for (let index = 0; index < 10; index++) {
// // // // // // //     console.log(index);
// // // // // // // }


// // // // // // //DECREMENTO
// // // // // // // for (let index = 10; index >= 0; index--) {
// // // // // // //     console.log(index);
// // // // // // // }


// // // // // // // INCREMENTO PERSINALIZADO
// // // // // // // for (let index = 10; index >= 0; index-=2) {
// // // // // // //     console.log(index);
// // // // // // // }


// // // // // // // for (let index = 10; index >= 0; index-=5) {
// // // // // // //     console.log(index);
// // // // // // // }



// // // // // // // for (let index = 1; index <= 20; index++) {
// // // // // // //     console.log(index);
// // // // // // // }



// // // // // // // for (let index = 50; index >= 5; index-=5) {
// // // // // // //     console.log(index);
// // // // // // // }



// // // // // // for (let index = 10; index >= 0; index--) {
// // // // // //     console.log(index); 
// // // // // // }
// // // // // // console.log("contagem finalizada");

// // // // // // -------- WHILE --------
// // // // // let contador = 2;
// // // // // while (contador <= 20) {

// // // // //     console.log(contador);
    
    
// // // // //     contador+=2;
    
// // // // // }


// // // // // ---------- DO...WHILE ----------

// // let n = 10
// // while (n < 5) {
// //     console.log("WHILE");
    
// // }

// // do {
// //     console.log("DO...WHILE");
    
// // } while (n < 5);



// let contador = 10;
// do {
//     console.log(contador);
    

//      contador--;

// } while (contador >= 1);

// ------ ARRAY (LISTA) ------
let nome1 = "levi";
let nome2 = "duda";
let nome3 = "gustavo";
let nome4 = "bernardo";
//             0        1        2          3
let nomes = ["levi", "duda", "gustavo","bernardo"];//ciração do Array/lista
console.log(nomes);//mostra a lista completa na mesma linha

console.log(nomes[1]);// mostra o item da posição mencionada entre colchetes

nome4 = "ana";
nomes[3] = "ana"; //altero o valor na posição especificada

console.log(nomes.length);//mostra o tamanho do array

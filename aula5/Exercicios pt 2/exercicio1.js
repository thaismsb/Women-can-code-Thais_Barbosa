//setup
const valoresNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function criaPares(valoresNum){

    for(let indice = 0; indice < valoresNum.length; indice++) {
    if(valoresNum[indice] % 2 === 0 ){
        console.log(valoresNum[indice])
    };
  }
}

criaPares(valoresNum);






//testando o código para ver o que acontece como pedido

// const listaTarefas = ["Varrer a sala", "Lavar Roupa", "Comprar tomates", "Enviar email"]
// for(let indice = 0; indice < listaTarefas.length; indice++) {
//     console.log(listaTarefas[indice]);
// }
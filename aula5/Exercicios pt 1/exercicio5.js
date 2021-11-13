 //Fazendo com ternário
 
 function validaMaiorIdade(anoDeNascimento){
     const anoAtual = 2021;
     let idade = anoAtual - anoDeNascimento;

     return idade === 18 ?
        "Validar documento de identidade"
        : idade > 18 
        ? "Liberação autorizada" 
        : "ATENÇÃO: Liberação NÃO autorizada"
 }

 const resultado = validaMaiorIdade(2000);
 console.log(resultado);




 //Fazendo com if else

//  function validaMaiorIdade(anoDeNascimento){
//      const anoAtual = 2021;
//      let idade = anoAtual - anoDeNascimento;

//      if(idade > 18 ){
//          return "Liberação autorizada";
//      }else if(idade === 18){
//         return "Validar documento de identidade";
//      }else{
//             return "ATENÇÃO: Liberação NÃO autorizada";
//      }
//  }

//  const resultado = validaMaiorIdade(2000);
//   console.log(resultado);





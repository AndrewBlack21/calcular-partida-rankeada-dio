// montar uma estrutura de codigo a onde revele o nivel de vitoria que o heroi esta

//Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões
//- Funções

//## Objetivo:

//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal


function calcularRankeado(vitorias, derrotas){
    let saldo = vitorias - derrotas;
    let resultado;

    if (saldo < 10) { resultado = " Ferro "
}   else if( saldo >= 11 && saldo <= 20){ 
    resultado = "Bronze"
}   else if( saldo >= 21 && saldo <= 50){ 
    resultado = "Prata"
}   else if( saldo >= 51 && saldo <= 80){ 
    resultado = "Ouro"
}   else if( saldo >= 81 && saldo <= 90){ 
    resultado = "Diamante"
}   else if( saldo >= 91 && saldo <= 100){ 
    resultado = "Lendario"
}   else{
    resultado = "Imortal";
}

    
return `O heroi possui ${saldo} e esta na rankeada ${resultado}`
}

let mensagem = calcularRankeado(92,24)
console.log(mensagem);


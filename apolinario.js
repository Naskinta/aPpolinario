// 1 – Crie uma função que retorna a string “Olá, ” concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação “!” no final.

function Q1(text) {
	return `Olá ${text} !`;
}

// 2 - Crie uma função que dado dois valores e uma Callback (passados como parâmetros), mostre no console a soma, subtração, multiplicação ou divisão desses valores, dependendo da função Callabck.

 function Q2(v1,v2,callback) {
    console.log(callback(v1,v2));
}

Q2(10,12, function(v1,v2){
    return v1 + v2;
}) 

// 3 - Crie uma função que recebe um parâmetro e uma callback que retorna uma outra função que recebe um parâmetro e chama essa callback que verifica se um número inteiro passado na primeira função como parâmetro é divisível por um outro numero passado pela função interna e retorne true ou false.

function Q3(v1, callback) {
 return function Q3_2(){
     callback(valor1,valor2);
 }
}

var Q3_3 = Q3(12, function (valor1,valor2){
    if (valor1 % valor2 == 0) {
        return true;
    } else {return false};
})

Q3_3(8);

// 4 - Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar “fevereiro”, pois este é o 2° mês.

function Q4 (m){
    switch (m) {
        case 1: 
            console.log('Janeiro');
            break;
        case 2:
            console.log('Fevereiro');
            break;
        case 3:
            console.log('Março');
            break;
        case 4:
            console.log('Abril');
                break;
        case 5:
            console.log('Maio');
            break;
        case 6:
            console.log('Junho');
                break;
        case 7:
            console.log('Julho');
                break;
        case 8:
            console.log("Agosto");
            break;
        case 9: 
            console.log("Setembro");
            break;
        case 10:
            console.log("Outubro");
            break;
        case 11: 
            console.log("Novembro");
            break;
        case 12: 
            console.log("Dezembro");
            break;
        default:
            console.log("você passou um valor inválido");
            break;
    }
}

Q4(5);

// 5 – Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo dependendo da função Callback.

function Q5(x, y) {
    if (x >= y) {
        return 'O primeiro número é maior ou igual que o segundo!';
    } else {
        return 'O segundo número é maior ou igual que o primeiro!';
    }
}

function comparation(x, y, callback) {
    return callback(x, y);
}

comparation(2, 3, Q5);

// "O segundo número é maior ou igual que o primeiro!"

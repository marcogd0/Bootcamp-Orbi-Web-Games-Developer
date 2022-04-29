/*
1. Some todos os números de um array
2. Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
*/

console.log('==========Ex. 1==========')
function sumNumbers(arr) {
    return arr.reduce(function (prev, current) {
        console.log({ prev });
        console.log({ current });
        return prev + current;
    }, 0);
}


const arr = [1, 2];

console.log(sumNumbers(arr));

console.log('==========Ex. 2==========')

const myList = [
    {
        name: 'soap',
        price: 30
    },
    {
        name: 'cereal',
        price: 15
    },
    {
        name: 'towel',
        price: 40
    }
];

const availableBalance = 100;

function calculateBalance(availableBalance, list) {
    return list.reduce((prev, current) => prev - current.price, availableBalance)
}

console.log(calculateBalance(availableBalance, myList));
/*
Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.
*/

const apple = {
    value: 2,
}

const orange = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item){
        return item * this.value;
    }, thisArg)
}
const nums = [1, 2];

console.log('this -> apple', mapComThis(nums, apple))

console.log('this -> orange', mapComThis(nums, orange))
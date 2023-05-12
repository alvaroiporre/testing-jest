const add = (num1, num2) => num1 + num2;

const substract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => {
    if(num2 === 0 || (num1 === 0 && num2 === 0)) return undefined;
    return num1 / num2;
}


module.exports = {
    add,
    substract,
    multiply,
    divide
}
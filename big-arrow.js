const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = add(22, 90, 5);

const tenTimes = (number) => number * 10;
const output = tenTimes(17);

const fiveTimes = number => number * 5;
const output2 = fiveTimes(10);

const getName = () => 'Sobur Uddin'
const name = getName()

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const multiplyF = sum * diff;
    const output3 = multiplyF / 2;
    return output3;

}
const arrayTotal = doMath(10, 5)
// console.log(arrayTotal);

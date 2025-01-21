// function greeting (nm) {
//      return `Good morning ${nm}!`
// }
// //chamando a função greeting, e passando o valor 'victor' como argumento.
// const vr = greeting('victor');
// console.log(vr)

// function som(x, y) {
//     const result = x + y
// //solicita par retorna  a conta da função
//     return result;
// }

// function sub(a, b){
//     const op = a - b;
//     return op
// }

// console.log(sub(10,5))
// console.log(som(2,5))


const threeHours = 60*60*3*1000;
const oneDay = 60*60*24*1000;
const date = new Date (0 + threeHours + oneDay);//31/12/1969 timestamp unix
console.log(date.toString())
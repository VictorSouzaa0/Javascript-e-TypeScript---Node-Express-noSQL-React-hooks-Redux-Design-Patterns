//                 0         1         2       3
// const fruits = ['apple','pinneaple','grape','pear'];
// //For in -> lêos indices ou chaves do objeto
// for (i = 0; i < fruits.length; i++){
//     // console.log(fruits[i])
// }

// for (let indice in fruits) {
//     console.log(fruits[indice])
// }

// const people =  {
//     name : 'Victor',
//     surname : 'Souza',
//     age : 20,
// };

// for (let x in people){
//     console.log(x,people[x])
// }

// const car = {
//     brand : "mercedes",
//     model : "g63",
//     year : 2025
// }
//For "in" retorna o indíce
// //For "of" retorna o valor do indíce
// For "of" o objeto não é interável
// const car = " mercedes"
// for(let i of car){
//     console.log(i)
// }

// for(let i in car){
//    console.log(i,car[i])
// }

const nome = ["Victor","Cabrito","Jorgao"]
nome.forEach(function(element,indice,array){
    console.log(element,indice,array)
});
//for each retorna o indíce,valor e o array 
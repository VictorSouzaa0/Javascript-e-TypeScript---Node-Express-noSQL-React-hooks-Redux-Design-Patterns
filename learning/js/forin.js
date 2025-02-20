//                 0         1         2       3
// const fruits = ['apple','pinneaple','grape','pear'];
// //For in -> lêos indices ou chaves do objeto
// for (i = 0; i < fruits.length; i++){
//     // console.log(fruits[i])
// }

// for (let indice in fruits) {
//     console.log(fruits[indice])
// }

const people =  {
    name : 'Victor',
    surname : 'Souza',
    age : 20,
};

for (let x in people){
    console.log(x,people[x])
}
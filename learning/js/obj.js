//()parâmetro
//Função que retorna valores de um objeto é chamada de factory
// function addPeople(name,surname,age){
//     return {
//         name: name,
//         surname: surname,
//         age: age
//     };
// }
// //Os valores que se torna pertencente a o parâmetro chamasse argumento
// const firstP = (addPeople('Victor','Souza',19))
// console.log(firstP)
// const seconP = (addPeople('Guilherme','Vieira',10))
// console.log(seconP)
// const thirdP = (addPeople('Davi','Luca',1))
// console.log(thirdP)
//Quando uma função esta dentro dentro de um objeto ele é chamada de método
// const people = {
//     name:'Victor',
//     surname:'Souza',
//     age:20,
// //método speak
//     speak() {
//         console.log(`My current age is ${this.age}`)
//     },
// //método de incremento
//     incrementAge(){
//         this.age++;
//     }
// };

// people.speak();
// people.incrementAge();
// people.speak();


const me ={
    name: 'Victor',
    surname:'Souza',
    age:19,
    addrres: {
        road:'Benjamin',
        number: 1230
    }
}

console.log(` Olá, me chamo ${me.name} ${me.surname} tenho ${me.age} e moro em ${me.address}`)
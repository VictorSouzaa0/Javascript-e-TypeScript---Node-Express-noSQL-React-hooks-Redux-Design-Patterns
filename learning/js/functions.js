// // Declaração de função (Function hosting)
// // speakHi()
// // function speakHi(){
// //     console.log('Hii')
// // }

// //First-class objects (Objetos de primeira classe)

// // Function expression

// // const imData = function(){
// //     console.log('Sou um dado')
// // };

// // function exeFunction(functio){
// //     console.log('I will execute your function below:')
// //     functio();
// // }
// // exeFunction(imData)

// const name = 'Victor';

// function speakName(){
//     const name = 'Souza'
//     console.log(name)
// }
// // a funçao léxica conhece o lugar que foi declarada e o que está dentro dela, e o que esta ao lado

// function usingspeak(){
//     speakName();
// }
// usingspeak();

//________________________________________________________________________________________________________________________________________
//Clousers

// function createFunction(){
//     const name = 'Victor';
//     return function(){
//         return name
//     }
// }

// const funcio = createFunction();
// console.dir(funcio)
//--------------------------------CallBack--------------------------------------------------------
// function print(num){
//     console.log(`A oepração resultou em ${num}`)
// }

// function sum (a,b,callback){
//     let op =  a + b;
//     callback(op)
// }

// function mult(a,b,cb){
//     let op = a * b
//     cb(op)
// }

// sum(2,3,print);
// mult(5,5,print);

// function hello(name,callback){
//     console.log(`Olá ${name} vamos aprender callback?`)
//     callback();
// }

// function letsgo(){
//     console.log('Então vamos começar!!')
// }

// hello('Victor',letsgo)

// function login(name,callback){
//     console.log(`Login efetuado com sucesso ${name}`)
//     callback();
// }

// login('Victor',function(){
//     console.log('Clique enter para continuar')
// })
//--------------------IIFE - Immediately invoked function expression-------------------------------------------------------------------
// function createPerson(name,surname){
//     return{
//         name,
//         surname,
//         speak:function(word){ //método
//             return `${name} está ${word}.`;
//         }
        
//     }
// }

// const p1 = createPerson('Victor','Souza');
// console.log(p1)
// console.log(p1.speak('estudando JS'))
//DefinePropety -> definePropeties

function Product(name,price,stock) {
    this.name = name;
    this.price = price;

    Object.defineProperty(this, 'stock',{
        enumerable: true, //mostra a chave
        value: stock, //valor da chave
        writable: true, //pode alterar o valor
        configurable: true //ṕde aáhar
    })
}

const  product1 = new Product('t-shirt',20,30);
console.log(product1)
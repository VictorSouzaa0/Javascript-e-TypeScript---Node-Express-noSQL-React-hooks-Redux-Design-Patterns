/*
Javascript é baseado em protótipos para passar propriedades 
e metódos de um objeto para outro


Definição de protótipo
Protótipo é o termo usado para se refirirr ao que foi criado
pela primeira vez, servindo o modelo ou molde para futuras operações

Todos os objetos tem uma referência interna para um protótipo
(__proto__) que vem da propriedade prototype da função construtora
que foi usada para criá-lo. Quando tentamos acessar um membro de um
objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio
objeto e depois na cadeia de protótipos é usada até o o topo (null)
até encontrar (ou não) tal membro.
*/
//-------------------------------------------------------------------------------------------------------
//Construtora -> molde(classe)
// function People(name,surname) {
//     this.name = name
//     this.surname = surname
//     this.fullName = () => 'ORIGINAL' + this.name + ' ' + this.surname
// }
// People.prototype.fullName = function(){
//     return this.name + ' ' + this.surname;
// }
// //Instância 

// const people1 =  new People('Victor', 'O.'); // <- People = Função Construtora
// const people2 = new People('Claudia', 'A.'); // <- People = Função Construtora

// console.dir(people1);
// console.dir(people2);
//--------------------------------------------------------------------------------------------------------

//new Object -> Object.prototype

// const objA = {
//     keyA: 'A',
// }

// const objB ={
//     keyB: 'B',
// }

// const objC = new Object();
// objC.keyC = 'C'
// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);
// console.log(objB.keyA);
//-----------------------------------------------------------------------------------------------------------------

// function Product(name,price) {
//     this.name = name,
//     this.price = price;
// }

// Product.prototype.Discount = function(percent){
//     this.price = this.price - (this.price*(percent/100))
// };

// Product.prototype.increase = function(percent){
//     this.price = this.price + (this.price*(percent/100))
// };

// const product1 = new Product('T-shirt',20);

// //Literal
// const product2 ={
//     name: 'Tyres',
//     price: 200,
// };
// //Atribuindo o prototype do produto 1 para o produto 2
// Object.setPrototypeOf(product2,product1)
// product2.increase(10)
// console.log(product2)
// product1.increase(10)
// product2.Discount(50)
// console.log(product1);
// console.log(product2);
//-----------------------------------------------------------------------------------------------------------------------
//HERITAGE(Herança)
// Product -> increase, discount
//T-shirt = color, mug(caneca) = material

function Product(name,price) {
    this.name =  name,
    this.price = price
}

Product.prototype.increase = function (amount){ //amount = quantia
    this.price +=  amount;
};
;
Product.prototype.discount  = function (amount) {
    this.price -= amount;
};

function Tshirt (name,price,color) {
    Product.call(this,name,price);
    this.color = color
}
Tshirt.prototype.construtctor = Tshirt;
//Inserindo o prototype do 'Product' ao 'Tshirt'
Tshirt.prototype = Object.create(Product.prototype)//Camiseta herda tudo que a classe "Product" tem
const tshirt = new Tshirt('Jersey',7.5,'black')
const product = new Product('Gen', 10,'white')
console.log(product)
console.log(tshirt)
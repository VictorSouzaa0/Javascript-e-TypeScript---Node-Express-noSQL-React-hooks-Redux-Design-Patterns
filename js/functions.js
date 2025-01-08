const name = "Victor";
const surname = "Souza";
const age = 19;
const weight = 65;
const height = 1.76;
let imc = 13.5;
let born = 2005;

console.log(name, surname , "was born in", born ,"he has ", age,"years with height of",height,"your imc is",imc )
--------------------------------------------------------------------------------------------------------
increment
let coun = 10;
console.log(coun++);
console.log(coun);
--------------------------------------------------------------------------------------------------------
// decrement
let count = 10;
console.log(count--);
console.log(count);
--------------------------------------------------------------------------------------------------------
window
const confirma = confirm("Seja bem vindo");

if (confirma == true){
    let nam = prompt("Qual seu nome?");
    window.alert("Olá"+ nam)
    
}else{
    window.alert("Obrigado");
} 
manipulação de variaveis
let varA = "A"; // B
let varB = "B"; // C
let varC = "C" // A
let varn = null;
varn = varA
varA = varB;
varB = varC;
varC = varn;

console.log(varA,varB,varC)
--------------------------------------------------------------------------------------------------------
manipulação de strings
            012345
let aString = "A text"

entre [] você seleciona o índice que deseja
console.log(aString[0]);
saída: A
--------------------------------------------------------------------------------------------------------
selecionando o índice atráves da função chartArt 
console.log(aString.charAt(2));
Sáida: t
--------------------------------------------------------------------------------------------------------
função concat usada para concatenar uma string
console.log(aString.concat(" Java","Script"));
Saída: A text Javascript
--------------------------------------------------------------------------------------------------------
usando template String
console.log(`${aString} Javascript`);
Saída: A text Javascript
--------------------------------------------------------------------------------------------------------
Função indexOf para identificação do primeiro índice da string selecionada
console.log(aString.indexOf("text"))
Saída: 2
--------------------------------------------------------------------------------------------------------
Função lastindexOf para identificação do últino índice da string selecionada
console.log(aString.lastIndexOf("text"))
Saída: 5
--------------------------------------------------------------------------------------------------------
a-z se trata de uma expressão regular utilizada para encontrar as letras minusuclas na string
a letra 'g' se define que ele vai procurar o todos os elementos entre a-z
console.log(aString.match(/[a-z]/g));
Saída: ['t','e','x','t']
OBS: CASO O [A-Z] FOSSEM MAIÚSCULO, ELE APENAS ENCONTRARIA LETRAS MAIÚSCULAS
--------------------------------------------------------------------------------------------------------
Função replace você escreve a string que deseja ser trocada e depois digite a nova palavra que deseja colocara no,lugar
console.log(aString.replace("A","Small"))
Saída: Small text
--------------------------------------------------------------------------------------------------------
Função length usada para contar quantos índices á na string selecionada
console.log(aString.length);
Saída: 6
--------------------------------------------------------------------------------------------------------
Função slcie pode definir de qual índice até o indice que deseja apresentar
console.log(aString.slice(3, 6))
Saída: ext
--------------------------------------------------------------------------------------------------------

//1 – Apresente a média aritmética dos números. (Com parâmetros e Com retorno).
//2 – Apresenta o menor número. (Com parâmetros e Com retorno).
//3 – Apresenta a diferença entre o maior e o menor número. (Com parâmetros e Com retorno).
//4 – Apresenta os números em ordem crescente. (Com parâmetros e Sem retorno).


//1TASK

// function media(grade,grade2,operator){
//     grade = Number(prompt('Insira a 1° nota:'))
//     grade2 = Number(prompt('Insira segunda nota: '))
//     operator = alert((grade + grade2)/2)
//     return `Sua média ${operator}`
// }

// const people = media()

//2TASK
// function smallNumber(number1,number2){
//     number1 = 11
//     number2 = 10
//     if(number1 < number2){
//         return `menor número: ${number1}`
//     }else{
//         return `menor número ${number2}`
//     }
// }

// let test = smallNumber()
// console.log(test)

//3TASK

// function gapNumber(number1,number2,gap){
//     number1 = 3000
//     number2 = 1000
//     gap = number1 - number2
//     return `Os números são ${number1} e ${number2} e as distância entre eles estão em ${gap} numeros`  
// }

// prove = gapNumber()
// console.log(prove)

//TASK4 Apresenta os números em ordem crescente. (Com parâmetros e Sem retorno).

function orderNumber(number,x){
    number = 10
    for (x= 0; x <= number; x++ )
        console.log(x)
}
orderNumber()

/*
Operadores de comparação
> : Maior que
>= : Maior ou igual
< : Menor que
<= : Menor ou igual
== : Igual a que (valor)
==== : Igualdade estrita (valor e tipo)
!= : O Diferente (valor)
! == : O diferente estrito (valor e tipo)
const num1 = 10;
const num2 = '10'
console.log(num1 === num2);
*/

/*
Operadores lógicos

&& -> AND -> E : Todas as expresseões precisam ser verdadeiras para retorar verdadeira
const user = 'Victor'; //Form usuário digitou
const time = '123456'; //Form usuário digitou
 //              true                false
const log = user === 'Victor' && time === '12345';

console.log(log)
|| -> OR -> OU
const user = 'Victor'; //Form usuário digitou
const time = '123456'; //Form usuário digitou
 //              true                false
const log = user === 'Victor'|| time === '12345';
console.log(log) //o login seria efetuado caso pelo menos 1 que seja verdadeiro
! -> NOT -> NÂO: Ele inverte qualquer valor que seja verdadeiro ou falso
*/

/*
Operadores conidionais
IF : Pode ser usado sozinho
Sempre utilizo a palavra else, preciso de um if antes
Eu posso ter vários elses ifs na checagem
Só posso ter um else na checagem
Podemos usar condições sem else if, utilizando apenas if e else
Entre 0 - 11 : Bom dia
Entre 12 e 17 : Boa tarde
Entre 18 - 23 :Boa noite
const hr =  2024;

if (hr >= 0 && hr <=11){
    console.log('Bom dia')
}else if (hr >= 12 && hr <=17){
    console.log('Boa tarde')
}else if(hr >= 18  && hr <= 23){
    console.log('Boa noite')
}else{
    console.log('A hora inserida está fora do formato de 24horas')
}
const haveMoney = true;

if(haveMoney){
    console.log('Im out')
}else{
    console.log('Dont have money')
}
*/

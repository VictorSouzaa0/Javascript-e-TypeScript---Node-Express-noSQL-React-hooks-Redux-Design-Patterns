//              01234567891011
//O índice de uma string se base em cada letra
const myName = "Victor Souza"
// --------------------------------------------------------------------------------------------------------
//O ídice de um array se basea em cada string dentro dele
//                    0       1       2
const students = ["Victor","Pedro","joao"];
//É substituído a índice do array selecionado
// students[1] = "Maria"; 
// console.log(students) ['Victor', 'Maria', 'joao']
// --------------------------------------------------------------------------------------------------------
// console.log(students); ['Victor', 'Pedro', 'joao']
// selecionado o índice que será  apresentado
// console.log(students[0]);Victor
// console.log(students[2]);Joao
// --------------------------------------------------------------------------------------------------------
// adcionando uma nova string no array selecionado
// students[3] = "Otávio"
// console.log(students)['Victor', 'Pedro', 'joao', 'Otávio']
// --------------------------------------------------------------------------------------------------------
//função usada para adicionar um item no array
// students.push("Junior")
// console.log(students) ["Victor","Pedro","joao","Junior"]
// ------------------------------------------------------------------------------------------------------
//função push no array realiza a inserção no final do array
// students.push("Alan")
// console.log(students)['Victor', 'Pedro', 'joao', 'Alan']
//Função unshift faz a inserção no iniicio do array
// students.unshift("Alberto");["Alberto","Victor","Pedro","joao"]
// console.log(students) 
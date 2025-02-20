//Criando um array com objetos
const elements = [
    {tag: 'p', text: 'Word 1'},
    {tag:'div', text: 'wword 2'},
    {tag: 'footer', text: 'word 3'},
    {tag: 'section', text: 'word 4'},
];
//querySelector realiza a busca da primeira classe com nome 'container'
const container = document.querySelector('.container');
//cria uma const 'div' para criar a tag dentro do html
const div =  document.createElement('div');

//criando um 'for' 
for (let i = 0; i < elements.length; i++) {
//realizando a destruturação do obejto:
    let { tag,text } = elements[i];
//criando uma variável e criando um elemento do objeto (tag)
    let createdTag = document.createElement(tag);
//Dentro da tag criada adicionando o valor do obejto (text)
    createdTag.innerHTML = text;

    div.appendChild(createdTag);
    console.log(text)
}
//adiciona as informações da div dentro do container
container.appendChild(div)
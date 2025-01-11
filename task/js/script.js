//IIFE (Immediately Invoked Function Expression)
function tes (){
//document.querySelector para buscar e selecionar o primeiro elemento HTML que possui a classe form. 
    const form = document.querySelector('.form');
    
// Função que será chamada no evento 'submit'
    // let count = 1
    function ReciveEventForm (event){
        event.preventDefault();
        //cria variaveis chamando as classes do html
        const nam = form.querySelector('.name');
        const surname = form.querySelector('.surname');
        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');
        const resul = document.querySelector('.result');
        //cria um objeto com as campos do html
        const people = {
            name: nam.value,
            surname: surname.value,
            weight : weight.value,
            height : height.value
        }
        //adciona esse objeto na lista
        const listPeople = [people]
        //debug no console
        console.log(listPeople)
        //insere os campos no html
        const result = `<p>${people.name} ${people.surname} ${people.weight} ${people.weight} ${people.height}</p>`
       //exibindo na página html
        resul.innerHTML = result;

        // console.log(`Form is Invited ${count++}`)
    }

// Adiciona o evento 'submit' ao formulário
    form.addEventListener('submit', ReciveEventForm);
}
tes();
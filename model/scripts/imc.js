//Função onde era ser realizado o calculo do imc junto ao html
function calculatorIMC (){

    const form = document.querySelector('.form');
    
    function ReciveEventForm (event){
        event.preventDefault();
        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');

        const peopleIMC = {
            weight: parseFloat(weight.value),
            height: parseFloat(height.value)
        };
        
        const operator = peopleIMC.weight / (peopleIMC.height ** 2);
        const result = operator;

        if (result >= 0 && result <= 18.4){
            alert(`Abaixo do peso ${result.toFixed(2)}`)
        }else if(result >= 18.5 && result <=24.9){
            alert(`Peso normal ${result.toFixed(2)}`)
        }else if(result >=25 && result <=29.9){
            alert(`Sobrepeso ${result.toFixed(2)}`)
        }else if(result >=30 && result <= 34.9){
            alert(`Obesidade 1° grau ${result.toFixed(2)}`)
        }else if(result >= 35 && result <= 39.9){
            alert(`Obesidade de 2° grau ${result.toFixed(2)}`)
        }else{
            alert(`Obesidade de 3° grau ${result.toFixed(2)}`)
        }

        console.log(peopleIMC)
    }
    form.addEventListener('submit',ReciveEventForm);
}
calculatorIMC();
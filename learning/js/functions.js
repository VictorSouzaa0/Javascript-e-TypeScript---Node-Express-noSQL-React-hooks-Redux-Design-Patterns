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

function f1(){
    setTimeout(function(){
        console.log('F1')
    },1000)
}

function age(){
    setTimeout(function(){
        console.log(2025)
    },2000)
}

function season(){
    setTimeout(function(){
        console.log('season')        
    },500)
}
f1();
age();
season();
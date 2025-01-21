const date = new Date('2025-1-20');
const weekDay = date.getDay()

if(weekDay == 0){
    console.log('Domingo')
}else if(weekDay === 1){
    console.log('Segunda-Feira')
}else if(weekDay === 2){
    console.log('Terça feira')
}else if(weekDay === 3){
    console.log('Quarta-Feira')
}else if(weekDay === 4){
    console.log('Quinta Feira')
}else if(weekDay === 5){
    console.log('Sexta Feira')
}else if(weekDay ===  6 ){
    console.log('Sábado')
}


function getDayweek(weekDay) {
    let dayWeektext;
    switch (weekDay) {

        case 0:
            dayWeektext = 'Domingo';
            return dayWeektext
        case 1:
            dayWeektext = 'Segunda-Feira';
            return dayWeektext
        case 2:
            dayWeektext = 'Terça-Feira';
            return dayWeektext
        case 3:
            dayWeektext = 'Quarta-Feira'
            return dayWeektext
        case 4:
            dayWeektext = 'Quinta=Feira';
            return dayWeektext
        case 5:
            dayWeektext = 'Sexta=Feira';
            return dayWeektext
        case 6:
            dayWeektext = 'Sánado';
            return dayWeektext

            default:
                dayWeektext = ''
                return dayWeektext

    }
}
const date = new Date('2007-12-18')
const weekDay = date.getDay();
const dayWeektext = getDayweek(weekDay);
console.log(dayWeektext)

// if(weekDay == 0){
//     console.log('Domingo')
// }else if(weekDay === 1){
//     console.log('Segunda-Feira')
// }else if(weekDay === 2){
//     console.log('Terça feira')
// }else if(weekDay === 3){
//     console.log('Quarta-Feira')
// }else if(weekDay === 4){
//     console.log('Quinta Feira')
// }else if(weekDay === 5){
//     console.log('Sexta Feira')
// }else if(weekDay ===  6 ){
//     console.log('Sábado')
// }

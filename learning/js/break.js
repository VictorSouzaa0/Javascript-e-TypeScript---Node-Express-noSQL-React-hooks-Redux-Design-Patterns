// let  control = 0;

// while(control <=10){
//     console.log(control)
//     control++;
// }
// console.log("cabo pae")

const numbers = [1,2,3,4,5,6,7,8,9]

for (let number in numbers){

    if (number === 2){
        console.log('PULAMO O 5')
        continue;
    }
    if (number === 7){
        break;
    }
}

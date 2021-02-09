// function add(num1,num2){
//     // if(num1 == undefined){
//     //     num1 = 0;
//     // }
//     num1 = num1 || 0;
//     // if(num2 == undefined){
//     //     num2 = 0;
//     // }
//     num2 = num2 || 0;
//     return num1+num2;
// }

function add(num1,num2 = 0){
    return num1 + num2;
}

const total = add(5,34);
const total2 = add(5);
console.log(total);
console.log(total2);
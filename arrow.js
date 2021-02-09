// function doubleIt(num){
//     return num*2;
// }

// const doubleIt = function myFun(num){
//     return num*2;
// }

const doubleIt = (num)=>  num*2;
const result = doubleIt(65);
console.log(result);

const add = (x,y) => x+y;
const add5 = () => 5;
console.log(add(5,7));
console.log(add5());

const bishal = (x,y)=>{
    const add = x + y;
    const diff = x - y;
    const result = add * diff;
    return result;
}

const result2 = bishal (10,5);
console.log(result2);
const person = {name:"ashik",email:"ashik.bubt74@gmail.com",age:29,job:"tutor",friend:['arif','rasel','rubel','bayzed']};

const { name, email} = person;

console.log(name,email);

const friends = ['arif','rasel','rubel','ismail'];
const [first,second,...other] = friends;
console.log(first,second);
console.log(other);

const complexObject ={
    name:'abc',
    info:{
        adress :'kola bagan',
        leader:'tiger leader'
    }
}

const {leader} = complexObject.info

console.log(leader);
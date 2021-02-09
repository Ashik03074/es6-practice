class Parent{
    constructor(){
        this.fatherName = 'Abul Kalam';
    }
}
class Child extends Parent{
    constructor(name){
       super();
       this.name = name;
    }
    getFullName(){
        return this.fatherName +" "+this.name;
    }
}

const child1 = new Child('Ashik');
const child2 = new Child('Zahid');

console.log(child1);
console.log(child2);
console.log(child1.getFullName());
class Student{
    constructor(sId,sName){
        this.id = sId;
        this.name = sName;
        this.school = "kolimunnesa School";
    }
}

const student1 = new Student(1,"ashik");
const student2 = new Student(2,"arif");

console.log(student1,student2);
console.log(student1.name,student2.name);
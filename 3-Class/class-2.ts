
/**
 * class
 * typescript中的类的继承
 */
class Person{
    public name:string;  // public、private、static 是 typescript 中的类访问修饰符
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    tell(){
        console.log(this.name + this.age);
    }
}

class Student extends Person{
    gender:string;
    constructor(gender:string){
        super("云云",23);
        this.gender = gender;
    }
    tell(){
        console.log(this.name + this.age + this.gender);
    }
}

var student = new Student("male");
student.tell();
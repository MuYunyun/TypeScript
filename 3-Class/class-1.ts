/**
 * class
 * typescript中的类
 */

class Person{
    name:string; // 这个是对后文this.name类型的定义
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    print(){
        return this.name + this.age;
    }
}

let person:Person = new Person('云云',23)
console.log(person.print())
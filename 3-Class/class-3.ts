/**
 * class
 * typescript中的封装的实现
 * public private
 */
class Hello{
    private _name:string;
    private _age:number;
    get name():string {
        return this._name;
    }
    set name(value:string) {
        this._name = value;
    }
    get age():number{
        return this._age;
    }
    set age(age:number) {
        if(age>0 && age<100){
            alert("年龄在0-100之间");
            return;
        }
        this._age = age;
    }
}

let hello = new Hello();
hello.name = "牧云云";
hello.age = 23
alert(hello.name);
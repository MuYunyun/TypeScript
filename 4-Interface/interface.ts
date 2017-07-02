/**
 * interface接口
 */

interface LabelValue{
    label:string;
}

function printLabel(labelObj:LabelValue){
    console.log(labelObj.label);
}

let myObj = {
    "label":"hello Interface"
};
printLabel(myObj);

/**
 * 接口的可选属性(我觉得接口就是对可选参数的封装)
 */

interface Person{
    name?:string;
    age?:number;
}

function printInfo(info:Person){
    console.log(info);
}

let info = {
    "name":"牧云云",
    "age":23
};

printInfo(info);

let info2 = {
    "name":"牧云云"
};

printInfo(info2);

/**
 * 接口的函数类型
 */
interface SearchFunc{
    (source: string,subString: string):boolean;
}

let mySearch:SearchFunc;
mySearch = function(source: string,subString: string){
    return source.search(subString) !== -1;
};

console.log(mySearch("鸣人","鸣"));
console.log(mySearch("鸣人","缨"));

/**
 * interface中的数组类型
 */

interface StringArray{
    [index: number]: string;
}

let MyArray: StringArray;
MyArray = ["是","云","随","风"];
console.log(MyArray[2]);

/**
 * interface中的类
 */
interface ClockInterface{
    currentTime:Date;
    setTime(d:Date);
}

class Clock implements ClockInterface{
    currentTime:Date;
    setTime(d:Date){
        this.currentTime = d;
    }
    constructor(h: number, m: number) {}
}

/**
 * interface中的继承
 */
interface Shape{
    color:string;
}

interface PenStroke{
    penWidth:number;
}

interface Square extends Shape,PenStroke{
    sideLength:number;
}

let s = <Square>{};
s.color = "blue";
s.penWidth = 100;
s.sideLength = 10;

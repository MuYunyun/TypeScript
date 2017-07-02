
/**
 * BasicTypes
 * 基本数据类型
 */
// String 类型: 一个保存字符串的文本，类型声明为string：
let name: string = 'muyy'
let name2: String = 'muyy'

// boolen 类型: boolean是true或false的值
let isBool1: Boolean = false
let isBool2: boolean = false
// let isBool3: boolean = new Boolean(1)  // 错误 因为 new Boolean(1) 生成一个 Bool 对象

// number 类型
let number:number = 10;
let number2:Number = 10;

// Array 类型: 数组是 Array 类型。然而，因为数组是一个集合，我们还需要指定在数组中的元素的类型。我们通过 Array<type> or type[] 语法为数组内的元素指定类型
let arr:number[] = [1, 2, 3, 4, 5];
let arr2:Array<number> = [1, 2, 3, 4, 5];

let arr3:string[] = ["1","2"];
let arr4:Array<string> = ["1","2"];

// Enums 类型: 列出所有可用值，一个枚举的默认初始值是0。你可以调整一开始的范围：
enum Role {Employee = 3, Manager, Admin}
let role: Role = Role.Employee
console.log(role) // 3

// any 类型: any 是默认的类型，其类型的变量允许任何类型的值：
let notSure:any = 10;
let notSure2:any[] = [1,"2",false];

// JavaScript 没有空值 Void 的概念，在 TypeScirpt 中，可以用 void 表示没有任何返回值的函数：
function alertName(): void {
  console.log('My name is muyy')
}
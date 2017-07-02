/**
 * Function
 * 函数
 */

/**
 * 给函数指定返回值的几种方式
 *
 * function fnName(arg:string[指定传入string类型的数据],arg2:number[指定传入number类型的数据]):number[指定函数的返回值为number类型]{
 *     函数体...
 * }
 *
 * var fnName = function(arg:string[指定传入string类型的数据],arg2:number[指定传入number类型的数据]):string[指定函数的返回值为string类型]{}
 *
 */

function add(x: string, y: string): string{
    return "Hello TypeScript";
}

let add2 = function(x: string, y: string): string{
    return "Hello TypeScript";
}

// 完整写法
let add3: (x: string, y: string) => string = function(x: string, y: string): string{
    return "Hello TypeScript";
}

/**
 * 可选参数和默认参数
 *
 * function fnName(firstName?:string[指定传入string类型的数据,加?也可以不传],lastname:string[指定传入string类型的数据,加?也可以不传]]){}
 *
 * function fnName(firstName:string[指定传入String类型的数据],last="人")
 */

function buildName(firstName: string, lastName?: string){
    console.log(lastName ? firstName + "" + lastName : firstName)
}

let res1 = buildName("鸣", "人"); // 鸣人
let res2 = buildName("鸣"); // 鸣
//let res3 = buildName("鸣", "人", "君"); // Supplied parameters do not match any signature of call target.

function buildName2(firstName = "鸣", lastName?: string){
    console.log(firstName + "" + lastName)
}

let res4 = buildName2("人"); // undefined人
let res5 = buildName2(undefined, "人"); // 鸣人

/**
 * 指定函数多个参数
 *
 * function fnName(firstName:string[指定传入string类型的参数],...resArg:string[] [...指定多个参数,且为一个数组,取参数用数组的方式来取]){
 *      var arg = resArg[1];
 *      //  取得第三个参数
 * }
 */

function peopleName(firstName: string, ...restArg: string[]){
    console.log(firstName + "-" + restArg.join("-"))
}

let res6 = peopleName("my","name","is","muyy");

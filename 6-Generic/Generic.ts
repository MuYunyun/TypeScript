/**
 * Generic泛型
 */

function Hello<T>(arg:T):T{
    return arg;
}

let outPut = Hello<string>('Hello Generic');
let output2 = Hello('Hello Generic')
console.log(outPut);
console.log(output2);
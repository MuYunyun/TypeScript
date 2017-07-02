/**
 * Generic泛型 string[] = Array<string> 求证
 */

function Hello<T>(str:T[]):T[]{
    return str;
}

let list:Array<string> = Hello<string>(["1","2","3"]);

for(let i = 0,len = list.length;i < len;i ++){
    console.log(list[i]);
}
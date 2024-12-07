//lambda statement

var TEMP = (val1 : number, val2: number) =>
{
    console.log("inside addition lambda statement")
    var result : number =0
    result = val1 + val2
    return result
}

var ans : number = 0
ans = TEMP(10,11)
console.log("addition is:" +ans)
console.log(typeof(TEMP))
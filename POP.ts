function addition(first : number , second :number)
{
    var ans : number = 0
    ans = first + second
    return ans
}

function sunbtraction(first : number , second :number)
{
    var ans : number = 0
    ans = first - second
    return ans
}

var value1 : number = 11
var value2 : number = 10
var result : number = 0
result = addition(value1, value2)
console.log("Addition is "+ result)

result = sunbtraction(value1, value2)
console.log("subtraction is "+ result)


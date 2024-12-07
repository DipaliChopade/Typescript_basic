function multiplication (no1 : number, no2: number) : number  //function definition
{
    //local variable
    var result : number = 0
    result = no1*no2
    return result
}

//exceution of code start from here
var no1 : number = 10
var no2 : number = 10
var result : number = 0
result = multiplication(no1, no2) //function call
console.log("multiplication is : " + result)



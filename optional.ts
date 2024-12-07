function circleArea(Rad : number, PI?:number) : number
{
    var area : number = 0
    if(PI == undefined)
    {
        PI = 3.14
    }

    area = PI * Rad * Rad
    return area

}

console.log(circleArea(5.10, 3.14))
console.log(circleArea(5.10))

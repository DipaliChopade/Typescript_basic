    function addition (value1: number, value2 : number) :number
    {
        console.log("Inside the addition")
        var ans : number = 0 // local variable 
        ans = value1 + value2
        return ans
    }

    console.log("start of application") //execution of program start from here
    var result : number = 0
    result = addition(10,11) //from here control will go to 1st line
    console.log("Addition is:" +result)
    console.log("end of application")
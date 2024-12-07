    function DispalyClass(Age : number) : boolean
    {
    if(Age >= 60)
    {
        return true
    }
    else
    {
        return false
    }
    }

    var age : number = 34
    var result : boolean = false

    result = DispalyClass(age)
    if(result == true)
    {
        console.log("You are senior citizen")
    }
    else
    {
        console.log("You are not senior citizen")
    }

 

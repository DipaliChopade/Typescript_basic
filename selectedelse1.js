function DispalyClass(Age) {
    if (Age >= 60) {
        return true;
    }
    else {
        return false;
    }
}
var age = 34;
var result = false;
result = DispalyClass(age);
if (result == true) {
    console.log("You are senior citizen");
}
else {
    console.log("You are not senior citizen");
}

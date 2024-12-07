function addition(first, second) {
    var ans = 0;
    ans = first + second;
    return ans;
}
function sunbtraction(first, second) {
    var ans = 0;
    ans = first - second;
    return ans;
}
var value1 = 11;
var value2 = 10;
var result = 0;
result = addition(value1, value2);
console.log("Addition is " + result);
result = sunbtraction(value1, value2);
console.log("subtraction is " + result);

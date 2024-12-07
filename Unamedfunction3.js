//lambda statement
var TEMP = function (val1, val2) {
    console.log("inside addition lambda statement");
    var result = 0;
    result = val1 + val2;
    return result;
};
var ans = 0;
ans = TEMP(10, 11);
console.log("addition is:" + ans);
console.log(typeof (TEMP));

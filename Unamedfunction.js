var TEMP = function (value1, value2) {
    console.log("Inside the addition");
    var ans = 0;
    ans = value1 + value2;
    console.log("Addition is :" + ans);
};
console.log("start of application");
TEMP(10, 11);
console.log("end of application");
console.log(typeof (TEMP));

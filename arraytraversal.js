var num = new Array(4);
num = [11, 21, 51, 101];
var i = 0;
for (i = 0; i < num.length; i++) {
    console.log(num[i]);
}
var sum = 0;
for (i = 0; i < num.length; i++) {
    sum = sum + num[i];
}
console.log("sum :" + sum);

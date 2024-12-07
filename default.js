function calculatepercentage(marks, outof) {
    if (outof === void 0) { outof = 500; }
    var result = 0;
    result = (marks / outof) * 100;
    return result;
}
console.log(calculatepercentage(230));
console.log(calculatepercentage(230, 300));

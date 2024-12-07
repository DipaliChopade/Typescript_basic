function circleArea(Rad, PI) {
    var area = 0;
    if (PI == undefined) {
        PI = 3.14;
    }
    area = PI * Rad * Rad;
    return area;
}
console.log(circleArea(5.10, 3.14));
console.log(circleArea(5.10));

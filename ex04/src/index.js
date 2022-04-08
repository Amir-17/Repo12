function sumFibonacci(num) {
    var num0 = 0;
    var num1 = 1;
    var sum = 0;
    while (num1 <= num) {
        if (num === 1) {
            return 1;
        } else if (num1 % 2 !== 0) {
            sum += num1;
        } else {
            num1 += num0;
            num0 = num1 - num0;
        };
    };
    return sum;
};
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));

module.exports = sumFibonacci;
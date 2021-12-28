const calculator = {
    plus: function (a, b) {
        console.log(a + b);
    },
    minus: function (a, b) {
        console.log(a - b);
    },
    devide: function (a, b) {
        console.log(a / b);
    },
    power: function (a, b) {
        console.log(a ** b);
    }
};

calculator.plus(1, 5);
calculator.minus(3, 5);
calculator.power(2, 3);
calculator.devide(10, 5);

const input = prompt('이름은?');
console.log(input);
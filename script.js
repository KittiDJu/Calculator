var num1 = '';
var num2 = '';
var oper = '';
var screen = '';
function setNumber(number) {
    screen = screen + number;

    if (oper) {
        num2 = num2 + number;
    } else {
        num1 = num1 + number;
    }

    document.getElementById('display').innerHTML = screen;
}
function setOperator(operator) {
    if (num1) {

        let size = screen.length;

        if (oper) {
            screen = screen.replaceAt((size - 1), operator);
        } else {
            screen = screen + operator;
        }
        oper = operator;
        document.getElementById('display').innerHTML = screen;
    }
}
function result() {
    let total = 0;
    if (oper == '+') {
        total = Number(num1) + Number(num2)
    } else if (oper == '-') {
        total = Number(num1) - Number(num2)
    } else if (oper == '*') {
        total = Number(num1) * Number(num2)
    } else if (oper == '/') {
        total = Number(num1) / Number(num2)
    }
    num1 = total;
    num2 = ''
    oper = '';
    document.getElementById('result').innerHTML = total;
}
function allClear(){
    num1 = '';
    num2 = '';
    oper = '';
    screen = '';
    document.getElementById('display').innerHTML = "0";
    document.getElementById('result').innerHTML = "0";
}

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

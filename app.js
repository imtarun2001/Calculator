let container = document.getElementById('container');
    let calculator = document.getElementById('calculator');
        let resultDisplayer = document.getElementById('resultDisplayer');
            let resultText = document.getElementById('resultText');
            let result = document.getElementById('result');
        let trigonometricOperators = document.getElementById('trigonometricOperators');
            let sin = document.getElementById('sin');
            let cos = document.getElementById('cos');
            let tan = document.getElementById('tan');
            let cot = document.getElementById('cot');
            let sec = document.getElementById('sec');
            let cosec = document.getElementById('cosec');
        let digitsNOtherOperators = document.getElementById('digitsNOtherOperators');
            let logNPowerOperators = document.getElementById('logNPowerOperators');
                let log = document.getElementById('log');
                let x2 = document.getElementById('x2');
                let squareRoot = document.getElementById('squareRoot');
                let pi = document.getElementById('pi');
                let clear = document.getElementById('clear');
                let backspace = document.getElementById('backspace');
            let digitsNArithmaticOperators = document.getElementById('digitsNArithmaticOperators');
                let digits = document.getElementById('digits');
                    let initial3 = document.getElementById('initial3');
                        let one = document.getElementById('one');
                        let two = document.getElementById('two');
                        let three = document.getElementById('three');
                    let middle3 = document.getElementById('middle3');
                        let four = document.getElementById('four');
                        let five = document.getElementById('five');
                        let six = document.getElementById('six');
                    let last3 = document.getElementById('last3');
                        let seven = document.getElementById('seven');
                        let eight = document.getElementById('eight');
                        let nine = document.getElementById('nine');
                    let lastA3 = document.getElementById('lastA3');
                    let zeroZero = document.getElementById('zeroZero');
                        let zero = document.getElementById('zero');
                        let dot = document.getElementById('dot');
                let arithmaticOperators = document.getElementById('arithmaticOperators');
                    let equals = document.getElementById('equals');
                    let plus = document.getElementById('plus');
                    let minus = document.getElementById('minus');
                    let multiply = document.getElementById('multiply');
                    let divide = document.getElementById('divide');
                    let percentage = document.getElementById('percentage');


function onClickOnSin() {
    if(result.innerHTML.charAt(result.innerHTML.length-1) === '' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '+' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '-' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '*' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '/' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '%') {
            result.innerHTML += 'sin';
    }
    else {
        alert('Insert an operator first');
    }
}
sin.addEventListener('click',onClickOnSin);

function onClickOnCos() {
    if(result.innerHTML.charAt(result.innerHTML.length-1) === '' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '+' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '-' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '*' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '/' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '%') {
            result.innerHTML += 'cos';
    }
    else {
        alert('Insert an operator first');
    }
}
cos.addEventListener('click',onClickOnCos);

function onClickOnTan() {
    if(result.innerHTML.charAt(result.innerHTML.length-1) === '' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '+' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '-' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '*' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '/' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '%') {
            result.innerHTML += 'tan';
    }
    else {
        alert('Insert an operator first');
    }
}
tan.addEventListener('click',onClickOnTan);

function onClickOnCot() {
    if(result.innerHTML.charAt(result.innerHTML.length-1) === '' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '+' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '-' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '*' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '/' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '%') {
            result.innerHTML += 'cot';
    }
    else {
        alert('Insert an operator first');
    }
}
cot.addEventListener('click',onClickOnCot);

function onClickOnSec() {
    if(result.innerHTML.charAt(result.innerHTML.length-1) === '' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '+' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '-' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '*' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '/' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '%') {
            result.innerHTML += 'sec';
    }
    else {
        alert('Insert an operator first');
    }
}
sec.addEventListener('click',onClickOnSec);

function onClickOnCosec() {
    if(result.innerHTML.charAt(result.innerHTML.length-1) === '' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '+' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '-' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '*' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '/' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '%') {
            result.innerHTML += 'cosec';
    }
    else {
        alert('Insert an operator first');
    }
}
cosec.addEventListener('click',onClickOnCosec);

function onClickOnLog() {
    result.innerHTML = 'log';
}
log.addEventListener('click',onClickOnLog);

function onClickOnX2() {
    let str = result.innerHTML;
    let num = parseInt(str,10);
    if(!isNaN(num)) {
        num *= num;
        result.innerHTML = num;
    }
    else {
        alert('insert a number');
    }
}
x2.addEventListener('click',onClickOnX2);

function onClickOnSquareRoot() {
    let num = parseInt(result.innerHTML);
    if(!isNaN(num)) {
        let sqroot = Math.sqrt(num);
        result.innerHTML = sqroot;
    }
    else {
        alert('Square root can only be calculated of a number');
    }
}
squareRoot.addEventListener('click',onClickOnSquareRoot);

function onClickOnPi() {
    let lastChar = result.innerHTML.slice(-1);
    let lastWord = result.innerHTML.split(' ').slice(-1)[0];
    if (lastChar === '' || lastChar === '+' || lastChar === '-' || lastChar === '*' ||
        lastChar === '/' || lastChar === '%' || lastWord === 'sin' || lastWord === 'cos' ||
        lastWord === 'tan' || lastWord === 'cot' || lastWord === 'sec' || lastWord === 'cosec') {
        result.innerHTML += '3.1415926';
    }
    else {
        alert('Insert an Arithmatic operator or Trigonometric function first')
    }
}
pi.addEventListener('click',onClickOnPi);

function onClickOnClear() {
    result.innerHTML = '';
}
clear.addEventListener('click',onClickOnClear);

function onClickOnBackSpace() {
    let arr = result.innerHTML.split('');
    arr.pop();
    result.innerHTML = arr.join('');
}
backspace.addEventListener('click',onClickOnBackSpace);

function onClickOnOne() {
    result.innerHTML += '1';
}
one.addEventListener('click',onClickOnOne);

function onClickOnTwo() {
    result.innerHTML += '2';
}
two.addEventListener('click',onClickOnTwo);

function onClickOnThree() {
    result.innerHTML += '3';
}
three.addEventListener('click',onClickOnThree);

function onClickOnFour() {
    result.innerHTML += '4';
}
four.addEventListener('click',onClickOnFour);

function onClickOnFive() {
    result.innerHTML += '5';
}
five.addEventListener('click',onClickOnFive);

function onClickOnSix() {
    result.innerHTML += '6';
}
six.addEventListener('click',onClickOnSix);

function onClickOnSeven() {
    result.innerHTML += '7';
}
seven.addEventListener('click',onClickOnSeven);

function onClickOnEight() {
    result.innerHTML += '8';
}
eight.addEventListener('click',onClickOnEight);

function onClickOnNine() {
    result.innerHTML += '9';
}
nine.addEventListener('click',onClickOnNine);

function onClickOnZeroZero() {
    result.innerHTML += '00';
}
zeroZero.addEventListener('click',onClickOnZeroZero);

function onClickOnZero() {
    result.innerHTML += '0';
}
zero.addEventListener('click',onClickOnZero);

function onClickOnDot() {
    if(result.innerHTML.includes('.')) {
        alert(`can't use multiple decimal points`);
    }
    else if(result.innerHTML.charAt(result.innerHTML.length-1) === 'n' ||
            result.innerHTML.charAt(result.innerHTML.length-1) === 's' ||
            result.innerHTML.charAt(result.innerHTML.length-1) === 't' ||
            result.innerHTML.charAt(result.innerHTML.length-1) === 'c' ||
            result.innerHTML.charAt(result.innerHTML.length-1) === '+' ||
            result.innerHTML.charAt(result.innerHTML.length-1) === '-' ||
            result.innerHTML.charAt(result.innerHTML.length-1) === '*' ||
            result.innerHTML.charAt(result.innerHTML.length-1) === '/' ||
            result.innerHTML.charAt(result.innerHTML.length-1) === '%' ||
            result.innerHTML.charAt(result.innerHTML.length-1) === 'g') {
        alert('insert a number first');
    }
    else {
        result.innerHTML += '.';
    }
}
dot.addEventListener('click',onClickOnDot);

function onClickOnEquals(expression) {
    result.innerHTML = eval(expression);
}
equals.addEventListener('click',() => {
    onClickOnEquals(result.innerHTML);
})

function onClickOnPlus() {
    if(result.innerHTML.charAt(result.innerHTML.length-1) === 'n' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === 's' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === 't' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === 'c' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '.' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === 'g') {
        alert('insert a number first');
    }
    else if(result.innerHTML.charAt(result.innerHTML.length-1) === '+' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '-' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '*' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '/' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '%') {
            alert(`Can't insert an operator just after another operator`)
    }
    else if(result.innerHTML === '') {
        alert('insert a number then add operator');
    }
    else {
        result.innerHTML += '+';
    }
}
plus.addEventListener('click',onClickOnPlus);

function onClickOnMinus() {
    if(result.innerHTML.charAt(result.innerHTML.length-1) === 'n' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === 's' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === 't' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === 'c' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '.' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === 'g') {
        alert('insert a number first');
    }
    else if(result.innerHTML.charAt(result.innerHTML.length-1) === '+' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '-' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '*' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '/' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '%') {
            alert(`Can't insert an operator just after another operator`)
    }
    else if(result.innerHTML === '') {
        alert('insert a number then add operator');
    }
    else {
        result.innerHTML += '-';
    }
}
minus.addEventListener('click',onClickOnMinus);

function onClickOnMultiply() {
    if(result.innerHTML.charAt(result.innerHTML.length-1) === 'n' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === 's' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === 't' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === 'c' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '.' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === 'g') {
        alert('insert a number first');
    }
    else if(result.innerHTML.charAt(result.innerHTML.length-1) === '+' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '-' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '*' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '/' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '%') {
            alert(`Can't insert an operator just after another operator`)
    }
    else if(result.innerHTML === '') {
        alert('insert a number then add operator');
    }
    else {
        result.innerHTML += '*';
    }
}
multiply.addEventListener('click',onClickOnMultiply);

function onClickOnDivide() {
    if(result.innerHTML.charAt(result.innerHTML.length-1) === 'n' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === 's' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === 't' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === 'c' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '.' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === 'g') {
        alert('insert a number first');
    }
    else if(result.innerHTML.charAt(result.innerHTML.length-1) === '+' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '-' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '*' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '/' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '%') {
            alert(`Can't insert an operator just after another operator`)
    }
    else if(result.innerHTML === '') {
        alert('insert a number then add operator');
    }
    else {
        result.innerHTML += '/';
    }
}
divide.addEventListener('click',onClickOnDivide);

function onClickOnPercentage() {
    if(result.innerHTML.charAt(result.innerHTML.length-1) === 'n' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === 's' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === 't' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === 'c' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '.' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === 'g') {
        alert('insert a number first');
    }
    else if(result.innerHTML.charAt(result.innerHTML.length-1) === '+' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '-' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '*' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '/' ||
        result.innerHTML.charAt(result.innerHTML.length-1) === '%') {
            alert(`Can't insert an operator just after another operator`)
    }
    else if(result.innerHTML === '') {
        alert('insert a number then add operator');
    }
    else {
        result.innerHTML += '%';
    }
}
percentage.addEventListener('click',onClickOnPercentage);
const zero = document.getElementById("zero")
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const multiply = document.getElementById("multiply")
const divide = document.getElementById("divide")
const equals = document.getElementById("equals")
const clear = document.getElementById("clear")
const dot = document.getElementById("dot")

keys = [zero, one, two, three, four, five, six, seven, eight, nine, plus, minus, multiply, divide, equals, clear, dot]

var num1 = ''
var num2 = ''
var operator = ''

keys.forEach(key => {
    key.addEventListener('click', () => {
        if (key.id == 'clear') {
            num1 = ''
            num2 = ''
            operator = ''
            document.getElementById('display').innerHTML = ''
        }
        else if (key.id == 'equals') {
            if (operator == '+') {
                document.getElementById('display').innerHTML = Math.round((parseFloat(num1) + parseFloat(num2)) * 100) / 100
            }
            else if (operator == '-') {
                document.getElementById('display').innerHTML = Math.round((parseFloat(num1) - parseFloat(num2)) * 100) / 100

            }
            else if (operator == '*') {
                document.getElementById('display').innerHTML = Math.round((parseFloat(num1) * parseFloat(num2)) * 100) / 100
            }
            else if (operator == '/') {
                document.getElementById('display').innerHTML = Math.round((parseFloat(num1) / parseFloat(num2)) * 100) / 100
            }
        }
        else if (key.id == 'plus') {
            operator = '+'
            document.getElementById('display').innerHTML = ''
        }
        else if (key.id == 'minus') {
            operator = '-'
            document.getElementById('display').innerHTML = ''
        }
        else if (key.id == 'multiply') {
            operator = '*'
            document.getElementById('display').innerHTML = ''
        }
        else if (key.id == 'divide') {
            operator = '/'
            document.getElementById('display').innerHTML = ''
        }
        else {
            if(operator == '') {
                num1 += key.innerHTML
                document.getElementById('display').innerHTML = num1
            }
            else {
                num2 += key.innerHTML
                document.getElementById('display').innerHTML = num2
            }
        }
    })
});


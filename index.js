let firstNumber = document.getElementById("firstNum");
let symbol = document.getElementById("symbol");
let secondNumber = document.getElementById("secondNum");
let finalResult = document.getElementById("result");
let claculateBtn = document.getElementById("calculateButton");

claculateBtn.onclick = function() {
    let firstInputNumber = firstNumber.value;
    let symbolValue = symbol.value;
    let secondNumberInput = secondNumber.value;

    if (firstInputNumber === "") {
        alert("ENTER FIRST NUMBER");
    } else if (symbolValue === "") {
        alert("ENTER SYMBOL");
    } else if (secondNumberInput === "") {
        alert("ENTER SECOND NUMBER");
    } else {
        let firstParsedValue = parseInt(firstInputNumber);
        let secondParsedValue = parseInt(secondNumberInput);
        if (symbolValue === "+") {
            let sumValue = firstParsedValue+secondParsedValue;
            finalResult.value = sumValue;
        }
        else if (symbolValue === "-") {
            let differenceValue = firstParsedValue-secondParsedValue;
            finalResult.value = differenceValue;
        }
        else if (symbolValue === "*") {
            let multiplicationValue = firstParsedValue*secondParsedValue;
            finalResult.value = multiplicationValue;
        }
        else if (symbolValue === "/") {
            let divisionValue = firstParsedValue/secondParsedValue;
            finalResult.value = divisionValue;
        }
        else if (symbolValue === "%") {
            let divisionValue = (firstParsedValue/secondParsedValue)*100;
            finalResult.value = divisionValue;
        }
        
    }
}
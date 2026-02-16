// Yen Lang
// CIS 4004
// Week 5: Basic JavaScript
// February 17, 2026


let counterValue = 0;

// update counter display
function updateCounterDisplay() {
    document.getElementById("counter").textContent = counterValue;
}

// increase counter
function tickUp() {
    counterValue++;
    updateCounterDisplay();
}

// decrease counter
function tickDown() {
    counterValue--;
    updateCounterDisplay();
}

// loop display
function runForLoop() {
    let output = "";

    for (let i = 0; i <= counterValue; i++) {
        output += i + " ";
    }

    document.getElementById("forLoopResult").textContent = output.trim();
}

// show odd numbers
function showOddNumbers() {
    let output = "";

    for (let i = 1; i <= counterValue; i++) {
        if (i % 2 !== 0) {
            output += i + " ";
        }
    }

    document.getElementById("oddNumberResult").textContent = output.trim();
}

// multiples of 5 array reversed
function addMultiplesToArray() {
    let arr = [];

    if (counterValue < 5) {
        console.log(arr);
        return;
    }

    for (let i = 5; i <= counterValue; i += 5) {
        arr.push(i);
    }

    arr.reverse();
    console.log(arr);
}

// Print car object from form
function printCarObject() {
    const carObj = {
        cType: document.getElementById("carType").value,
        cMPG: document.getElementById("carMPG").value,
        cColor: document.getElementById("carColor").value
    };

    console.log(carObj);
}

// Load car data into form
function loadCar(num) {
    let selectedCar;

    if (num === 1) selectedCar = carObject1;
    else if (num === 2) selectedCar = carObject2;
    else if (num === 3) selectedCar = carObject3;
    else return;

    document.getElementById("carType").value = selectedCar.cType;
    document.getElementById("carMPG").value = selectedCar.cMPG;
    document.getElementById("carColor").value = selectedCar.cColor;
}

// Change paragraph color
function changeColor(num) {
    const p = document.getElementById("styleParagraph");

    if (num === 1) p.style.color = "red";
    else if (num === 2) p.style.color = "green";
    else if (num === 3) p.style.color = "blue";
}

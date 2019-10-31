Calculator = function() {
    this.value = 0;
}

Calculator.prototype.add = function(number) {
    if (typeof(number)=="number") {
        this.value += number;
    } else {
        alert("Error!");
    }
}




// function addition (numOne, NumTwo) {
//     if (typeof(numOne) == "number" && typeof(NumTwo)=="number") {
//         return numOne + NumTwo;
//     } else {
//         alert("Error!");
//     }
// }
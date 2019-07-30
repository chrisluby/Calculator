let add = function(a, b) {return a + b};
let subtract = function(a, b) {return a - b};
let multiply = function(a, b) {return a * b};
let divide = function(a, b) {return a / b};
let userInput = [];


btns = document.querySelectorAll('button');
display = document.querySelector('h2');
clearButton = document.querySelector('.clear .clear');




//Clear button functionality
clearButton.addEventListener('click', function(){
    userInput = [];
});


//Adds userInput functionality to each button
btns.forEach(function(b, i,){
    // console.log(b);
    // console.log(i);
    b.addEventListener('click', function(){
        userInput.push((this.value));
        display.innerHTML = userInput.join("")});   //Displays the array userInput as a string with no seperators.
});


let operator = function(op, a, b) {
    if (op === "add") {
        a = add(a, b)
        return a;
    } else if (op === "subtract") {
        s = subtract(a, b)
        return s;
    } else if (op === "multiply") {
        m = multiply(a, b)
        return m;
    } else if (op === "divide") {
    d = divide(a, b)
        return d;
    } else {console.log("ERROR"), alert("SOMETHING WENT WRONG");}
}; 
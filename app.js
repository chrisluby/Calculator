let add = function(a, b) {return a + b};
let subtract = function(a, b) {return a - b};
let multiply = function(a, b) {return a * b};
let divide = function(a, b) {return a / b};

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
        return d;} 
    else {console.log("ERROR"), alert("SOMETHING WENT WRONG");}
};    
console.log(add(1, 2))
console.log(operator("asdract", 1, 1));
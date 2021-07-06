let expression = prompt("Enter an expression");
function reverse(x) {  
    return x.split("").reverse().join("")
}
console.log(reverse(expression));
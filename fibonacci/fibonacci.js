// This code returns the fibonacci number according to the number given by the user

function fibonacci(x) {
    let fib = [1,2];
    if (x < 1){
        return "Invalid number"
    }else if (x <= 2) {
        return fib[x-1];
    }
    i = 2;
    while (x > fib.length) {
        fib.push(fib[i-2] + fib[i-1]);
        i++;
    }
    return fib[x-1];
}
console.log(fibonacci(prompt("Enter a number: ")));
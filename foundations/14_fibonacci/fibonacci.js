const fibonacci = function(num) {
    if (typeof num == "string") {
        num = Number.parseInt(num);
    }

    if (num == 0) {
        return 0;
    }

    if (num == 1) {
        return 1;
    }
    
    if (num < 0) {
        return "OOPS";
    }

    let fib = {
        current: 0,
        result: 1,
    }

    for (let i = 0; i < num - 1; i++) {
        const result = fib.current + fib.result;
        fib.current = fib.result;
        fib.result = result;
    }

    return fib.result;
};

// Do not edit below this line
module.exports = fibonacci;

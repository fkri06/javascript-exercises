const palindromes = function (string) {
    let isPalindrome = true;

    string = string.toLowerCase();

    if (string.includes(" ")) {
        string = string.split(" ").join("");
    }

    if (string.includes(",")) {
        string = string.split(",").join("");
    }

    if (string.includes("!")) {
        string = string.split("!").join("");
    }

    if (string[string.length - 1] === ".") {
        string = string.replace(".", "").split(",").join("").split(" ").join("");
    }

    for (let i = 0; i < Math.round(string.length / 2); i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            isPalindrome = false;
        }
    }

    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;

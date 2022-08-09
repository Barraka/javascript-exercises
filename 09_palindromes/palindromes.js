const palindromes = function (str) {
    str = str.toLowerCase();
    str=str.replace(/[^a-z]/gi,'');
    let comp=str.split("").reverse().join("");
    return str===comp;
};

// Do not edit below this line
module.exports = palindromes;

const reverseString = function(w) {
    let output='';
    let word=w.split('').reverse();
    for(let l of word)output+=l;
    return output;
};

// Do not edit below this line
module.exports = reverseString;

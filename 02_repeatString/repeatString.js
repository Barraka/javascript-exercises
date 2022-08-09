const repeatString = function(s,n=1) {
    if(n<0)return 'ERROR';
    let result='';
    for(let i=1;i<=n;i++)result+=s;
    return result;
};

// Do not edit below this line
module.exports = repeatString;

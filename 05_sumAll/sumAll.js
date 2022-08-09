const sumAll = function(s,f) {
    if(s>f) {
        let temp=s;
        s=f;
        f=temp;
    }
    if(s<0 || typeof(s)!=='number' || typeof(f)!=='number')return 'ERROR';
    let result=0;
    for(;s<=f;s++)result+=s;
    return result;
};

// Do not edit below this line
module.exports = sumAll;

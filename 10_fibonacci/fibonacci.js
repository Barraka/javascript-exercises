const fibonacci = function(n) {
    if(n<0)return 'OOPS';
    let a = 0, b=1,temp=0;
    for(let i=1;i<Number(n);i++) {
        temp=b;
        b=a+b;
        a=temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;

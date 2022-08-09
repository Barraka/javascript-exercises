const findTheOldest = function(array) {
    let oldest=0;
    let result=[1];
    let age=0;
    array.forEach(x=> {
        (x.hasOwnProperty("yearOfDeath")) ? age=x.yearOfDeath-x.yearOfBirth : age=(new Date().getFullYear())-x.yearOfBirth;
        if(age>oldest){
            oldest=age;
            result[0]=x;
        }
    });
    return result[0];
};

// Do not edit below this line
module.exports = findTheOldest;

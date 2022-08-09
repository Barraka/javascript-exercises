const leapYears = function(year) {
    return (new Date(year,2,0).getDate()===29);
};

// Do not edit below this line
module.exports = leapYears;

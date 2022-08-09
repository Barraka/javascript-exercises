const removeFromArray = function(array,...values) {
    let result=array.filter((e)=>!values.includes(e)); 
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;

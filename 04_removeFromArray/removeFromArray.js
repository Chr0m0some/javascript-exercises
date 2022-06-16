const removeFromArray = function(the_array, ...stuff_to_remove) {
    //filter function will return whatever is true of the arrow function
    //Arrow function below goes through each value in the array and returns true for values that are not part of stuff_to_remove
    //Include function gets back a boolean of whether a value is in stuff_to_remove
    return the_array.filter(value => !stuff_to_remove.includes(value));  
};

// Do not edit below this line
module.exports = removeFromArray;

/* 
    Turn the argument into a number 
    IF the argument is negative or 0:
        return ERROR message
    ELSE IF the argument is equal to 1 or 2:
        return 1 since those are the values of those fibonacci members
    return the sum of the past two fibonacci members since that is the formula for obtaining the value of each fibonacci member
*/
const fibonacci = function(number) {
    let cleaned_number = Number(number);
    if (cleaned_number <= 0) return 'OOPS';
    else if (cleaned_number === 1 || cleaned_number === 2) return 1;
    return (fibonacci(cleaned_number - 1) + fibonacci(cleaned_number - 2));
};

// Do not edit below this line
module.exports = fibonacci;

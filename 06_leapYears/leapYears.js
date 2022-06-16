/* function leapYears
    IF the year is divible by 4 or 400 but not exclusively divisible by 100:
        It's a leap year */
const leapYears = function(year) {
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) return true;
    return false;
};

// Do not edit below this line
module.exports = leapYears;

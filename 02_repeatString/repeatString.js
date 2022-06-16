const repeatString = function(string, num) {
    let longer_string = '';
    for(let i = 0; i < num; i++){
        longer_string += string;
    }
    return longer_string;
};

// Do not edit below this line
module.exports = repeatString;

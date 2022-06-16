const reverseString = function(string) {
    let reversed_string = '';
    for(let i = string.length - 1; i >= 0; i--){
        reversed_string += string[i];
    }
    return reversed_string;
};

const reverseString2 = function(string){
    return string.split('').reverse().join('');
}

// Do not edit below this line
module.exports = reverseString2;

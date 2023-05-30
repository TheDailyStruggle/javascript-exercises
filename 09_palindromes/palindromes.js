const palindromes = function (string) {
    let alphaOnly = string.replaceAll(/[^0-9a-z]/gi, "");
    let noSpaces = alphaOnly.replace(" ", "");
    let lowerCase = noSpaces.toLowerCase();
    let splitString = lowerCase.split("");
    let reverseArray = splitString.reverse();
    let reversedString = reverseArray.join();
    let newString = reversedString.replaceAll(",", "");

    if (lowerCase === newString) {
        return true;
    } else {
        return false;
    }
};


// Do not edit below this line
module.exports = palindromes;

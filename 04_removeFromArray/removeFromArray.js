const removeFromArray = function (array, ...theArgs) {
    const newArray = [];
    array.forEach((arg) => {
        if (!theArgs.includes(arg)) {
            newArray.push(arg)
        }
    })
    return newArray
}

// Do not edit below this line
module.exports = removeFromArray;

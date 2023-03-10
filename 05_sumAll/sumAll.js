const sumAll = function (first, last) {
    let min = first;
    let max = last;
    let total = 0;

    if (typeof (first) !== "number" || typeof (last) !== "number") {
        return "ERROR";
    } else {
        if (first < 0 || last < 0) {
            return "ERROR"
        } else {
            if (first > last) {
                let min = last;
                let max = first;
                for (let i = min; i < max + 1; i++) {
                    total += i;
                }
                return total;
            } else {
                for (let i = min; i < max + 1; i++) {
                    total += i;
                }
                return total;
            }
        }
    }
};


// Do not edit below this line
module.exports = sumAll;

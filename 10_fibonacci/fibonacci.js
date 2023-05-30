const fibonacci = function (num) {
    if (num <= 0) {
        return ('OOPS');
    } else {
        const number = parseInt(num);
        let a = 0;
        let b = 1;
        for (let i = 2; i <= number; i++) {
            let c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
};

// Do not edit below this line
module.exports = fibonacci;

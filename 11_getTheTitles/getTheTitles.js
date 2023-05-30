const getTheTitles = function (books) {
    // const theTitles = books.map((book) => book.title)
    // return theTitles;
    const theTitles = books.map(function (book) {
        return book.title
    })
    return theTitles
};

// Do not edit below this line
module.exports = getTheTitles;

let app = angular.module("Booker", []);




app.controller("getdat", function ($scope, CheckedOutBooks) {
    $scope.books = CheckedOutBooks.get();
    $scope.getdatbook = function (book) {
        CheckedOutBooks.borrow(book, $scope.name);
    }
});


app.factory("CheckedOutBooks", function () {
    let borrowed = [];
    let books = [{ book: "Spaghetti Encyclopedia", author: "Landon Burnier", borrower: "", }, { book: "Book Number 42", author: "Some Irish Gentleman", borrower: "",}];

    return {

        get: function () {
            return books;
        },

        getdat: function (BookName, username) {
            for (let i = 0; i < books.length; i++) {
                if (books[i].title === BookName) {
                    books[i].borrower = username;
                }
            }
        },

        borrowed: function (person) {
            let outList = [];
            for (let i = 0; i < books.length; i++) {
                if (user === books[i].borrower) {
                    outList.push(books[i]);
                }
            }
            console.log(outlist);
            return outList;
        }
    }
});

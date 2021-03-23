//Only change code below this line
class Book {
    constructor(title){
        this.title = title;
    }
    get title(){
        return this._title;
    }
    set title(newTitle){
        this._title = newTitle;
    }
}

//Only change code below this line
const littlePrince = new Book("The Little Prince"); //Change this line
console.log(littlePrince.title); //The little Prince
littlePrince.title = "Le Petit Prince"; //Change this line
console.log(littlePrince.title);

module.exports = Book;
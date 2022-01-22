const btn = document.querySelector(".btn")


let myLibrary = [];

btn.addEventListener("click", )




function Book(name) {
  // the constructor...
  this.name = name;
}

function addBookToLibrary(object) {
  // do stuff here
  myLibrary.push(object.name);
  console.log(myLibrary);
}

function displayBook() {
    for (const books of myLibrary) {
       console.log(books);
    }
}

function addForm() {
  
}
//  const tomjerry = new Book("Tom and Jerry!");
//  const packandjon = new Book("Pack and Jon!");
//  addBookToLibrary(tomjerry);
//  addBookToLibrary(packandjon);
//  displayBook();


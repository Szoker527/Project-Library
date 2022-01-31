const btn = document.getElementById("btnform");
const form = document.getElementById("bookform");
const overlay = document.getElementById("overlay");
const titleInput = document.getElementById("title").value;
const authorInput = document.getElementById("author").value;
const pagesInput = document.getElementById("pages").value;
const middle = document.getElementById("bookshow");
const newBook = document.createElement("div");
const newTitle = document.createElement("p");
const buttonSubmit = document.getElementById("submitbutton");
let myLibrary = [];


btn.addEventListener("click", addForm)

overlay.addEventListener("click", removeForm)

buttonSubmit.addEventListener("click", addBook)

function Book(name, author, pages) {
  // the constructor...
  this.name = name;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(object) {
  // do stuff here
  myLibrary.push(object.name);
  myLibrary.push(object.author);
  myLibrary.push(object.pages);
  console.log(myLibrary);
}

function displayBook() {
  middle.appendChild(newBook);
  newBook.classList.add("addedbook");

    for (const books of myLibrary) {
       console.log(books);
    }
}

function addForm() {
  form.classList.add("formactive")
  overlay.classList.add("active")
}

function removeForm() {
  form.classList.remove("formactive")
  overlay.classList.remove("active")
}

function addBook() {
  const bookAdd = new Book(`${titleInput}`, `${authorInput}`, `${pagesInput}`);
  addBookToLibrary(bookAdd);
  console.log(myLibrary);
  
}

//  const packandjon = new Book("Pack and Jon!");

//  addBookToLibrary(packandjon);



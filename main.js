// Library array to hold book objects
let myLibrary = [];

// Constructor
function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

// Adds Book instances to myLibrary array
function addBook(book) {
  myLibrary.push(book);
}

const songOfTheLioness = new Book(
  "Song of the Lioness",
  "Tamora Pierce",
  364,
  true
);

const twilight = new Book("Twilight", "Stephanie Meyer", 407, true);

const newMoon = new Book("New Moon", "Stephanie Meyer", 787, true);

addBook(songOfTheLioness);
addBook(twilight);
addBook(newMoon);

// Tests
console.log(myLibrary);
console.log(songOfTheLioness.status);
console.log(myLibrary[1]);

// Modal interactivity

const addBtn = document.querySelector(".add");
const modalCtnr = document.querySelector(".modal-container");
const submit = document.querySelector("#submit");
const closeBtn = document.querySelector("#close");

// Hides modal
function removeModal() {
  modalCtnr.classList.remove("show");
}

addBtn.addEventListener("click", () => {
  modalCtnr.classList.add("show");
});
submit.addEventListener("submit", removeModal);
closeBtn.addEventListener("click", removeModal);

// Modal interactivity

const addBtn = document.querySelector(".add");
const modalCtnr = document.querySelector(".modal-container");
const submit = document.querySelector("#submit");
const closeBtn = document.querySelector("#close");
let bookContainer = document.querySelector(".books");

// Hides modal
function removeModal() {
  modalCtnr.classList.remove("show");
}

let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function makeBook(e) {
  // get input from form, make new book with input
  e.preventDefault();

  let title = document.getElementById("title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let isRead = document.querySelector("#read-status").checked;

  let book = new Book(title, author, pages, isRead);
  addBookToLibrary(book);
  makeLibrary();
  resetForm();
}
function resetForm() {
  title.value = "";
  author.value = "";
  pages.value = 0;
}
function makeLibrary() {
  resetLibrary();
  for (let book of myLibrary) {
    makeBookItem(book);
  }
}
function resetLibrary() {
  bookContainer.innerHTML = "";
}
function makeBookItem(book) {
  let bookItem = document.createElement("div");
  let title = document.createElement("h3");
  let author = document.createElement("span");
  let pages = document.createElement("span");
  let isRead = document.createElement("span");

  bookItem.classList.add("book");
  isRead.classList.add("read-class");
  bookItem.appendChild(title);
  bookItem.appendChild(author);
  bookItem.appendChild(pages);
  bookItem.appendChild(isRead);

  bookContainer.appendChild(bookItem);
  author.textContent = `By: ${book.author}`;
  pages.textContent = `${book.pages} pages`;
  title.textContent = `${book.title}`;

  let status = document.querySelector("#read-status").checked;
  if (status === true) {
    isRead.textContent = "Read";
  } else {
    isRead.textContent = "Not Read";
  }

  //bookItem.dataset.book = myLibrary.indexOf(book);
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}
submit.addEventListener("click", (e) => makeBook(e));

addBtn.addEventListener("click", () => {
  modalCtnr.classList.add("show");
});
// addBtn.addEventListener("click", () => {
//   resetForm();
// });
addBtn.addEventListener("click", resetForm);
submit.addEventListener("click", resetForm);
submit.addEventListener("click", removeModal);
closeBtn.addEventListener("click", removeModal);

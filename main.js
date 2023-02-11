// DOM objects
const addBtn = document.querySelector(".add");
const modalCtnr = document.querySelector(".modal-container");
const submit = document.querySelector("#submit");
const closeBtn = document.querySelector("#close");
const bookContainer = document.querySelector(".books");

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  inLibrary(addedBook) {
    return this.books.some((book) => book.title === addedBook.title);
  }
  addBook(addedBook) {
    if (!this.inLibrary(addedBook)) {
      this.books.push(addedBook);
    } else {
      console.log("Book already in Library!");
    }
  }
  resetLibrary() {
    bookContainer.innerHTML = " ";
  }
  removeBook(book) {
    const ind = this.books.indexOf(book);
    if (ind !== -1) {
      return this.books.splice(ind, 1);
    }
  }
  makeLibrary() {
    this.resetLibrary();
    for (let book of this.books) {
      this.createBookItem(book);
    }
  }
  createBookItem(book) {
    const bookItem = document.createElement("div");
    const title = document.createElement("h3");
    const author = document.createElement("span");
    const pages = document.createElement("span");
    const btnContainer = document.createElement("div");
    const isRead = document.createElement("span");
    const deleteBtn = document.createElement("span");

    bookItem.classList.add("book");
    isRead.classList.add("read-class");
    btnContainer.classList.add("btn-container");
    deleteBtn.classList.add("deleteBtn");

    bookItem.appendChild(title);
    bookItem.appendChild(author);
    bookItem.appendChild(pages);
    bookItem.appendChild(btnContainer);
    btnContainer.appendChild(isRead);
    btnContainer.appendChild(deleteBtn);

    bookContainer.appendChild(bookItem);

    author.textContent = `By ${book.author}`;
    pages.textContent = `${book.pages} pages`;
    title.textContent = `${book.title}`;
    deleteBtn.textContent = "Delete";

    const status = document.querySelector("#read-status").checked;
    if (status === true) {
      isRead.textContent = "Read";
    } else {
      isRead.textContent = "Not Read";
    }
    deleteBtn.addEventListener("click", () => {
      this.removeBook(book);
      this.makeLibrary();
    });
  }
}

// Creating myLibrary Object
const myLibrary = new Library();

function makeBook(e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const isRead = document.querySelector("#read-status").checked;

  const book = new Book(title, author, pages, isRead);
  myLibrary.addBook(book);
  myLibrary.makeLibrary();
  resetForm();
}
function resetForm() {
  document.getElementById("title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
  document.querySelector("#read-status").checked = false;
}
function removeModal() {
  modalCtnr.classList.remove("show");
}
function showModal() {
  modalCtnr.classList.add("show");
}

//Event Listeners

addBtn.addEventListener("click", resetForm);
addBtn.addEventListener("click", showModal);
submit.addEventListener("click", makeBook);
submit.addEventListener("click", resetForm);
submit.addEventListener("click", removeModal);
closeBtn.addEventListener("click", removeModal);

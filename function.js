//add books to an array of objects for stoarge then add div for this array index. :D

const addBookForm = document.getElementById("add-book-form");
const titleInput = document.getElementById("title-input");
const authorInput = document.getElementById("author-input");
const genreInput = document.getElementById("genre-input");
const bookGrid = document.querySelector(".book-grid");

let library = [];

class Book {
  constructor(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
  }
}

function addBookToLibrary(book) {
  library.push(book);
}

function displayBooks() {
  bookGrid.innerHTML = "";
  library.forEach((book) => {
    const newBook = document.createElement("div");
    newBook.classList.add("book");

    const bookTitle = document.createElement("h2");
    bookTitle.textContent = book.title;
    newBook.appendChild(bookTitle);

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = `Author: ${book.author}`;
    newBook.appendChild(bookAuthor);

    const bookGenre = document.createElement("p");
    bookGenre.textContent = `Genre: ${book.genre}`;
    newBook.appendChild(bookGenre);

    const bookShelf = document.createElement("div");
    bookShelf.classList.add("book-shelf");
    newBook.appendChild(bookShelf);

    bookGrid.appendChild(newBook);
  });
}

addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Check if all fields are filled out
  if (!titleInput.value || !authorInput.value || !genreInput.value) {
    alert("Please fill out all fields.");
    return;
  }

  const newBook = new Book(
    titleInput.value,
    authorInput.value,
    genreInput.value
  );
  addBookToLibrary(newBook);
  displayBooks();

  titleInput.value = "";
  authorInput.value = "";
  genreInput.value = "";
});

// // Suppose you want to access the title of the first book in the library
// const firstBookTitle = myLibrary[0].title;
// console.log(firstBookTitle); // prints the title of the first book

// // Suppose you want to access the author of the second book in the library
// const secondBookAuthor = myLibrary[1].author;
// console.log(secondBookAuthor); // prints the author of the second book

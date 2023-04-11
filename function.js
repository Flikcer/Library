const addBookForm = document.getElementById("add-book-form");
const titleInput = document.getElementById("title-input");
const authorInput = document.getElementById("author-input");
const genreInput = document.getElementById("genre-input");
const bookGrid = document.querySelector(".book-grid");

addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newBook = document.createElement("div");
  newBook.classList.add("book");

  const bookTitle = document.createElement("h2");
  bookTitle.textContent = titleInput.value;
  newBook.appendChild(bookTitle);

  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = `Author: ${authorInput.value}`;
  newBook.appendChild(bookAuthor);

  const bookGenre = document.createElement("p");
  bookGenre.textContent = `Genre: ${genreInput.value}`;
  newBook.appendChild(bookGenre);

  const bookShelf = document.createElement("div");
  bookShelf.classList.add("book-shelf");
  newBook.appendChild(bookShelf);

  bookGrid.appendChild(newBook);

  titleInput.value = "";
  authorInput.value = "";
  genreInput.value = "";
});

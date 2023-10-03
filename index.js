function fetchBooks() {
  // fetch request to game of thrones api
  // returned response converted to JSON
  // call renderBooks() function passing JSON-ified data as the argument

  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then ((data) => {
      renderBooks(data)
    })
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

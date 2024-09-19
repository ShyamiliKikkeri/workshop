document.addEventListener('DOMContentLoaded', function() {
    const bookBtn = document.getElementById('bookBtn');
    const bookDisplay = document.getElementById('bookDisplay');

    bookBtn.addEventListener('click', function() {
        // Generate a random page number between 1 and 1000 (you can adjust this depending on how many books you want to cover)
        const randomPage = Math.floor(Math.random() * 1000) + 1;

        // Fetching a random book from the Open Library search API
        fetch('https://openlibrary.org/search.json?subject=fiction&page=${randomPage}')
            .then(response => response.json()) // Parsing the JSON response
            .then(data => {
                // Check if we have any books on the selected page
                if (data.docs.length > 0) {
                    // Pick a random book from the current page
                    const randomBookIndex = Math.floor(Math.random() * data.docs.length);
                    const randomBook = data.docs[randomBookIndex];

                    // Extracting book title and author details
                    const bookTitle = randomBook.title;
                    const authors = randomBook.author_name ? randomBook.author_name.join(', ') : 'Unknown Author';

                    // Displaying the book information on the webpage
                    bookDisplay.textContent = 'Title:${bookTitle} | Authors: ${authors}';
                } else {
                    // If no books are found on the page
                    bookDisplay.textContent = 'No books found on this page. Try again!';
                }
            })
            .catch(error => {
                // Handling errors
                bookDisplay.textContent = 'Oops! Something went wrong. Please try again later.';
                console.error('Error fetching book data:', error);
            });
    });
});
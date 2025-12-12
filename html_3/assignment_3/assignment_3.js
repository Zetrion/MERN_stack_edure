// LECTURE: Destructuring of arrays and objects, Spread Operator

// 1. An array books is provided, use array destructuring to extract the values into
// variables book1, book2, book3 and log to the console.
// 2. Apply object destructuring to extract title, author, published from book 2
// and log a string to the console “Book 2: To Kill a Mockingbird by Harper Lee,
// published in 1960”.
// 3. Create a new book4 object with the following details:
// 1. Title: "Harry Potter and the Sorcerer's Stone"
// 2. Author: "J.K. Rowling"
// 3. Genre: "Fantasy"
// 4. Publication Year: 1997
// 5. Rating: 4.7
// 4. Use the spread operator to add this book to the books array. Log the
// updated array to the console.
// 5. Use the spread operator to create a shallow copy of the books array named
// copiedBooks.

let books = [
 {
 title: 'The Great Gatsby',
 author: 'F. Scott Fitzgerald',
 genre: 'Classic',
 publicationYear: 1925,
 rating: 4.2,
 },
 {
 title: 'To Kill a Mockingbird',
 author: 'Harper Lee',
 genre: 'Fiction',
 publicationYear: 1960,
 rating: 4.5,
 },
 {
 title: 'The Hobbit',
 author: 'J.R.R. Tolkien',
 genre: 'Fantasy',
 publicationYear: 1937,
 rating: 4.3,
 },
]

let [book1,book2,book3]=books;
console.log(books);
console.log(`Book 2: ${book2.title} by ${book2.author},published in ${book2.publicationYear}.`);

let book4={
    Title: "Harry Potter and the Sorcerer's Stone",
    Author: "J.K. Rowling",
    Genre: "Fantasy",
    PublicationYear: 1997,
    Rating: 4.7,
}

let ubooks=[...books,book4];
console.log(ubooks);

let copiedBooks=[...ubooks];
console.log(copiedBooks);
import React from 'react';
import { books, books2 } from './books';
import Book from './Book';

export const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book, index) => (
        <Book key={book.id} {...book} number={index} />
      ))}
    </section>
  );
};

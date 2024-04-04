import React from 'react';
import { books, books2 } from './books';
import Book from './Book';

export const BookList = () => {
  return (
    <section className='booklist'>
      {books2.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </section>
  );
};

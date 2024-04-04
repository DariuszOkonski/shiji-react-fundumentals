import React from 'react';
import { books } from './books';
import Book from './Book';

export const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </section>
  );
};

const title = 'Onyx Storm';
const author = 'Rebecca Yarros';
const img = './images/book1.jpg';

const firstBook = {
  author: 'Jordan More',
  title: 'Interesting Facts For Curious Minds',
  img: './images/book1.jpg',
};

const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: './images/book2.jpg',
};

export const BookList = () => {
  return (
    <section className='booklist'>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

const Book = ({ img, title, author }) => {
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

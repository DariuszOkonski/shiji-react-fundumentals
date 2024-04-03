const title = 'Onyx Storm';
const author = 'Rebecca Yarros';
const img = './images/book1.jpg';

const books = [
  {
    id: 1,
    author: 'Jordan More',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book1.jpg',
  },
  {
    id: 2,
    author: 'Jordan More',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book2.jpg',
  },
  {
    id: 3,
    author: 'Johnny Bravo',
    title: 'Something stupid',
    img: './images/book3.jpg',
  },
];

export const BookList = () => {
  return (
    <section className='booklist'>
      <EventExamples />

      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
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

const EventExamples = () => {
  const handleFormInput = (e) => {
    e.preventDefault();
    console.log('hello');
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    console.log('click');
  };

  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          style={{ margin: '1rem 0' }}
          onChange={handleFormInput}
        />
        <button onClick={handleButtonClick}>click me</button>
      </form>
    </section>
  );
};

export const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src='https://m.media-amazon.com/images/I/71HMJiEu7JL._SY466_.jpg'
    alt=''
  />
);
const Title = () => <h2>Onyx Storm</h2>;
const Author = () => {
  return <h4>Rebecca Yarros</h4>;
};

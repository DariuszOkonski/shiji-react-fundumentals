export const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/71HMJiEu7JL._AC_UL600_SR600,400_.jpg'
    alt=''
  />
);
const Title = () => <h2>Onyx Storm</h2>;
const Author = () => {
  return <h4>Rebecca Yarros</h4>;
};

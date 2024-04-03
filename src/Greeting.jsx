function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

export default Greeting;

const Message = () => {
  return <p>this is my message</p>;
};

const Person = () => {
  return <h1>John Doe</h1>;
};

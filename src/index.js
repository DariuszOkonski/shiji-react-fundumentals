import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
  return (
    <div>
      <h1>My First Component</h1>
      <h2>Hi</h2>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);

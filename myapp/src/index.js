import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/51X4eBEqyqL._SY445_SX342_.jpg"
    alt="It Ends with us"
  />
);
const Title = () => <h2>It Ends with Us</h2>;
const Author = () => {
  return <h4>Colleen Hoover</h4>;
};
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<BookList />);

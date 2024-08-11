import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const author = "Colleen Hoover";
const title = "It ends with us";
const img = "https://m.media-amazon.com/images/I/51X4eBEqyqL._SY445_SX342_.jpg";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={img}></img>
      <h2>{title}</h2>
      <h4> {author}</h4>
      {console.log(props)}
    </article>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<BookList />);

import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const author = "Colleen Hoover";
const title = "It ends with us";
const img = "https://m.media-amazon.com/images/I/51X4eBEqyqL._SY445_SX342_.jpg";

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        img={firstBook.img}
        title={firstBook.title}
      >
        <p> loren islem</p>
      </Book>
      <Book
        author={secondBook.author}
        img={secondBook.img}
        title={secondBook.title}
      />
    </section>
  );
};

const firstBook = {
  author: "Alpha",
  title: "beta",
};

const secondBook = {
  author: "Delta",
  title: "gama",
};

const Book = (props) => {
    const { img, title, author, children } = props;
    console.log(props);
  return (
    <article className="book">
      <img src={img}></img>
      <h2>{title}</h2>
      <h4> {author}</h4>
      {children}
    </article>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<BookList />);

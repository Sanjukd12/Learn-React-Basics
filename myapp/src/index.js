import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <EventExample />
      {books.map((book) => {
        const { title, author, id } = book;
        return <Book key={id} book={book} />;
      })}
    </section>
  );
};

const EventExample = () => {
  const handleFormInput = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log("handle form input");
  };
  const handleButtonClick = () => {
    alert("handle button click");
  };
  const handleSubmissionForm = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <section>
      <form onSubmit={handleSubmissionForm}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleButtonClick}>Click Me</button>
    </section>
  );
};

const books = [
  {
    img: "https://via.placeholder.com/150", // Placeholder image URL
    author: "Delta",
    title: "Gama",
    id: 2,
  },
  {
    img: "https://via.placeholder.com/150", // Placeholder image URL
    author: "Alpha",
    title: "Beta",
    id: 1,
  },
  {
    img: "https://via.placeholder.com/150", // Placeholder image URL
    author: "Pie",
    title: "Delta",
    id: 3,
  },
];

const Book = (props) => {
  const { img, title, author } = props.book;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

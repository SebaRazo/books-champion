//rafc atajo importante

import "./BookItem.css";

const BookItem = ({ title, author, pageCount, dateRead }) => {
  return (
    <div className="book-item-container">
      <h2>{title}</h2> <h3>{author}</h3>
      <div>{dateRead.toString()}</div>
      <p>{pageCount} paginas</p>
    </div>
  );
};

export default BookItem;

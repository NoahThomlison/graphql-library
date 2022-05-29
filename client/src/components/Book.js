function Book({book, setId}) {

  return (
    <li onClick={() => setId(book.id)}className="Book rounded">
        {book.name}
    </li>
  );
}

export default Book;

function Book({book, setId}) {

  return (
    <li className="Book rounded">
      <div onClick={() => setId(book.id)}>
        <h1>{book.name}</h1>
      </div>
    </li>
  );
}

export default Book;

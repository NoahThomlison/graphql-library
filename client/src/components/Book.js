
function Book({book}) {
  console.log(book.name)
  return (
    <div className="Book">
      <h2>{book.name}</h2>
    </div>
  );
}

export default Book;

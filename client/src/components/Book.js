import {
  useQuery,
  useLazyQuery
} from "@apollo/client";

function Book({book, setId}) {
  console.log(book)
  return (
    <div className="Book">
      <div onClick={() => setId(book.id)}>
        <h1>{book.name}</h1>
      </div>

    </div>
  );
}

export default Book;

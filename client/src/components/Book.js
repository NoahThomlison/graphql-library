import {
  useQuery,
  useLazyQuery
} from "@apollo/client";

function Book({book, setId}) {
  return (
    <div className="Book">
      <li onClick={() => setId(book.id)}>{book.name}</li>
    </div>
  );
}

export default Book;

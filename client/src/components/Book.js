import {
  useQuery,
  useLazyQuery
} from "@apollo/client";
import {getBookDetails} from '../queries/queries'

function Book({book}) {
  const [showDetails, { data }] = useLazyQuery(getBookDetails);
  return (
    <div className="Book">
      <h2>{book.name}</h2>
      <button onClick={() => showDetails({ variables: { id: book.id } })}>Details</button>
      {data ? 
      <h1>test</h1>:
      <h2>no test</h2>}
    </div>
  );
}

export default Book;

import Book from './Book.js'
import {
  gql,
  useQuery,
} from "@apollo/client";

const getBookQuery = gql`
  {
    books{
      name
      id
    }
  }
`

function BookList() {
  const { loading, error, data } = useQuery(getBookQuery);
    console.log(data);

  return (
    <div className="BookList">
      <h1>BookList</h1>
      <Book></Book>
    </div>
  );
}

export default BookList;
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
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error </p>;
    if(data)
      return (
        <div className="BookList">
        <h1>BookList</h1>
        {console.log(data)}
        {data.books.map((book) => {
          console.log(book)
          return(
            <Book book={book}></Book>
          )
        })}
        </div>
      );

}

export default BookList;
import {
  useQuery,
  useLazyQuery
} from "@apollo/client";
import {getBookDetailsQuery} from '../queries/queries'


// function to render book details whenb book selected
function BookDetails({id}) {
	const { loading, error, data } = useQuery(getBookDetailsQuery, {
		variables: { id: id }
	});  
  if (loading) return(<h5>Loading</h5>)
  if (error) {
    console.log(error)
  }
  if (!data) {
    return(
      <h5>No Book Selected</h5>
    )
  }
  if (data) {
    console.log(data)
    return(
      <div className="bookDetails">
        <h4>{data.book.name}</h4>
        <h5>Genre: {data.book.genre}</h5>
        <h5>By: {data.book.author.name}</h5>
        <h5>Age: {data.book.author.age}</h5>
        <h5>Other Books by this Author</h5>
        <div className="booksByAuthor">
          {data.book.author.books.map((book) => {return(<li>{book.name}</li>)})}
        </div>
      </div>
    )}
}

export default BookDetails;

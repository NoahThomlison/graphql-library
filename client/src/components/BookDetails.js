import {
  useQuery,
  useLazyQuery
} from "@apollo/client";
import {getBookDetailsQuery} from '../queries/queries'

function BookDetails({id}) {
	const { loading, error, data } = useQuery(getBookDetailsQuery, {
		variables: { id: id }
	});  
  if (loading) return(<h1>Loading</h1>)
  if (error) {
    console.log(error)
  }
  if (data) {
    console.log(data)
    return(<h1>data</h1>)
  }

  return (
    <div className="BookDetails">
    </div>
  );
}

export default BookDetails;

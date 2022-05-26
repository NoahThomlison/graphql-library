import {
  useQuery,
} from "@apollo/client";

import {getBookQuery} from '../queries/queries'

function BookDetails() {
  const { loading, error, data } = useQuery(getBookQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error </p>;
    if(data)
      return (
        <div className="book-details">
          <p>Output details</p>
        </div>
      );

}

export default BookDetails;
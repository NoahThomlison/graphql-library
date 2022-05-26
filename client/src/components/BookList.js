import Book from './Book.js'
import BookDetails from './BookDetails.js'
import React, {useState, useEffect} from "react"
import {
  useQuery,
} from "@apollo/client";

import {getBookQuery} from '../queries/queries'

function BookList() {
  const [id, setId] = useState("")
  console.log(id)

  const { loading, error, data } = useQuery(getBookQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error </p>;
    if(data)
      return (
        <div className="BookList">
        <h1>BookList</h1>
        <ul>
        {console.log(data)}
        {data.books.map((book) => {
          return(
            <Book setId={setId} book={book}></Book>
          )
        })}
        </ul>
        <BookDetails id={id}></BookDetails>
        </div>

      );

}

export default BookList;
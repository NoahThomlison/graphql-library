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
        <div className="mx-auto container ">
          <div className="container main">
            <h1 className="text-blue-600">BookList</h1>
            <ul>
            {console.log(data)}
            <div className="booklist">
              {data.books.map((book) => {
                return(
                  <Book setId={setId} book={book}></Book>
                )
              })}
            </div>
            </ul>
          </div>
        <div className='bookDetails'>
          <BookDetails id={id}></BookDetails>
        </div>
        </div>
      );
}

export default BookList;
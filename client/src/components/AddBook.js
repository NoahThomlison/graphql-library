import {
  useQuery,
} from "@apollo/client";
import {getAuthors} from '../queries/queries'
import React, {useState, useEffect} from "react"

function AddBook() {
  const [name, setName] = useState("")
  const [genre, setGenre] = useState("")

  const { data } = useQuery(getAuthors);

  console.log(data)
  if (data) return (
    <form id="add-book">

    <div className="field">
      <label>Book name:</label>
      <input type="text" onChange={event => setName(event.target.value)} value={name}/>
    </div>

    <div className="field">
      <label>Genre:</label>
      <input type="text" onChange={event => setGenre(event.target.value)} value={genre}/>
    </div>

    <div className="field">
      <label>Author:</label>
      <select>
        {data.authors.map((author) => {
        return(
        <option key={author.id} value={author.id}>{author.name}</option>
        )
        })}
      </select>
    </div>

    <button></button>

    </form>
  );
}

export default AddBook;
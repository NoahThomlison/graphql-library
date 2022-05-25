import {
  useQuery,
} from "@apollo/client";
import {getAuthors} from '../queries/queries'
import React, {useState, useEffect} from "react"

function AddBook() {
  const [name, setName] = useState("")
  const [genre, setGenre] = useState("")
  const [authorId, setAuthorId] = useState("62882b6ff869cd97418c4aab")
  const { data } = useQuery(getAuthors);

  const submitForm = (event) => {
    console.log(name, genre, authorId)
    event.preventDefault();
    setName("")
    setGenre("")
    setAuthorId("")
  }

  console.log(data)
  if (data) return (
    <form id="add-book" onSubmit={event => submitForm(event)}>

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
      <select onChange={event => setAuthorId(event.target.value)}>
        {data.authors.map((author) => {
        return(
        <option key={author.id} value={author.id}>{author.name}</option>
        )
        })}
      </select>
    </div>

    <button >+</button>

    </form>
  );
}

export default AddBook;
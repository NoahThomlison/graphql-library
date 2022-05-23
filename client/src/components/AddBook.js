import {
  gql,
  useQuery,
} from "@apollo/client";

const getAuthors = gql`
  {
    authors{
      name
      id
    }
  }
`

function AddBook() {
  const { data } = useQuery(getAuthors);
  console.log(data)
  if (data) return (
    <form id="add-book">

    <div className="field">
      <label>Book name:</label>
      <input type="text"/>
    </div>

    <div className="field">
      <label>Genre:</label>
      <input type="text"/>
    </div>

    <div className="field">
      <label>Author:</label>
      <select>
        {data.authors.map((author) => {
        return(
        <option>{author.name}</option>
        )
        })}
      </select>
    </div>

    <button></button>

    </form>
  );
}

export default AddBook;
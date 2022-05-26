import {
  gql,
} from "@apollo/client";

const getAuthors = gql`
  {
    authors{
      name
      id
    }
  }
`

const getBookQuery = gql`
  {
    books{
      name
      id
    }
  }
`

const getBookDetailsQuery = gql`
    query GetBook($id: ID!){
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`;


const addBookMutation = gql`
mutation ($name: String!, $genre: String!, $authorId: ID!){
  addBook(
    name: $name, 
    genre: $genre, 
    authorId: $authorId
  )
  {
    name
    id
    genre
  }
}
`

export { getAuthors, getBookQuery, addBookMutation, getBookDetailsQuery }
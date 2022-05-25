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

export { getAuthors, getBookQuery }
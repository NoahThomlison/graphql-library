const express = require("express")
const app = express()
const graphQLHTTP = require('express-graphql')

app.use("/graphQL", graphQLHTTP({
  
}))

app.listen(4000, () => {
  console.log("App listening on port 400")
})
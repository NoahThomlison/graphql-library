const express = require("express")
const app = express()
const graphQLHTTP = require('express-graphql')
const schema = require("./schema/schema")

app.use("/graphQL", graphQLHTTP({
  schema: schema
}))

app.listen(4000, () => {
  console.log("App listening on port 400")
})
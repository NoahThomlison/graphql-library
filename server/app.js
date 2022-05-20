const express = require("express")
const app = express()
const { graphqlHTTP } = require('express-graphql');
const schema = require("./schema/schema")
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://noahthomlison:test123@cluster0.zvasa.mongodb.net/?retryWrites=true&w=majority")
mongoose.connection.once("open", () => {
  console.log("connected to database")
})

app.use('/graphql', graphqlHTTP({
  schema:schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log("App listening on port 400")
})

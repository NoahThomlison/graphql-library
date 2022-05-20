const graphql = require("graphql")
const _ = require("lodash")

const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql

const testData = [
  {name: "Name of the wind", genre: "fantasy", id:"1"},
  {name: "The something game", genre: "fantasy", id:"2"},
  {name: "Battle of Alberta", genre: "fantasy", id:"3"}
]

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: ()=>({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    genre: {type: GraphQLString}
  })
})

const RootQuery = new GraphQLObjectType({
  name: "RootQueryTpye",
  fields: {
    book: {
      type: BookType,
      args: {id: {type: GraphQLString}},
      resolve(parent, args){
        return _.find(testData, {id: args.id})
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
const graphql = require("graphql")
const _ = require("lodash")

const {
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLSchema, 
  GraphQLID, 
  GraphQLInt,
  GraphQLList
} = graphql

const testBooks = [
  {name: "Name of the wind", genre: "fantasy", id:"1", authorid: "1"},
  {name: "The something game", genre: "fantasy", id:"2", authorid: "2"},
  {name: "Battle of Alberta", genre: "fantasy", id:"3", authorid: "3"},
  {name: "Stuff I like", genre: "fantasy", id:"1", authorid: "1"},
  {name: "This is a phone?", genre: "fantasy", id:"2", authorid: "2"},
  {name: "Pills Pills Pills", genre: "fantasy", id:"3", authorid: "3"},
  {name: "Cat in the hat", genre: "fantasy", id:"1", authorid: "1"},
  {name: "SodaStream Wars", genre: "fantasy", id:"2", authorid: "2"},
  {name: "Where did my hair go?", genre: "fantasy", id:"3", authorid: "3"},
]

const testAuthors = [
  {name: "Noah T", age: "33", id:"1"},
  {name: "Lady Dog", age: "12", id:"2"},
  {name: "Loona poo", age: "7", id:"3"}
]

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: ()=>({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    genre: {type: GraphQLString},
    author: {
      type: AuthorType,
      resolve(parent, args){
        return _.find(testAuthors, {id: parent.authorid})
      }
    }
  })
})

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: ()=>({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    age: {type: GraphQLInt},
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args){
        return _.filter(testBooks, {authorid: parent.id})
      }
    }
  })
})

const RootQuery = new GraphQLObjectType({
  name: "RootQueryTpye",
  fields: {
    book: {
      type: BookType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return _.find(testBooks, {id: args.id})
      }
    },
    author: {
      type: AuthorType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return _.find(testAuthors, {id: args.id})
      }    
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args){
        return testBooks
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args){
        return testAuthors
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
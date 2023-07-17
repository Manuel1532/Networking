const {gql} = require("apollo-server");

const typeDefs = gql `
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nacionalidad!
        friends: [User]
        peliculaFav: [Movie]
    }

    type Movie {
        id: ID!
        name: String!
        yearOfPublication: Int!
        DisponibleCine: Boolean!
    }

    type Query {
        users: [User!]! 
        user(id: ID!): User!     
        movies: [Movie!]!
        movie(name:String!): Movie!
    }

    input CrearUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nacionalidad = CHILE
    }

    input UpdateUsernameInput {
        id: ID!
        newUsername: String!
    }

    type Mutation {
       crearUsuario(input: CrearUserInput!): User
       UpdateUsername(input: UpdateUsernameInput!): User
       deleteUser(id: ID!): User
    }

    enum Nacionalidad {
        MEXICANO
        VENEZOLANO
        PERUANO
        DOMINICANO
        CHILENO
    }
`;

module.exports = { typeDefs }
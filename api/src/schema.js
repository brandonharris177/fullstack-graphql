const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
    type User {
      id: ID!
      username: String!
    }

    type Pet {
      id: ID!
      createdAt: String!
      name: String!
      type: String!
    }

    input PetInput {
        name: String
        type: String
    }

    input UserInput {
      username: String
    }

    type Query {
        users(input: UserInput): [User]!
        pets(input: PetInput): [Pet]!
        pet(input: PetInput): Pet
    }

    input NewPetInput {
        name: String!
        type: String!
    }

    input NewUserInput {
        username: String!
    }

    type Mutation {
      newPet(input: NewPetInput!): Pet!
      newUser(input: NewUserInput!): User!
    }
`;

module.exports = typeDefs

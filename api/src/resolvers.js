/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
      user(_, _, {models}) {
        return {
          id: 'this id',
          username: 'this username'
        }
    },

    pet(_, _, {models}) {
      return {
        id: "pet id",
        CreatedAt: 4,
        name: "pet name",
        type: "pet type",
      }
    }
  },
  Mutation: {
    
  },
  Pet: {
    img(pet) {
      return pet.type === 'DOG'
        ? 'https://placedog.net/300/300'
        : 'http://placekitten.com/300/300'
    }
  },
  User: {
    
  }
}

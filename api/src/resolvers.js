/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    //   user(_, _, {models, db}) {
    //     return {
    //       id: 'this id',
    //       username: 'this username'
    //     }
    // },

    pets(_, {input}, {models, db}) {
      return models.Pet.findMany(input)
    },
    pet(_, {input}, {models, db}) {
      return models.Pet.findOne(input)
    }
  },
  // Mutation: {
    
  // },
  // Pet: {
  //   img(pet) {
  //     return pet.type === 'DOG'
  //       ? 'https://placedog.net/300/300'
  //       : 'http://placekitten.com/300/300'
  //   }
  // },
  // User: {
    
  // }
}

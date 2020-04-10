/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
  pets(_, {input}, {models, db}) {
      return models.Pet.findMany(input)
    },

    pet(_, {input}, {models, db}) {
      return models.Pet.findOne(input)
    },

    users(_, {input}, {models, db}) {
      console.log(input)
      return models.User.findMany(input)
    }
  },
  Mutation: {
    newPet(_, {input}, {models, db}) {
      return models.Pet.create(input)
    },

    newUser(_, {input}, {models, db}) {
      return models.User.create(input)
    }
  },
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

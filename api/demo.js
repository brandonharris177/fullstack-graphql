const gql = require('graphql-tag');
const {ApolloServer} = require('apollo-server');

const typeDefs = gql`
    type User {
        email: String!
        avatar: String
        friends: [User!]!
    }

    type Shoe {
        brand: String!
        size: Int!
    }

    input ShoeInput {
        brand: String
        size: Int
    }

    type Query {
        me: User!
        shoes(input: ShoeInput): [Shoe]!
    }
`

const resolvers = {
    Query: {
        me() {
            return {
                email: 'yoda@masters.com',
                avatar: 'http://yoda.png',
                friends: []
            }
        },

        shoes(_, {input}) {
            return [
                {brand: 'nike', size: 12},
                {brand: 'adiddas', size: 13}
            ].filter(shoe => {
                return shoe.brand === input.brand
            })
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen(4000)
    .then(() => console.log('on port 4000'))
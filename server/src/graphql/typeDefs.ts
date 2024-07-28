import { gql } from 'apollo-server';

export const typeDefs = gql`
type User {
    firstName: String
    lastname: String
    email: String
    password: String
}

input UserInput {
    firstName: String
    lastname: String
    email: String
    password: String
}

type Query {
    getUser(id: ID): User
}

type Mutation {
    createUser(userInput:UserInput ): User!
}
`;

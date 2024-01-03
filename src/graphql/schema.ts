// src/graphql/schema.ts
import { gql } from "apollo-server-micro";

// src/graphql/schema.ts
export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    token: String!
  }
  type Query {
    hello: String
  }
  type Mutation {
    login(username: String!, password: String!): User
  }

  type UrlItem {
    url: String
    title: String!
    counter: String!
  }

  type ShortUrl {
    url: String
  }

  type Mutation {
    convertUrl(url: String!): ShortUrl
  }

  type Mutation {
    accessUrl(url: String!): UrlItem
  }
`;

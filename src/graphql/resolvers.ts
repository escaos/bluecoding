import { convertUrl, getPopular } from "./services";

// src/graphql/resolvers.ts
export const resolvers = {
  Query: {
    hello: () => "Hello World!",
    popularUrls: () => getPopular(),
  },
  Mutation: {
    login: async (_, { username, password }) => {
      // Mock user data for now
      return {
        id: "1", // Mocked user ID
        name: username, // Mocked user name
        token: "token123", // Mocked token
      };
    },
    convertUrl: async (_, { url }) => {
      const shortUrl = convertUrl(url);

      // Mock user data for now
      return {
        url: shortUrl,
      };
    },
    accessUrl: async (_, { url }) => {
      // Mock user data for now
      return {
        id: "1", // Mocked user ID
        name: username, // Mocked user name
        token: "token123", // Mocked token
      };
    },
  },
};

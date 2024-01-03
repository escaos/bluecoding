import { gql } from "@apollo/client";

export const POPULAR_QUERY = gql`
  query Popular() {
    popularUrls() {
      id
      name
      token
    }
  }
`;

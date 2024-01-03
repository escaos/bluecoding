import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($url: String!) {
    convertUrl(url: $username) {
      shortUrl
    }
  }
`;

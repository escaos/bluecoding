import { POPULAR_QUERY } from "@/graphql/operations/populars.gql";
import { useQuery } from "@apollo/client";

export const usPopularQuery = () => {
  return useQuery(POPULAR_QUERY);
};

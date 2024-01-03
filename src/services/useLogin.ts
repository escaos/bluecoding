import { LOGIN_MUTATION } from "@/schema/login.gql";
import { useMutation } from "@apollo/client";

export const useLoginMutation = () => {
  return useMutation(LOGIN_MUTATION);
};

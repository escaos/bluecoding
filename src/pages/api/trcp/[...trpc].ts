import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "../../../server/routers";
import { Context } from "react";

// A dummy implementation of createContext
export const createContext = ({ req, res }): Context => {
  // TODO: Implement logic to derive context (e.g., extracting user from session)
  return {};
};

export default createNextApiHandler({
  router: appRouter,
  createContext: createContext,
});

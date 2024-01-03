// src/server/routers/authRouter.ts
import t from "../trpc";
import { z } from "zod";

export const authRouter = t.router({
  login: t.procedure
    .input(
      z.object({
        username: z.string(),
        password: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      // Login logic here
    }),
  logout: t.procedure.mutation(async () => {
    // Logout logic here
  }),
});

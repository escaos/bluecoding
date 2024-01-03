// src/server/routers/authRouter.ts
import t from "../trpc";
import { z } from "zod";

export const urlsRouter = t.router({
  convert: t.procedure
    .input(
      z.object({
        urls: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      // Login logic here
    }),
});

// src/server/routers/index.ts
import t from "../trpc";
import { authRouter } from "./authRouter";
import { urlsRouter } from "./urlsRouter";

export const appRouter = t.router({
  auth: authRouter,
  urls: urlsRouter,
  // ... other routers
});

// export type for your API
export type AppRouter = typeof appRouter;

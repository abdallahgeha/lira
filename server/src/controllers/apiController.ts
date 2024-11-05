import { Router, Request, Response } from "express";

export const apiRoutes = Router();

apiRoutes.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

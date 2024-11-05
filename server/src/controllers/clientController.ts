import { Router, Request, Response } from "express";
import path from "path";

export const clientRoutes = Router();

clientRoutes.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../../client/dist/index.html"));
});

import { timeStamp } from "console";
import { Router, Request, Response } from "express";

export const healthRoutes = Router();

healthRoutes.get("/", (req: Request, res: Response) => {
  res.json({
    NODE_ENV: process.env.NODE_ENV,
    status: "OK",
    timeStamp: new Date().toISOString(),
  });
});

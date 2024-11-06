import { Router, Request, Response } from "express";
import pool from "../db/db";
import { PrismaClient } from "@prisma/client";

export const apiRoutes = Router();

const prisma = new PrismaClient();

apiRoutes.get("/users", async (req: Request, res: Response) => {
  try {
    // const result = await pool.query("SELECT * FROM users");
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

apiRoutes.get("/adduser", async (req: Request, res: Response) => {
  try {
    const newUsers = await prisma.user.create({
      data: {
        name: crypto.randomUUID(),
        email: `${crypto.randomUUID()}@emil.com`,
      },
    });
    res.status(201).json(newUsers);
  } catch (err) {
    res.status(500).send(err);
  }
});

apiRoutes.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

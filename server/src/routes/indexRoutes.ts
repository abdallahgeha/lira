import { Router } from "express";
import { apiRoutes } from "../controllers/apiController";
import { clientRoutes } from "../controllers/clientController";

const router = Router();

// API route
router.use("/api", apiRoutes);

// Prefix for client app serving route
router.use("/*client", clientRoutes);

export default router;

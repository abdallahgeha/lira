import { Router } from "express";
import { apiRoutes } from "../controllers/apiController";
import { clientRoutes } from "../controllers/clientController";
import { healthRoutes } from "../controllers/healthController";

const router = Router();

// Health Check
router.use("/health", healthRoutes)

// API route
router.use("/api", apiRoutes);

// Prefix for client app serving route
router.use("/*client", clientRoutes);

export default router;

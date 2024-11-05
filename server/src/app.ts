import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import routes from "./routes/indexRoutes";

const app: Express = express();

// Apply middlewares
app.use(helmet());
app.use(cors());

// Serve static files from the client
app.use(express.static(path.join(__dirname, "../../client/dist")));

// Register routes
app.use(routes);

export default app;

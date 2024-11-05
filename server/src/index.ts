import dotenv from "dotenv";
import app from "./app";

// Load environment variables from .env
dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(
    `[server]: Server is running at http://localhost:${port} with NODE_ENV=${process.env.NODE_ENV}`
  );
});

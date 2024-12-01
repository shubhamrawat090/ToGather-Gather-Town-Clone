import express from "express";
import { router as v1Router } from "./routes/v1";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1", v1Router);

app.listen(PORT, () => {
  console.log(`Started listening at port: ${PORT}`);
});

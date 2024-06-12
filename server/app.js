import express, { json } from "express";
import botRoutes from "./routes/bot_routes.js";

const app = express();

app.use(json());
app.use("/api/bot", botRoutes);

export default app;

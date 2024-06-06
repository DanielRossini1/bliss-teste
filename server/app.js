import express, { json } from "express";
import botRoutes from "./routes/bot_routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use("/api/bot", botRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

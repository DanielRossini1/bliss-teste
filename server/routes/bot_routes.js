import { Router } from "express";
import ControlRoom from "../../src/central_manager/control_room";

const botRouter = Router();
const controlRoom = new ControlRoom();

botRouter.post("/start", async (req, res) => {
  const { productName } = req.body;

  if (!productName) {
    return res.status(400).send({ error: "Product name is required" });
  }

  try {
    await controlRoom.startAutomation(productName);
    res
      .status(200)
      .send({ message: `Automation started for product: ${productName}` });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

export default botRouter;

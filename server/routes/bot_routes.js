import { Router } from "express";
import ControlRoom from "../../src/central_manager/control_room.js";
import MarketplaceOrchestrator from "../../src/orchestrator/marketplace_orchestrator.js";

const botRouter = Router();

botRouter.post("/start", async (req, res) => {
  const { productName, marketplace, actions } = req.body;

  const orchestrator = new MarketplaceOrchestrator();
  const controlRoom = new ControlRoom(orchestrator);

  if (!productName || !actions || !marketplace) {
    return res
      .status(400)
      .send({ error: "Product name, markeplace and actions are required" });
  }

  try {
    await controlRoom.startAutomation(marketplace, productName, actions);
    res
      .status(200)
      .send({ message: `Automation started for product: ${productName}` });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

export default botRouter;

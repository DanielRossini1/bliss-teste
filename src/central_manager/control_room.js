import MarketplaceOrchestrator from "../orchestrator/marketplace_orchestrator.js";

class ControlRoom {
  constructor() {
    this.orchestrator = new MarketplaceOrchestrator();
  }

  async startAutomation(marketplace, productName, actions) {
    console.info(
      `Starting automation for product: ${productName} on marketplace: ${marketplace}`
    );
    await this.orchestrator.run(productName, actions);
    console.info(
      `Automation completed for product: ${productName} on marketplace: ${marketplace}`
    );
  }
}

export default ControlRoom;

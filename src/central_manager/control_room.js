class ControlRoom {
  constructor(orchestrator) {
    this.orchestrator = orchestrator;
  }

  async startAutomation(marketplace, productName) {
    console.info(
      `Starting automation for product: ${productName} on marketplace: ${marketplace}`
    );
    await this.orchestrator.run(marketplace, productName);
    console.info(
      `Automation completed for product: ${productName} on marketplace: ${marketplace}`
    );
  }
}

export default ControlRoom;

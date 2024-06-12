class ControlRoom {
  constructor(orchestrator) {
    this.orchestrator = orchestrator;
  }

  async startAutomation(marketplace, productName, actions) {
    console.info(
      `Starting automation for product: ${productName} on marketplace: ${marketplace}`
    );
    await this.orchestrator.run(marketplace, productName, actions);
    console.info(
      `Automation completed for product: ${productName} on marketplace: ${marketplace}`
    );
  }
}

export default ControlRoom;

import { getBot } from "../bot/bot_factory";

class MarketplaceOrchestrator {
  async run(marketplace, productName, actions) {
    const bot = getBot(marketplace);
    await bot.execute(productName, actions);
  }
}

export default MarketplaceOrchestrator;
